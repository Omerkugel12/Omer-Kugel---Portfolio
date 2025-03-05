import React from "react";
import ContactMeInfo from "./ContactMeInfo";
import SocialLinks from "./SocialLinks";

function ContactMeRight() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[300px]">
        <img src="/email-image.png" alt="Contact Me Image" />
      </div>
      <div className="mt-10">
        <ContactMeInfo />
      </div>
      <div className="mt-10">
        <SocialLinks />
      </div>
    </div>
  );
}

export default ContactMeRight;
