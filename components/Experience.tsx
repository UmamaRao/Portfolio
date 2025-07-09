import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Work
        <span className="text-purple-500"> Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button key={card.id}
           className="flex-1 text-white border-neutral-300 dark:border-slate-800"
           borderRadius="1.7rem"
           duration={Math.floor(Math.random() * 10000 + 10000)}
           >
            <div className="flex flex-col lg:flex-row gap-2 py-6 p-3 md:p-5 lg:p-10 lg:items-center">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start  text-xl md:text-2xl font-bold">
                    {card.title}
                </h1>
                <p className="text-start text-white font-semibold mt-3">
                    {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
