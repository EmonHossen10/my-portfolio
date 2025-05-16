import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import SingleSkill from "./SingleSkill";

const AllSkills = () => {
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
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
