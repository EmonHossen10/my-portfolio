import { useEffect, useState, } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

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

    const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // fake API delay (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      alert("Message Sent Successfully 🚀");
    }, 2000);
  };
  return (
    <div className="pt-5">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 ">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-[#00091D] border px-2"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-[#00091D] border px-2"
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-[#00091D] border p-2"
        ></textarea>
        {/* <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send <PiPaperPlaneTiltBold className="inline-block ml-2"></PiPaperPlaneTiltBold>
        </button> */}
  <button
      type="submit"
      onClick={handleSubmit}
      disabled={loading}
      className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl transition-all duration-500 flex items-center justify-center gap-2
        ${loading ? "bg-darkCyan cursor-not-allowed opacity-80" : "bg-cyan hover:bg-darkCyan hover:scale-[1.03]"}
      `}
    >
      {loading ? (
        <>
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Sending...
        </>
      ) : (
        <>
          Send
          <PiPaperPlaneTiltBold className="text-xl" />
        </>
      )}
    </button>
        <Toaster></Toaster>
      </form>
    </div>
  );
};

export default ContactForm;
