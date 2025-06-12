// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";


// export default function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   console.log(formData,'FORM DATA...')
//   //   setIsSubmitting(true);
//   //   try {
//   //     const response = await fetch(
//   //       // "https://n8n.srv853791.hstgr.cloud/webhook/simple-form",
//   //       "https://n8n.srv853791.hstgr.cloud/webhook-test/simple-form",
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(formData),
//   //       }
//   //     );
//   //     if (response.ok) {
//   //       setSubmitStatus("success");
//   //       setFormData({ name: "", email: "", phone: "", message:"" });
//   //     } else {
//   //       setSubmitStatus("error");
//   //     }
//   //   } catch (error) {
//   //     setSubmitStatus("error");
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const uniqueId = uuidv4(); // Generate UUID
//     const submissionData = { ...formData, id: uniqueId };
  
//     setIsSubmitting(true);
//     try {
//       const response = await fetch(
//         "https://n8n.srv853791.hstgr.cloud/webhook-test/simple-form",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(submissionData),
//         }
//       );
//       if (response.ok) {
//         setSubmitStatus("success");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setSubmitStatus("error");
//       }
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  

//   return (
//     <section className="bg-white dark:bg-gray-900 ">
//       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
//           Give Feedback
//         </h2>
//         <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//           Want to send feedback about a beta feature? Let us know.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div>
//             <label
//               htmlFor="name"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Your name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder="John Doe"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder="name@flowbite.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="phone"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Phone no.
//             </label>
//             <input
//               type="number"
//               name="phone"
//               id="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder="+91-989898898"
//               required
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//             >
//               Your feedback
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="6"
//               value={formData.message}
//               onChange={handleChange}
//               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//               placeholder="Leave a comment..."
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 w-full sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//           >
//             Send feedback
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};

    // Name
    if (formData.name.trim().length < 3 || formData.name.trim().length > 24) {
      newErrors.name = "Name must be between 3 and 24 characters.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Message
    if (formData.message.trim().length > 200) {
      newErrors.message = "Message cannot exceed 200 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = name === "message" ? value.slice(0, 200) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim the message on submission
    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    setFormData(trimmedData);

    if (!validate()) return;

    const uniqueId = uuidv4();
    const submissionData = { ...trimmedData, id: uniqueId };

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://n8n.srv853791.hstgr.cloud/webhook-test/simple-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Feedback Form
        </h2>
        <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Want to send feedback about a beta feature? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe"
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone no.
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="9876543210"
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your feedback
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment..."
              required
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg w-full sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isSubmitting ? "Submitting..." : "Send feedback"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-600 text-sm mt-2">Feedback submitted successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-600 text-sm mt-2">Failed to submit feedback. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

