import React from "react";

function SubHeroSection() {
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex items-center justify-center py-8 bg-brown">
      <div className="w-[1200px] flex sm:flex-col gap-4 md:flex-row justify-between items-center text-sm md:text-lg">
        <p>Logical Thinking & Problem-Solving Skills</p>
        <p>Curiosity & Continuous Learning</p>
        <p>Teamwork & Good Communication</p>
        <p>Patience & Persistence</p>
      </div>
    </div>
  );
}

export default SubHeroSection;
