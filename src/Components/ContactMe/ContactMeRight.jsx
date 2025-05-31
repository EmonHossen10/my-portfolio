import React from "react";
import ContactInfo from "./ContactInfo";

import img from "../../../public/images/email-image.png";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img src={img} alt="email image" className="max-w-[300px]" />
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default ContactMeRight;
