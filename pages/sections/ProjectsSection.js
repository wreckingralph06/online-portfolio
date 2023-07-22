import React from "react";
import ProjectsCarousel from "/components/ProjectsCarousel";

function ProjectsSection() {
  return (
    <div
      id="projects"
      className="projects py-16 px-10 md:px-20 lg:px-40 dark:bg-slate-800 min-h-[90vh]"
    >
      <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
      <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <ProjectsCarousel />
    </div>
  );
}

export default ProjectsSection;
