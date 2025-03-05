import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const contactMeInfo = [
  { key: "email", icon: HiOutlineMail, info: "omerkugel12@gmail.com" },
  { key: "phone", icon: FiPhone, info: "+972 52 4 250 285" },
  { key: "location", icon: IoLocationOutline, info: "Israel" },
];

function ContactMeInfo() {
  return (
    <div className="font-body flex flex-col gap-2 text-white">
      {contactMeInfo.map((info) => {
        return (
          <div key={info.key} className="flex items-center gap-4 text-lg">
            <info.icon className="text-2xl" />
            <span>{info.info}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ContactMeInfo;
