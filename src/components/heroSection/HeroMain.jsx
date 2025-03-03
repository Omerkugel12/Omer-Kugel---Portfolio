import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

function HeroMain() {
  return (
    <main className="pt-44 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] justify-between items-center mx-auto relative px-4 sm:gap-10">
        <HeroText />
        <HeroPic />
      </div>
    </main>
  );
}

export default HeroMain;
