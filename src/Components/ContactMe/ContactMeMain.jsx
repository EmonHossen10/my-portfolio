import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FiMessageSquare, FiSend } from "react-icons/fi";

const ContactMeMain = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[750px] mx-auto mb-16">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[2px] bg-[#2563EB] dark:bg-cyan"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] dark:text-cyan font-bold">
              // Get In Touch
            </span>
            <span className="w-8 h-[2px] bg-[#2563EB] dark:bg-cyan"></span>
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] dark:text-white tracking-tight"
          >
            Let's Build Something <span className="text-cyber-gradient">Extraordinary</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-4 font-body leading-relaxed"
          >
            Have a project idea, seeking a dedicated Full-Stack MERN developer, or
            simply want to talk tech? Drop a message and I will reply within 24 hours.
          </motion.p>
        </div>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-100/90 dark:border-white/5 relative overflow-hidden shadow-[0_8px_30px_-6px_rgba(37,99,235,0.06)] dark:shadow-none">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-cyan/10 border border-blue-200 dark:border-cyan/30 flex items-center justify-center text-[#2563EB] dark:text-cyan">
                  <FiMessageSquare className="text-lg" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white">
                    Direct Channels
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-gray-400">
                    Reach me directly via phone or email
                  </p>
                </div>
              </div>

              <ContactInfo />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-200/80 dark:border-cyan/20 shadow-[0_10px_35px_-5px_rgba(124,58,237,0.08)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-purple-500/10 border border-violet-200 dark:border-purple-500/30 flex items-center justify-center text-[#7C3AED] dark:text-purple-400">
                  <FiSend className="text-lg" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0F172A] dark:text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-gray-400">
                    Fast response guaranteed within 24 hours
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeMain;
