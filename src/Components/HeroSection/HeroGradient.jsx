import React from "react";

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] bg-[#06B6D4]/12 dark:bg-cyan/15 rounded-full blur-[130px]" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#7C3AED]/12 dark:bg-purple-600/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-[5%] left-[40%] w-[350px] h-[350px] bg-[#2563EB]/10 dark:bg-blue-600/10 rounded-full blur-[120px]" />
    </div>
  );
};

export default HeroGradient;