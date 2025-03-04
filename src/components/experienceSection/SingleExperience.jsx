import React from "react";

function SingleExperience({ role, organization, date, responsibilities }) {
  return (
    <div className="lg:w-[240px] lg:h-[400px] sm:w-full border p-4 border-dashed border-orange rounded-2xl font-body">
      <h3 className="font-bold text-cyan">{role}</h3>
      <p className="text-orange">{organization}</p>
      <p className="text-lightGrey">{date}</p>

      <ul className="list-disc pl-4">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SingleExperience;
