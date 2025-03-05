import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMeForm() {
  const [formInputs, setFormInputs] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [success, setSucces] = useState();
  const [loading, setLoading] = useState();

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_01y61rd", "template_k5u61zj", form.current, {
        publicKey: "G1jsnxYO2-f3geTyu",
      })
      .then(
        () => {
          setFormInputs({
            from_email: "",
            from_name: "",
            message: "",
          });
          setSucces("Message sent!");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="w-full flex flex-col gap-4"
      >
        {success && <p className="text-cyan">{success}</p>}
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="h-12 rounded-lg px-2 bg-lightBrown text-white"
          value={formInputs.from_name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="h-12 rounded-lg px-2 bg-lightBrown text-white"
          value={formInputs.from_email}
          onChange={(e) => handleChange(e)}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={9}
          cols={50}
          className="rounded-lg p-2 bg-lightBrown text-white focus:border-cyan"
          value={formInputs.message}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>
        <button
          type="submit"
          className="text-white text-xl bg-cyan p-2 border border-cyan hover:bg-darkCyan transition-all duration-500 rounded-lg"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactMeForm;
