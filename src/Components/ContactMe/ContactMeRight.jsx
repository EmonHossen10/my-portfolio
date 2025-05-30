import React from "react";
import ContactInfo from "./ContactInfo";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default ContactMeRight;
