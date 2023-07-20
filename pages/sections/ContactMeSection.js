import React from "react";
import ImageContainer from "../../components/ImageContainer";
import envelope_icon from "../../public/svg-icons/email-1-svgrepo-com.svg";
import phone_icon from "../../public/svg-icons/phone-calling-svgrepo-com.svg";
import linkedin_icon from "../../public/svg-icons/linkedin-svgrepo-com.svg";

function ContactMeSection() {
  return (
    <div
      id="contactme"
      className="contactme py-6 px-10 md:px-20 lg:px-40 bg-black"
    >
      <h3 className="text-3xl py-1 dark:text-white ">Contact Me</h3>
      <hr className="my-2 h-px bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mb-8">
        <div className="flex items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={envelope_icon} />
          </div>
          <div>
            <h3 className="contact-details-label">Mail</h3>
            <span className="contact-details-text">
              ralphwaldocandaza@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={phone_icon} />
          </div>
          <div>
            <h3 className="contact-details-label">Contact No.</h3>
            <span className="contact-details-text">+63 945 143 7325</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mx-4 icon-container">
            <ImageContainer imgClass={"icon-img"} imageKey={linkedin_icon} />
          </div>
          <div>
            <h3 className="contact-details-label">LinkedIn</h3>
            <span className="contact-details-text">
              linkedin.com/in/rwccandaza
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
