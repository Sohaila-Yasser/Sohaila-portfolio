import React from "react";
import { useInView } from "react-intersection-observer";
import { EnvelopeOpen, MapPin, GitBranch, Phone } from "phosphor-react";
import { FaInstagram } from "react-icons/fa";
import "./contact.css";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="contact" ref={ref}>
      <h1 className="contact-title">Contact me</h1>
      <div className={`contact-icons ${inView ? "in-view" : ""}`}>
        <div>
          <EnvelopeOpen size={50} className="contact-icon" />
          <p className="details">ysohaila05@gmail.com</p>
        </div>
        <div>
          <FaInstagram size={50} className="contact-icon" />
          <p className="details">www.instagram.com/sohailayasser26/?hl=ar</p>
        </div>
        <div>
          <GitBranch size={50} className="contact-icon" />
          <p className="details">https://github.com/Sohaila-Yasser</p>
        </div>
        <div>
          <Phone size={50} className="contact-icon" />
          <p className="details">012xxxxxx95</p>
        </div>
      </div>
    </div>
  );
};
