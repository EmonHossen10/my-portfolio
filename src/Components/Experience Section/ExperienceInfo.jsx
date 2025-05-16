import React from "react";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-6xl text-cyan pb-3">{number}</p>
        <p className="font-bold text-xl text-lightGrey uppercase -mt-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ExperienceInfo;
