import profilePictureCropped from "../../public/vietnam-hat-cropped.jpg";
import Typist from "react-typist-component";
import ImageContainer from "../../components/ImageContainer";
import React from "react";

function ProfileBannerSection() {
  return (
    <div className="profile-banner shadow-lg rounded-xl">
      <div className="profile-banner-pic rounded-lg">
        <ImageContainer
          imgClass={"profile-img"}
          imageKey={profilePictureCropped}
        />
      </div>
      <div className="profile-banner-details">
        <p className="text-5xl text-white">
          <Typist typingDelay={50} cursor={<span className="cursor">|</span>}>
            Hi, I'm Ralph Waldo Candaza!
            <Typist.Delay ms={1000} />
            <span className="text-teal-500">
              <br /> Fullstack Developer
            </span>
          </Typist>
        </p>
      </div>
    </div>
  );
}

export default ProfileBannerSection;
