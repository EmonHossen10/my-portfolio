import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import confetti from "canvas-confetti";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("L9WhiTb_XFKVuQJ2l");
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00f5ff", "#a855f7", "#ffffff", "#10b981"],
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_bjduev1", "template_urcqftu", form.current, {
        publicKey: "L9WhiTb_XFKVuQJ2l",
      })
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          triggerConfetti();
          toast.success("Message dispatched successfully! 🚀", {
            style: {
              background: "#0b1120",
              color: "#00f5ff",
              border: "1px solid rgba(0,245,255,0.3)",
              fontFamily: "monospace",
            },
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error.text);
          toast.error("Message could not be sent. Please retry.", {
            style: {
              background: "#0b1120",
              color: "#f87171",
              border: "1px solid rgba(248,113,113,0.3)",
              fontFamily: "monospace",
            },
          });
        }
      );
  };

  return (
    <div className="w-full">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
          <label className="block text-xs font-mono text-[#0F172A] dark:text-gray-300 mb-1.5 font-medium">
            YOUR NAME <span className="text-[#2563EB] dark:text-cyan">*</span>
          </label>
          <input
            name="from_name"
            type="text"
            placeholder="e.g. Alex Morgan"
            required
            className="w-full h-12 rounded-xl bg-white dark:bg-[#030712]/80 border border-blue-200/80 dark:border-white/10 px-4 text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#2563EB] dark:focus:border-cyan focus:ring-2 focus:ring-[#2563EB]/20 dark:focus:ring-cyan focus:bg-white dark:focus:bg-[#030712] transition-all duration-300 font-body shadow-xs"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-mono text-[#0F172A] dark:text-gray-300 mb-1.5 font-medium">
            YOUR EMAIL <span className="text-[#2563EB] dark:text-cyan">*</span>
          </label>
          <input
            type="email"
            name="from_email"
            placeholder="e.g. alex@company.com"
            required
            className="w-full h-12 rounded-xl bg-white dark:bg-[#030712]/80 border border-blue-200/80 dark:border-white/10 px-4 text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#2563EB] dark:focus:border-cyan focus:ring-2 focus:ring-[#2563EB]/20 dark:focus:ring-cyan focus:bg-white dark:focus:bg-[#030712] transition-all duration-300 font-body shadow-xs"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs font-mono text-[#0F172A] dark:text-gray-300 mb-1.5 font-medium">
            YOUR MESSAGE <span className="text-[#2563EB] dark:text-cyan">*</span>
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project, timeline, or just say hi..."
            required
            className="w-full rounded-xl bg-white dark:bg-[#030712]/80 border border-blue-200/80 dark:border-white/10 p-4 text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-[#2563EB] dark:focus:border-cyan focus:ring-2 focus:ring-[#2563EB]/20 dark:focus:ring-cyan focus:bg-white dark:focus:bg-[#030712] transition-all duration-300 font-body resize-none shadow-xs"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full h-12 rounded-xl text-sm font-mono font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 mt-2 ${
            loading
              ? "bg-blue-300/40 dark:bg-cyan/40 text-slate-500 dark:text-black/60 cursor-not-allowed"
              : "bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] dark:from-cyan dark:to-blue-600 dark:hover:from-cyan dark:hover:to-purple-600 text-white dark:text-slate-950 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.35)] dark:shadow-[0_0_20px_rgba(0,245,255,0.35)] dark:hover:shadow-[0_0_30px_rgba(0,245,255,0.55)] hover:scale-[1.01] active:scale-[0.99]"
          }`}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              <span>Transmitting Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <PiPaperPlaneTiltBold className="text-base" />
            </>
          )}
        </button>

        <Toaster position="bottom-right" />
      </form>
    </div>
  );
};

export default ContactForm;
