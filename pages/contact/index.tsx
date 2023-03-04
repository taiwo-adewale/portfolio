import React, { useState, useRef } from "react";
import { MdError } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isFormError, setIsFormError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setIsFormError(true);
      setFormErrorMsg("All fields are required");
      return;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setIsFormError(true);
      setFormErrorMsg("Invalid Email");
      return;
    }

    setIsSending(true);
    setIsFormError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSending(false);
          setIsSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");

          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          setIsFormError(true);
          setFormErrorMsg(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <main className="text-dark dark:text-light">
      <div className="pt-2 md:pt-6 pb-6 md:pb-8 text-center">
        <h1 className="font-bold leading-9 tracking-tight text-dark dark:text-light text-3xl sm:leading-10 md:text-4xl lg:text-5xl xxl:text-6xl md:leading-14">
          Contact
        </h1>
      </div>

      <div className="py-6 md:py-8 xxl:py-14 flex-center gap-8 flex-wrap">
        <form
          // @ts-ignore
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full md:w-[600px]"
        >
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full bg-transparent p-4 rounded-xl outline-none text-sm placeholder:text-sm t-300 focus:shadow-[0_0_4px_#dddddd] hover:shadow-[0_0_6px_#dddddd] dark:focus:shadow-[0_0_4px_#edf2f8] dark:hover:shadow-[0_0_6px_#edf2f8] border-2 border-borderColorLight dark:border-borderColorDark border-opacity-60"
            placeholder="Your Name"
          />

          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full bg-transparent p-4 rounded-xl outline-none text-sm placeholder:text-sm t-300 focus:shadow-[0_0_4px_#dddddd] hover:shadow-[0_0_6px_#dddddd] dark:focus:shadow-[0_0_4px_#edf2f8] dark:hover:shadow-[0_0_6px_#edf2f8] border-2 border-borderColorLight dark:border-borderColorDark border-opacity-60"
            placeholder="Your Email"
          />

          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full bg-transparent p-4 rounded-xl outline-none text-sm placeholder:text-sm t-300 focus:shadow-[0_0_4px_#dddddd] hover:shadow-[0_0_6px_#dddddd] dark:focus:shadow-[0_0_4px_#edf2f8] dark:hover:shadow-[0_0_6px_#edf2f8] border-2 border-borderColorLight dark:border-borderColorDark border-opacity-60 h-[150px]"
            placeholder="Your Message"
          />

          {isFormError && (
            <div className="bg-red-500 text-white flex items-center gap-x-2 w-full rounded-xl px-6 py-4 mt-4">
              <MdError className="text-xl" />
              {formErrorMsg}
            </div>
          )}

          {isSubmitted && (
            <div className="bg-green-600 text-white flex items-center gap-x-2 w-full rounded-xl px-6 py-4 mt-4">
              <BsFillCheckCircleFill className="text-xl" />
              Message sent successfully
            </div>
          )}

          <div className="text-center mt-4">
            <button className="py-3 px-8 text-white font-medium rounded-xl tracking-[0.5px] bg-primary">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
