import React from "react";

import image from "../../../public/images/emon5.jpg"

const AboutMeImg = () => {
  return (
    <div>
      <img
        className="rounded-2xl"
        src={image}
        alt="About Me Image"
      />
    </div>
  );
};

export default AboutMeImg;
