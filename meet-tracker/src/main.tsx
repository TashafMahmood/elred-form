
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    chrome.storage.local.get(["attendees", "meetingStartedAt", "meetingEndedAt"], (result) => {
      setData(result);
    });
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto text-sm">
      <h1 className="text-xl font-bold text-center mb-4">Meet Attendance Report</h1>
      {data ? (
        <>
          <p><strong>Meeting Start:</strong> {new Date(data.meetingStartedAt).toLocaleString()}</p>
          <p><strong>Meeting End:</strong> {new Date(data.meetingEndedAt).toLocaleString()}</p>
          <table className="w-full mt-4 text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Join Time</th>
                <th className="p-2 border">Leave Time</th>
                <th className="p-2 border">Duration (sec)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.attendees).map(([name, info]: any) => (
                <tr key={name} className="border-b">
                  <td className="p-2 border">{name}</td>
                  <td className="p-2 border">{new Date(info.joinTime).toLocaleTimeString()}</td>
                  <td className="p-2 border">{info.leaveTime ? new Date(info.leaveTime).toLocaleTimeString() : 'Still in meet'}</td>
                  <td className="p-2 border">{info.totalTime.toFixed(0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading attendance data...</p>
      )}
    </div>
  );
};

const container = document.getElementById('root');
if (container) createRoot(container).render(<App />);
