import React, { useState, useRef } from "react";
import { MdEmail, MdError } from "react-icons/md";
import { BsFillPhoneFill, BsFillCheckCircleFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import { SectionWrap } from "../wrapper";

const Contact = () => {
  const formRef = useRef();
  const [isFormError, setIsFormError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formErrorMsg, setFormErrorMsg] = useState("");
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setIsFormError(true);
      setFormErrorMsg("All fields are required");
    } else if (
      !formData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setIsFormError(true);
      setFormErrorMsg("Invalid Email");
    } else {
      setIsSending(true);
      setIsFormError(false);

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setIsSending(false);
            setIsSubmitted(true);
            setFormData(initialState);

            setTimeout(() => setIsSubmitted(false), 3000);
          },
          (error) => {
            setIsFormError(true);
            setFormErrorMsg(error.text);
            setIsSending(false);
          }
        );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header text-center w-fit text-primary font-bold text-4xl">
          Contact Me
        </h3>

        <div className="flex flex-wrap justify-center gap-y-4 md:gap-x-8 xl:gap-x-12">
          <a
            href="mailto:adewaletaiwo08@gmail.com"
            className="rounded-xl px-6 py-4 w-full md:w-[300px] flex bg-[#202020] border border-[rgba(64,66,69,0.5)] justify-center items-center gap-x-2 text-center text-sm break-all"
          >
            <span>
              <MdEmail className="fill-secondary text-2xl" />
            </span>

            <span className="font-medium">adewaletaiwo08@gmail.com</span>
          </a>
          <a
            href="tel:+2348106529259"
            className="rounded-xl px-6 py-4 w-full md:w-[300px] flex bg-[#202020] border border-[rgba(64,66,69,0.5)] justify-center items-center gap-x-2 text-center text-sm break-all"
          >
            <span>
              <BsFillPhoneFill className="fill-secondary text-2xl" />
            </span>
            <span className="font-medium">+2348106529259</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full md:w-[500px]"
        >
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="w-full p-4 rounded-xl outline-none text-sm placeholder:text-sm fbg-main-bg bg-[#37393c] border border-[rgb(64,66,69)]"
            placeholder="Your Name"
          />

          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-4 rounded-xl outline-none text-sm placeholder:text-sm fbg-main-bg bg-[#37393c] border border-[rgb(64,66,69)]"
            placeholder="Your Email"
          />

          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            value={formData.message}
            className="w-full p-4 rounded-xl outline-none text-sm placeholder:text-sm fbg-main-bg bg-[#37393c] border border-[rgb(64,66,69)] h-[150px]"
            placeholder="Your Message"
          />

          {isFormError && (
            <div className="bg-red-600 flex items-center gap-x-2 w-full rounded-xl px-6 py-4 mt-4 text-sm">
              <MdError className="text-xl" />
              {formErrorMsg}
            </div>
          )}

          {isSubmitted && (
            <div className="bg-green-600 flex items-center gap-x-2 w-full rounded-xl px-6 py-4 mt-4 text-sm">
              <BsFillCheckCircleFill className="text-xl" />
              Message sent successfully
            </div>
          )}

          <div className="text-center mt-4">
            <button className="bg-gradient-to-br gradient-colors py-3 px-8 text-white font-medium rounded-xl tracking-[0.5px]">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SectionWrap(Contact, "contact");
