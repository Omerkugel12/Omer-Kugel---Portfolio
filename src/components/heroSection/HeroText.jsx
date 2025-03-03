import React from "react";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Fullstack Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl font-bold font-special text-orange">
        Omer Kugel
      </h1>
      <p className="font-body text-white">
        Hi, I'm Omer Kugel, a passionate developer who loves creating intuitive
        <br />
        and engaging digital experiences. I enjoy solving problems, bringing
        <br />
        ideas to life, and continuously learning and improving.
      </p>
    </div>
  );
}

export default HeroText;
