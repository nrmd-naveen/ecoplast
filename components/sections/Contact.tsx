"use client";

import { useState } from "react";

const ContactForm = ({ contactRef }: { contactRef: React.RefObject<HTMLInputElement> }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const sendToWhatsApp = () => {
    const phoneNumber = "919843965683";
    const { name, phone, email, subject, message } = formData;


    const text = `Hello, I'm ${name}.
    📞 Phone: ${phone}
    📧 Email: ${email}
    📌 Subject: ${subject}
    📝 Message: ${message}`;

    const encodedMessage = encodeURIComponent(text);


    const whatsappUrl = `https://api.whatsapp.com/send?phone=${919843965684}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" ref={contactRef} className="max-w-3xl mx-auto p-6">
        <div className="text-center text-3xl font-bold pb-15">
          Enquire Now
        </div>
      <div className="space-y-4">
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
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={sendToWhatsApp}
            className="w-full max-w-md bg-[#96c832] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#dde8c69b] transition duration-300"
            >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
