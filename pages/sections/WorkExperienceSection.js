import React from "react";
import stratpointLogo from "../../public/stratpoint.png";
import ImageContainer from "/components/ImageContainer";

function WorkExperienceSection() {
  return (
    <div
      id="work-experience"
      className="work-experience py-16 px-10 md:px-20 lg:px-40 bg-black min-h-[90vh]"
    >
      <h3 className="work-experience-label text-3xl py-1 dark:text-white ">
        Work Experience
      </h3>
      <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <div className="stratpoint flex flex-wrap justify-between my-4">
        <div className="company-pic">
          <ImageContainer imgClass={"profile-img"} imageKey={stratpointLogo} />
        </div>
        <div className="basis-1/2 ml-12">
          <div className="py-2 leading-8 text-gray-800 dark:text-gray-200">
            <p className="py-1 dark:text-white font-bold">
              Stratpoint Technologies Inc.
            </p>
            <p className="py-1 dark:text-white font-bold">May 2021-Present</p>
            <p className="py-1 dark:text-white font-bold">Project:</p>
            <p>
              Hedge Fund Solutions Portal Web Application - A web app for
              computing and displaying the information of the client’s hedge
              fund.
            </p>
            <br />
            <p className="py-1 dark:text-white font-bold">Role:</p>
            <p>Frontend/Backend Developer</p>
            <p className="py-1 dark:text-white font-bold">
              Frameworks/Languages Used:
            </p>
            ReactJS, NodeJS, Antd, Sequelize
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceSection;
