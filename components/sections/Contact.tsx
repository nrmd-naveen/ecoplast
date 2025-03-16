// const ContactForm = () => {
//   return (
//     <section className="max-w-2xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
//       <form className="space-y-4">
//         {/* Name, Phone, Email */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <input
//             type="email"
//             placeholder="E-mail"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         {/* Subject */}
//         <input
//           type="text"
//           placeholder="Subject"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//         />

//         {/* Message */}
//         <textarea
//           placeholder="Message"
//           rows="4"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
//         ></textarea>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#6a9319]  text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#6a93199b]  transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;

"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send to WhatsApp
  const sendToWhatsApp = () => {
    const phoneNumber = "919843965683";
    const { name, phone, email, subject, message } = formData;

    // Format message
    const text = `Hello, I'm ${name}.
    📞 Phone: ${phone}
    📧 Email: ${email}
    📌 Subject: ${subject}
    📝 Message: ${message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(text);

    // Open WhatsApp link
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${919843965684}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Enquire Now</h2>
      <div className="space-y-4">
        {/* Name, Phone, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="button"
          onClick={sendToWhatsApp}
          className="w-full bg-[#6a9319] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#6a93199b] transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
