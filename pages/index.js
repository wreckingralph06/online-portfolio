import Head from "next/head";
import { AiFillLinkedin, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import profilePictureCropped from "../public/vietnam-hat-cropped.jpg";
import stratpointLogo from "../public/stratpoint.png";
import Image from "next/image";
import reactjs_logo from "../public/reactjs_logo.png";
import vuejs_logo from "../public/vuejs_logo.png";
import nodejs_logo from "../public/nodejs_logo.png";
import git_logo from "../public/git_logo.png";
import github_logo from "../public/github_logo.png";
import gitlab_logo from "../public/gitlab_logo.png";
import ch_dashboard from "../public/chazydes/ch_dashboard.png";
import ch_item_list from "../public/chazydes/ch_item_list.png";
import ch_item_details_page from "../public/chazydes/ch_item_details_page.png";
import ch_add_transaction from "../public/chazydes/ch_add_transaction.png";
import ch_transaction_details from "../public/chazydes/ch_transaction_details.png";
import ch_transactions_list from "../public/chazydes/ch_transactions_list.png";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "/components/Navbar";
import ImageContainer from "/components/ImageContainer";
import Particle from "/components/Particle";
import Typist from 'react-typist-component';

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Ralph Waldo Candaza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Particle />
      <Navbar />
      <main className="main-body ">
        <section className="intro-section">
          <div className="profile-banner shadow-lg rounded-xl">
            <div className="profile-banner-pic rounded-lg">
              <ImageContainer imageKey={profilePictureCropped} />
            </div>
            <div className="profile-banner-details">
              <p className="text-5xl text-white">
                <Typist typingDelay={50} cursor={<span className='cursor'>|</span>}>
                  Hi, I'm Ralph Waldo Candaza!
                  <Typist.Delay ms={1000} />
                  <span className="text-teal-500">
                    <br /> Fullstack Developer
                  </span>
                  <Typist.Delay ms={3000} />
                </Typist>
              </p>
            </div>
          </div>
        </section>
        <section className="body-section my-4">
          <div id="about-me" className="about-me py-12 px-10 md:px-20 lg:px-40 dark:bg-slate-800">
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
              management systems. I am also willing to take certifications which
              will give me an opportunity to handle advance frameworks which
              will also improve the upskilling of my technical knowledge.
            </p>
          </div>
          <div id="work-experience" className="work-experience py-6 px-10 md:px-20 lg:px-40 bg-black">
            <h3 className="work-experience-label text-3xl py-1 dark:text-white ">Work Experience</h3>
            <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <div className="stratpoint flex justify-between my-4">
              <div className="company-pic">
                <ImageContainer imageKey={stratpointLogo} />
              </div>
              <div className="basis-1/2">
                <div className="py-2 leading-8 text-gray-800 dark:text-gray-200">
                  <p className="py-1 dark:text-white font-bold">
                    Stratpoint Technologies Inc.
                  </p>
                  <p className="py-1 dark:text-white font-bold">
                    May 2021-Present
                  </p>
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
          <div id="projects" className="projects py-12 px-10 md:px-20 lg:px-40 dark:bg-slate-800">
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <Carousel showArrows="true" showThumbs={false}>
              <div className="tech-stack sc1 shadow-lg p-10 rounded-xl dark:bg-white">
                <div className="tech-stack-details">
                  <div className="tech-stack-details-header">
                    <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                      Chazydes
                    </h2>
                    <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                      Item Inventory System
                    </h3>
                    <div style={{ display: "flex" }}>
                      <div className="vue-section">
                        <div className="screenshot-img">
                          <Image
                            src={ch_dashboard}
                            alt="ch_dashboard"
                            priority={true}
                          />
                        </div>
                        <h4 className="screenshot-label text-center dark:text-teal-600">
                          Dashboard
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc2 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <Image
                          src={ch_item_list}
                          alt="ch_item_list"
                          priority={true}
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Item List
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc3 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <Image
                          src={ch_item_details_page}
                          alt="ch_item_details_page"
                          priority={true}
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Item Details Page
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc4 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <Image
                          src={ch_add_transaction}
                          alt="ch_add_transaction"
                          priority={true}
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Add Transaction
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc5 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <Image
                          src={ch_transaction_details}
                          alt="ch_transaction_details"
                          priority={true}
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Transaction Details
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc6 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <Image
                          src={ch_transactions_list}
                          alt="ch_transactions_list"
                          priority={true}
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Transactions List
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc7 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <ReactPlayer
                          className="react-player fixed-bottom"
                          url="videos/add-chopsticks-item.mp4"
                          controls={true}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Add Item Demo
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc8 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <ReactPlayer
                          className="react-player fixed-bottom"
                          url="videos/items-out-of-stock.mp4"
                          controls={true}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Check Quantity of Items Demo
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-stack sc9 shadow-lg p-10 rounded-xl dark:bg-white">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl xl:text-4xl text-center font-medium dark:text-teal-600">
                    Chazydes
                  </h2>
                  <h3 className="text-2xl text-center py-2 md:text-3xl mb-2">
                    Item Inventory System
                  </h3>
                  <div style={{ display: "flex" }}>
                    <div className="vue-section">
                      <div className="screenshot-img">
                        <ReactPlayer
                          className="react-player fixed-bottom"
                          url="videos/add-transaction.mp4"
                          controls={true}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <h4 className="screenshot-label text-center dark:text-teal-600">
                        Add Transaction Demo
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div id="skills" className="skills py-6 px-10 md:px-20 lg:px-40 bg-black">
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
            <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
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
          <div id="character" className="character py-12 px-10 md:px-20 lg:px-40 dark:bg-slate-800">
            <h3 className="text-3xl py-1 dark:text-white ">Character</h3>
            <hr className="my-4 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a creative thinker, I constantly develop ideas that stand out
              to peers and professionals. At work, I am friendly and sociable,
              making me adaptable to any and all tasks whether done individually
              or collectively. Likewise, I teach with creative analogy,
              especially when it comes to theoretical and practical concepts.
              During my free time, I spend the day creating 3D art and
              publishing game-related content.
            </p>
          </div>
          <div id="contactme" className="contactme py-6 px-10 md:px-20 lg:px-40 bg-black">
            <h3 className="text-3xl py-1 dark:text-white ">Contact Me</h3>
            <hr className="my-2 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
            <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mb-8">
              <div>
                <AiOutlineMail className="detail-img-mail m-2" />
                <p>- ralphwaldocandaza@gmail.com </p>
              </div>
              <div>
                <AiOutlineMobile className="detail-img-mobile m-2" />
                <p>- +63 945 143 7325 </p>
              </div>
              <div>
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
