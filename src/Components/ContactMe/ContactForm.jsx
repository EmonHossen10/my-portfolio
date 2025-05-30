import { useEffect, } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init("L9WhiTb_XFKVuQJ2l");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_bjduev1", "template_urcqftu", form.current, {
        publicKey: "L9WhiTb_XFKVuQJ2l",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          toast.success('Successfully Send Message ')
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message didn't Send.")
        }
      );
  };

  return (
    <div className="pt-5">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 ">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
        <Toaster></Toaster>
      </form>
    </div>
  );
};

export default ContactForm;
