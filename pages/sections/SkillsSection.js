import React from "react";
import reactjs_logo from "../../public/svg-icons/icons8-react-80.svg";
import vuejs_logo from "../../public/svg-icons/icons8-vue-js.svg";
import tailwind_logo from "../../public/svg-icons/tailwindcss-icon.svg";
import antdesign_logo from "../../public/svg-icons/ant-design-svgrepo-com.svg";
import materialui_logo from "../../public/svg-icons/icons8-material-ui.svg";
import nodejs_logo from "../../public/svg-icons/icons8-nodejs.svg";
import git_logo from "../../public/svg-icons/icons8-git.svg";
import github_logo from "../../public/svg-icons/icons8-github.svg";
import gitlab_logo from "../../public/svg-icons/icons8-gitlab.svg";
import redux_logo from "../../public/svg-icons/icons8-redux.svg";
import mysql_logo from "../../public/svg-icons/icons8-mysql.svg";
import mongodb_logo from "../../public/svg-icons/icons8-mongodb.svg";
import docker_logo from "../../public/svg-icons/icons8-docker.svg";
import nextjs_logo from "../../public/svg-icons/nextjs-svgrepo-com.svg";
import ImageContainer from "../../components/ImageContainer";

function SkillsSection() {
  return (
    <div id="skills" className="skills py-6 px-10 md:px-20 lg:px-40 bg-black">
      <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
      <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <div className="flex flex-wrap other-languages my-4 py-8">
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={reactjs_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>React</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={redux_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Redux</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={nextjs_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Next</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={vuejs_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Vue</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={tailwind_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Tailwind</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={antdesign_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Antd</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={materialui_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>MUI</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={nodejs_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Node</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={git_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Git</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={github_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Github</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={gitlab_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Gitlab</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={mysql_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>MySQL</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={mongodb_logo} />
          </div>
          <span style={{ fontSize: "12px" }}>
            <p style={{ color: "white", fontSize: "14px" }}>MongoDB</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={docker_logo} />
          </div>
          <span style={{ fontSize: "14px" }}>
            <p style={{ color: "white" }}>Docker</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
