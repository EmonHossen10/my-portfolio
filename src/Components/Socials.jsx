/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const social = [
  { icon: <FaGithub></FaGithub>, path: "https://github.com/EmonHossen10" },
  {
    icon: <FaLinkedinIn></FaLinkedinIn>,
    path: "https://www.linkedin.com/in/mohammademon92/",
  },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            target="_blank"
            to={item.path}
            className={iconStyle}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
