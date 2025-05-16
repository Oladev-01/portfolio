"use client"; // Must be the first line in the file (no imports before this)
import Image from "next/image";

import { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    phone: "",
    subject: ""
  });
  
  // State to handle client-side functionality
  const [isMounted, setIsMounted] = useState(false);
  
  // Set isMounted to true when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Only run on client-side
    if (!isMounted) return;
    
    // Email recipient
    const recipient = "lekanmojibola@gmail.com";
    
    // Email subject
    const emailSubject = formData.subject ? formData.subject : "Contact Query";
    
    // Email body
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Message:
      ${formData.message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client - safe for client side only
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full flex gap-5 justify-center content-center p-9 flex-col md:flex-row">
      <div className="w-full">
        <h1 className="text-4xl font-light">GET IN TOUCH</h1>
        <form className="flex-col flex gap-4" onSubmit={handleSubmit}>
          <textarea 
            name="message"
            placeholder="Enter Message" 
            className="w-full h-32 p-2 border border-gray-300"
            value={formData.message} 
            onChange={handleChange}
            required
          ></textarea>
          
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              name="name"
              placeholder="Enter your Name" 
              className="border border-gray-300 p-2 w-full" 
              value={formData.name} 
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Enter your Email" 
              className="border border-gray-300 p-2 w-full" 
              value={formData.email} 
              onChange={handleChange}
              required
            />
          </div>
          
          <input 
            type="tel" 
            name="phone"
            placeholder="Enter your Phone Number" 
            className="border border-gray-300 p-2 w-full" 
            value={formData.phone} 
            onChange={handleChange}
          />
          
          <input 
            type="text" 
            name="subject"
            placeholder="Enter Subject" 
            className="border border-gray-300 p-2 w-full" 
            value={formData.subject} 
            onChange={handleChange}
          />
          
          <button 
            type="submit" 
            className="w-full border border-gray-500 p-3 hover:bg-gray-100 transition-colors"
          >
            SEND
          </button>
        </form>
      </div>
      
      <div className="w-full flex gap-9 justify-center p-12 flex-col">
        <p className="text-4xl">CONTACT ME</p>

        <div className="flex gap-1.5 items-center">
          <IoHome className="text-lg" /> 
          <span>LAGOS, NIGERIA</span>
        </div>

        <div className="flex gap-1.5 items-center">
          <FaPhoneAlt className="text-lg" /> 
          <span>+2349067914516</span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-1.5 items-center">
            <FaEnvelope className="text-lg" /> 
            <span>lekanmojibola@gmail.com</span>
          </div>
          <p className="opacity-70 mt-1">Send us Your query anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;