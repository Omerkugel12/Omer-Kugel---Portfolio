import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

function ContactMeMain() {
  return (
    <main id="contact" className="max-w-[1200px] mx-auto pt-40 px-10">
      <h2 className="text-cyan font-body text-6xl text-center">Contact Me</h2>
      <div className="flex sm:flex-col lg:flex-row items-center justify-between p-8 gap-24 rounded-2xl bg-brown">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </main>
  );
}

export default ContactMeMain;
