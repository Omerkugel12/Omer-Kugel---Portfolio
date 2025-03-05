import React from "react";

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left md:w-[70%]">
      <h2 className="text-cyan text-5xl font-body mb-10">About Me</h2>
      <p className="text-white font-body mb-10">
        Hey, I'm Omer Kugel, a full-stack developer with a passion for creating
        innovative solutions and tackling challenging projects in the world of
        software development. In 2019, I enlisted in the Israeli Defense Forces
        as a combat engineer, where I served as a soldier and commander, gaining
        experience in complex operations that strengthened my ability to think
        quickly and solve problems under pressure.
        <br /> After my military service, I successfully completed an intensive
        Full Stack bootcamp at ITC College in Ramat Gan,
        <br /> where I developed strong coding skills and learned how to
        approach challenges independently and efficiently. Beyond coding, I
        enjoy riding motorcycles, traveling with friends, and continuously
        exploring new and fascinating topics.
      </p>
      <button className="text-white font-body border-[1px] border-orange rounded-full py-2 px-6 hover:bg-orange hover:text-cyan cursor-pointer transition-all duration-500">
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
