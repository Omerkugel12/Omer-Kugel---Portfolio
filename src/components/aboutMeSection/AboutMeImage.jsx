import React from "react";

function AboutMeImage() {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/about-me.jpg"
          alt="about me image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[300px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tl-[120px] rounded-br-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage;
