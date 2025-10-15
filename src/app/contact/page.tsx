"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import sendEmail from "../serverActions/sendEmailAction";
import Loader from "../about/loader";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  // This useRef is added to the contact form, so we can reset the form when the email is sent
  const formRef = useRef<HTMLFormElement>(null);

  const [disableForm, setDisableForm] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  function handleExpired() {
    setCaptchaToken(null);
  }

  return (
    <main className="px-4 pt-[150px] min-[550px]:px-12 max-w-[600px] min-[800px]:max-w-[1400px] mx-auto min-[800px]:grid grid-cols-2 gap-4">
      <section className="min-[800px]:max-w-[450px]">
        <p className="font-bold text-lg text-[var(--primary-color)] min-[800px]:text-2xl">
          Start your journey with a free consultation today!
        </p>
        <p className="my-6">Book a 20-Minute Consultation</p>
        <p>
          Tell us about your business, explore our process and plans, and
          discover what makes Mugama Technologies your ideal growth partner.
        </p>
        <p className="mt-6">
          Request a service today and let&apos;s get you started!
        </p>
      </section>

      <form
        className="pt-12 min-[800px]:pt-0"
        ref={formRef}
        onSubmit={async (e) => {
          e.preventDefault();

          if (!disableForm && captchaToken) {
            setDisableForm(true);

            // Get the form data
            const formData = new FormData(e.currentTarget);

            const result = await sendEmail(formData, captchaToken);

            if (result?.sent) {
              // This clears the recaptcha, so the user can tick the box again
              recaptchaRef.current?.reset();

              // If the mail is sent successfully, then we clear all the fields in the form.
              // First, we make sure that the 'formRef.current' is NOT 'null' or 'undefined' by putting a question mark (?) in front of it
              formRef.current?.reset();

              // Clear the token
              setCaptchaToken(null);

              // NOTE: The <Toaster/> is in 'layout.js'
              toast.success("Email sent successfully!");

              setDisableForm(false);
            } else {
              toast.error("Email sending failed!");
              setDisableForm(false);
              recaptchaRef.current?.reset();
              setCaptchaToken(null);
            }
          }
        }}
      >
        <div className="flex flex-col-reverse my-8 relative min-[800px]:mt-0">
          <input
            type="text"
            required
            aria-required
            placeholder=" "
            id="name"
            name="name"
            disabled={disableForm}
            className="h-10 rounded-xl ring-2 ring-gray-400 p-1 peer disabled:cursor-not-allowed disabled:bg-gray-300"
          />

          <label
            htmlFor="name"
            className="cursor-text text-sm p-1 text-gray-400 absolute peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:top-[-90%] peer-focus:translate-y-[0] top-[-90%] transition-all duration-500 ease-linear"
          >
            Name&nbsp;<span className="text-red-500">&#42;</span>
          </label>
        </div>

        <div className="flex flex-col-reverse my-8 relative mt-16">
          <input
            type="email"
            required
            aria-required
            placeholder=" "
            id="email"
            name="email"
            disabled={disableForm}
            className="h-10 rounded-xl ring-2 ring-gray-400 p-1 peer disabled:cursor-not-allowed disabled:bg-gray-300"
          />

          <label
            htmlFor="email"
            className="cursor-text text-gray-400 text-sm p-1 absolute peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:top-[-90%] peer-focus:translate-y-[0] top-[-90%] transition-all duration-500 ease-linear"
          >
            Email&nbsp;<span className="text-red-500">&#42;</span>
          </label>
        </div>

        <div className="flex flex-col-reverse my-8 relative mt-16">
          <input
            type="text"
            required
            aria-required
            placeholder=" "
            id="service"
            name="service"
            disabled={disableForm}
            className="h-10 rounded-xl ring-2 ring-gray-400 p-1 peer disabled:cursor-not-allowed disabled:bg-gray-300"
          />

          <label
            htmlFor="service"
            className="cursor-text p-1 text-sm text-gray-400 absolute peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:top-[-90%] peer-focus:translate-y-[0] top-[-90%] transition-all duration-500 ease-linear"
          >
            Which service are you interested in?&nbsp;
            <span className="text-red-500">&#42;</span>
          </label>
        </div>

        <div className="mb-8 relative mt-16">
          <textarea
            id="message"
            name="message"
            required
            placeholder=" "
            aria-required
            disabled={disableForm}
            className="block w-full rounded-3xl p-1 resize-none h-[200px] border-0 peer ring-2 ring-gray-400 disabled:cursor-not-allowed disabled:bg-gray-300"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute text-gray-400 text-[10px] min-[400px]:text-sm peer-placeholder-shown:top-[5%]  peer-focus:top-[-12%] top-[-12%] left-[0.5rem] transition-all duration-500 ease-linear cursor-text"
          >
            Can you give us a brief description of your project?&nbsp;
            <span className="text-red-500">&#42;</span>
          </label>
        </div>

        <ReCAPTCHA
          // NOTE: We added 'NEXT_PUBLIC_', to tell NextJS that we want to see this env variable in the client side, and not just the server side
          sitekey={process.env.NEXT_PUBLIC_reCAPTCHA_SITE_KEY as string}
          ref={recaptchaRef}
          onChange={handleChange}
          onExpired={handleExpired}
        />

        <button
          type="submit"
          disabled={disableForm || !captchaToken}
          className="bg-[var(--primary-color)] w-full rounded-xl mx-auto text-white text-lg uppercase h-[50px] font-semibold my-8 flex justify-center items-center cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {disableForm ? <Loader /> : "Submit"}
        </button>
      </form>
    </main>
  );
};

export default Contact;
