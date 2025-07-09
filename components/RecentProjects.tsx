import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small Selection of {""}
        <span className="text-purple-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-center sm:w-[570px] sm:h-[41rem] h-[32rem] w-[80vw] lg:min-h-[32.5rem]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mt-10">
                <div className="relative w-full h-full  overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="bottom-0 z-10 absolute"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl text-sm font-light lg:font-normal line-clamp-2">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] flex justify-center items-center bg-black w-8 h-8 lg:w-10 lg:h-10 rounded-full "
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center ">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-500">
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
