// Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const contactMethods = [
  {
    id: 1,
    icon: <FaEnvelope />,
    method: "Email",
    detail: "jamalmajdy01@gmail.com",
    linkText: "Send Message",
    link: "mailto:Redactech@gmail.com",
  },
  {
    id: 2,
    icon: <FaFacebookMessenger />,
    method: "Messenger",
    detail: " More details will be added soon",
    linkText: "Send Message",
    link: "https://messanger",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    method: "WhatsApp",
    detail: "+967733508279",
    linkText: "Send Message",
    link: "https://wa.me/733508279",
  },
];

const Contact = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  }
  function sendDataForm(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_oq076pd", // استبدلها بما عندك
        "template_5suxnto", // استبدلها بما عندك
        dataForm,
        "eB01H5-ssZKhsowxF" // استبدلها بما عندك
      )
      .then(
        (result) => {
          alert("تم إرسال الرسالة بنجاح!");
          setDataForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("حدث خطأ أثناء الإرسال!");
          console.log(error);
          setLoading(false);
        }
      );
  }
  return (
    <section className="contact-section" id="contact">
      <h3 className="small-title">Get in Touch</h3>
      <h2 className="big-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-options">
          {contactMethods.map(
            ({ id, icon, method, detail, linkText, link }) => (
              <div key={id} data-aos="fade-up" className="contact-card">
                <span className="contact-icon">{icon}</span>
                <h4>{method}</h4>
                <p>{detail}</p>
                <a href={link} target="_blank" rel="noreferrer">
                  {linkText}
                </a>
              </div>
            )
          )}
        </div>
        <form className="contact-form" onSubmit={sendDataForm}>
          <input
            onChange={handleChange}
            value={dataForm.name}
            name="name"
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            onChange={handleChange}
            value={dataForm.email}
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            onChange={handleChange}
            value={dataForm.message}
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button className="submit"  type="submit" disabled={loading}>
            {loading ? "جاري الإرسال..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
