"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GiCheckMark } from "react-icons/gi";
import emailjs from "@emailjs/browser";

import Loader from "@/components/Loader";
import FormError from "./FormError";
import { contactSchema } from "./contactSchema";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async () => {
    setSuccess(false);
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      reset();
    } catch (e: any) {
      console.log(e);

      setError("message", {
        message: "Sorry, something went wrong. Please try again",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10 pb-14 bg-card-secondary border border-border rounded-large shadow-form">
      <h3 className="font-light mb-5 text-2xl">Say Hello!</h3>

      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name")}
            className="font-light border border-border bg-card-secondary rounded-large px-6 py-3 w-full text-foreground/50 text-xl outline-none placeholder:text-foreground hover:border-primary focus:text-foreground focus:border-border"
          />

          {errors.name?.message && (
            <FormError error={errors.name.message.toString()} />
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email")}
            className="font-light border border-border bg-card-secondary rounded-large px-6 py-3 w-full text-foreground/50 text-xl outline-none placeholder:text-foreground hover:border-primary focus:text-foreground focus:border-border"
          />

          {errors.email?.message && (
            <FormError error={errors.email.message.toString()} />
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            placeholder="Message"
            id="message"
            {...register("message")}
            className="font-light border border-border bg-card-secondary rounded-large px-6 py-3 w-full text-foreground/50 text-xl outline-none placeholder:text-foreground hover:border-primary focus:text-foreground focus:border-border min-h-[9.375rem] -mb-1"
          />

          {errors.message?.message && (
            <FormError error={errors.message.message.toString()} />
          )}
        </div>

        <div className="flex justify-end">
          <button
            disabled={isLoading}
            className="uppercase rounded-small py-2.5 px-10 text-[1.375rem] font-light bg-primary text-white hover:bg-primary/80 disabled:bg-primary/80 transition-colors duration-300 h-[3.25rem] min-w-[7.5rem] flex justify-center items-center"
          >
            {isLoading ? (
              <Loader />
            ) : success ? (
              <div className="flex items-center gap-x-2 -mr-3">
                <span>sent</span>
                <GiCheckMark className="text-xl" />
              </div>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
