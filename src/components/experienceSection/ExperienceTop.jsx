import React from "react";
import ExperieceTopLeft from "./ExperieceTopLeft";
import ExperienceTopRight from "./experienceTopRight";

function ExperienceTop() {
  return (
    <div className="max-w-[1200px] flex justify-center items-center mx-auto mt-10 px-10">
      <div className="w-full flex sm:flex-col xl:flex-row justify-between items-center">
        <ExperieceTopLeft />
        <ExperienceTopRight />
      </div>
    </div>
  );
}

export default ExperienceTop;
