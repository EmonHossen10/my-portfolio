import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    skill: "NodeJS",
    icon: FaNode,
  },
];

const AllSkillsSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white font-semibold">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
