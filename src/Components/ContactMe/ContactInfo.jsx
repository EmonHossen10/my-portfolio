import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="emonhossen1000@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+880 1302-256625" Image={FiPhone} />
      <SingleInfo text="Gazipur, Bangladesh" Image={IoLocationOutline} />
      <a
        className="underline transition-all duration-300 ease-in-out hover:underline hover:text-orange"
        target="_blank"
        href="https://www.linkedin.com/in/mohammademon92/"
      >
        <SingleInfo text="Linkedin" Image={FaLinkedin}></SingleInfo>
      </a>
      <a
        className="underline transition-all duration-300 ease-in-out hover:underline hover:text-orange"
        target="_blank"
        href="https://github.com/EmonHossen10"
      >
        <SingleInfo text="Github" Image={FaGithub}></SingleInfo>
      </a>
    </div>
  );
};

export default ContactInfo;
