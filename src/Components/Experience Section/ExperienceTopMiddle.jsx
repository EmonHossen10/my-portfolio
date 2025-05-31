import React from 'react';

import img from "../../../public/images/experience-image.png"


const ExperienceTopMiddle = () => {
  return (
   <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      <img src={img} alt="my experience" />
    </div>
  );
};

export default ExperienceTopMiddle;