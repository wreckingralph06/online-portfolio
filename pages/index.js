import Head from "next/head";
import { AiFillLinkedin, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { useState, Fragment } from "react";
import profilePictureCropped from "../public/profile-picture-cropped.jpg";
import stratpointLogo from "../public/stratpoint.png";
import reactjs_logo from "../public/reactjs_logo.png";
import vuejs_logo from "../public/vuejs_logo.png";
import nodejs_logo from "../public/reactjs_logo.png";
import git_logo from "../public/git_logo.png";
import github_logo from "../public/github_logo.png";
import gitlab_logo from "../public/gitlab_logo.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Ralph Waldo Candaza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between content-center dark:text-white">
            <h1 className="text-xl">
              <Link href="/">Ralph Waldo Candaza</Link>
            </h1>
            <div className="navbar-tabs flex content-center">
              <Menu as="div" className="hamburger-only relative ml-3">
                <Menu.Button className="menu-button ">
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="menu-items absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <Link
                        href="/projects"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Sample Projects
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              <ul className="hamburger-tabs flex items-center">
                <li>
                  <Link
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="/projects"
                  >
                    Sample Projects
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Carousel showArrows="true">
            <div class="profile-banner shadow-lg p-10 rounded-xl dark:bg-white">
              <div class="profile-banner-pic rounded-lg overflow-hidden">
                <Image src={profilePictureCropped} />
              </div>
              <div className="profile-banner-details">
                <h2 className="profile-banner-big-name text-center font-medium dark:text-teal-600">
                  Ralph Waldo Candaza
                </h2>
                <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                  Software Engineer/
                  <br />
                  Web Developer
                </h3>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <a href="https://www.linkedin.com/in/rwccandaza/">
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div class="tech-stack shadow-lg p-10 rounded-xl dark:bg-white">
              <div className="tech-stack-details">
                <h2 className="profile-banner-big-name text-center font-medium dark:text-teal-600">
                  Tech Stack
                </h2>
                <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                  Frontend
                </h3>
                <div style={{ display: "flex" }}>
                  <div class="react-section">
                    <div class="tech-stack-img rounded-lg overflow-hidden">
                      <Image src={reactjs_logo} />
                    </div>
                    <h3 className="profile-banner-big-name text-center font-small dark:text-teal-600">
                      ReactJS
                    </h3>
                  </div>
                  <div class="vue-section">
                    <div class="tech-stack-img rounded-lg overflow-hidden">
                      <Image src={vuejs_logo} />
                    </div>
                    <h3 className="profile-banner-big-name text-center font-small dark:text-teal-600">
                      VueJS
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="tech-stack shadow-lg p-10 rounded-xl dark:bg-white">
              <div className="tech-stack-details">
                <h2 className="profile-banner-big-name text-center font-medium dark:text-teal-600">
                  Tech Stack
                </h2>
                <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                  Backend
                </h3>
                <div style={{ display: "flex" }}>
                  <div class="react-section">
                    <div class="tech-stack-img rounded-lg overflow-hidden">
                      <Image src={nodejs_logo} />
                    </div>
                    <h3 className="profile-banner-big-name text-center font-small dark:text-teal-600">
                      NodeJS
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="tech-stack shadow-lg p-10 rounded-xl dark:bg-white">
              <div className="tech-stack-details">
                <h2 className="profile-banner-big-name text-center font-medium dark:text-teal-600">
                  Tech Stack
                </h2>
                <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                  Work Tools
                </h3>
                <div style={{ display: "flex" }}>
                  <div>
                    <div class="tech-stack-img rounded-lg overflow-hidden">
                      <Image src={git_logo} />
                    </div>
                    <h3 className="profile-banner-big-name text-center font-small dark:text-teal-600">
                      Git
                    </h3>
                  </div>
                  <div>
                    <div class="tech-stack-img rounded-lg overflow-hidden">
                      <Image src={github_logo} />
                    </div>
                    <h3 className="profile-banner-big-name text-center font-small dark:text-teal-600">
                      Github
                    </h3>
                  </div>
                  <div>
                    <div class="tech-stack-img rounded-lg overflow-hidden">
                      <Image src={gitlab_logo} />
                    </div>
                    <h3 className="profile-banner-big-name text-center font-small dark:text-teal-600">
                      Gitlab
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
        <section>
          <div className="about-me my-8">
            <h3 className="text-3xl py-1 dark:text-white ">About me</h3>
            <hr class="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Currently working as a Software Engineer which specializes in
              <span className="text-teal-500"> Frontend Development </span>
              and also willing to learn other frameworks related to
              <span className="text-teal-500">Web Development </span>
              and <span className="text-teal-500">Web Design. </span>I also look
              forward to be a good
              <span className="text-teal-500">Full-Stack Developer</span> by
              exploring more backend functionalities and utilize more database
              management systems. I am also willing to take certifications which
              will give me an opportunity to handle advance frameworks which
              will also improve the upskilling of my technological knowledge.
            </p>
          </div>
          <div className="work-experience my-8">
            <h3 className="text-3xl py-1 dark:text-white ">Work Experience</h3>
            <hr class="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <div className="stratpoint flex justify-between my-4">
              <div className="basis-1/4">
                <div className="basis-1/4 flex-1 mx-auto bg-gradient-to-b from-teal-400 rounded-full relative overflow-hidden md:h-84 md:w-84">
                  <Image src={stratpointLogo} />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  <h4 className="text-2xl py-1 dark:text-white font-bold">
                    Stratpoint Technologies Inc.
                  </h4>
                  <h4 className="text-xl py-1 dark:text-white font-bold">
                    May 2021-Present
                  </h4>
                  <h4 className="text-l py-1 dark:text-white font-bold">
                    Project:
                  </h4>
                  Aetos - A web app for employee meeting records. <br />
                  <h4 className="text-l py-1 dark:text-white font-bold">
                    Role:
                  </h4>
                  Frontend/Backend Developer
                  <h4 className="text-l py-1 dark:text-white font-bold">
                    Frameworks/Languages Used:
                  </h4>
                  <p>ReactJS, NodeJS, Antd, Sequelize</p>
                </div>
              </div>
            </div>
          </div>
          <div className="qualifications my-8">
            <h3 className="text-3xl py-1 dark:text-white ">Qualifications</h3>
            <hr class="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <div className="work-experiences flex justify-between my-4">
              <div className="basis-1/4">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Work Experience Languages and Tools Used
                </p>
              </div>
              <div className="basis-1/2">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  ReactJS, React-Redux, AntD, NodeJS, Sequelize
                </p>
              </div>
            </div>
            <div className="work-tools flex justify-between my-4">
              <div className="basis-1/4">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Work Tools
                </p>
              </div>
              <div className="basis-1/2">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Git, Gitlab, Docker, Postman, Swagger, Dbeaver
                </p>
              </div>
            </div>
            <div className="other-languages flex justify-between my-4">
              <div className="basis-1/4">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Other Languages and Framework Used
                </p>
              </div>
              <div className="basis-1/2">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  VueJS, Bootstrap, Tailwind, C, Python, Java
                </p>
              </div>
            </div>
          </div>
          <div className="skills-and-character my-8">
            <h3 className="text-3xl py-1 dark:text-white ">
              Skills and Character
            </h3>
            <hr class="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am creative and always thinking of ideas that are unique and can
              stand-out to others. In the workplace, I am friendly, sociable and
              can go along with co-workers and can also work individually. When
              it comes to concepts, I can teach with creative analogy. On my
              free time, I am an ispiring 3D Artist and content creator.
            </p>
          </div>
          <div className="skills-and-character my-8">
            <h3 className="text-3xl py-1 dark:text-white ">Contact Me</h3>
            <hr class="my-2 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mb-8">
              <div className="flex">
                <AiOutlineMail className="detail-img-mail m-2" />
                <p>- ralphwaldocandaza@gmail.com </p>
              </div>
              <div className="flex">
                <AiOutlineMobile className="detail-img-mobile m-2" />
                <p>- +63 945 143 7325 </p>
              </div>
              <div className="flex">
                <AiFillLinkedin className="detail-img-linkedin m-2" />
                <p>- linkedin.com/in/rwccandaza </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
