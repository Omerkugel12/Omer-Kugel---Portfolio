import React from "react";
import ContactMeForm from "./ContactMeForm";

function ContactMeLeft() {
  return (
    <div className="font-body">
      <h2 className="text-orange text-4xl font-body">Get In Touch</h2>
      <p className="text-white mt-6">
        Feel free to reach out if you'd like to collaborate.
        <br />
        You are just few clicks away!
      </p>
      <div className="mt-6">
        <ContactMeForm />
      </div>
    </div>
  );
}

export default ContactMeLeft;
