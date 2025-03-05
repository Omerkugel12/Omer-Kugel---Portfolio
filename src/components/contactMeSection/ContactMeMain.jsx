import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

function ContactMeMain() {
  return (
    <main id="contact" className="max-w-[1200px] mx-auto pt-8 px-10">
      <h2 className="text-cyan font-body text-6xl text-center mb-10">
        Contact Me
      </h2>
      <div className="flex sm:flex-col lg:flex-row justify-between gap-24 p-8 rounded-2xl bg-brown">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </main>
  );
}

export default ContactMeMain;
