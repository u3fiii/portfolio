import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Contact/contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact" id="Contact">
      <div className="left-part">
        <img />
        <h1>Let's Get In Touch</h1>
        <p className="desktop-desc">
          I am available for freelance work. Connect with me via email or
          LinkedIn. I have experience in web development, mobile app
          development, and software engineering. I am passionate about building
          high-quality and scalable applications. Let's work together to bring
          your ideas to life. Feel free to reach out to discuss your project
          requirements and how I can help you achieve your goals.
        </p>
        <p className="mobile-desc">
          I am available for freelance work. Connect with me via email or
          LinkedIn.
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
