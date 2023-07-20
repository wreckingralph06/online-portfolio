import React from "react";

function AboutMe() {
  return (
    <div
      id="about-me"
      className="about-me py-20 px-10 md:px-20 lg:px-40 dark:bg-slate-800 min-h-[90vh]"
    >
      <h3 className="text-3xl py-1 dark:text-white ">About me</h3>
      <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <p className="py-2 text-gray-800 dark:text-gray-200">
        Currently working as a Software Engineer which specializes in
        <span className="text-teal-500"> Frontend Development </span>
        and also willing to learn other frameworks related to
        <span className="text-teal-500"> Web Development </span>
        and <span className="text-teal-500">Web Design. </span>I also look
        forward to be a good
        <span className="text-teal-500"> Full-Stack Developer</span> by
        exploring more backend functionalities and utilize more database
        management systems. I am also willing to take certifications which will
        give me an opportunity to handle advance frameworks which will also
        improve the upskilling of my technical knowledge.
      </p>
    </div>
  );
}

export default AboutMe;
