let attendees = {};
let meetingStartedAt = new Date();
let meetingEndedAt = null;

const observer = new MutationObserver(() => {
  const people = document.querySelectorAll('[data-participant-id]');
  const now = new Date();

  people.forEach(person => {
    const name = person.textContent.trim();
    if (!attendees[name]) {
      attendees[name] = { joinTime: now, leaveTime: null, totalTime: 0 };
    }
  });

  Object.keys(attendees).forEach(name => {
    const isStillPresent = Array.from(people).some(p => p.textContent.trim() === name);
    if (!isStillPresent && !attendees[name].leaveTime) {
      attendees[name].leaveTime = now;
      attendees[name].totalTime = (now - attendees[name].joinTime) / 1000;
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

window.addEventListener('beforeunload', () => {
  meetingEndedAt = new Date();
  chrome.storage.local.set({ attendees, meetingStartedAt, meetingEndedAt });
});
