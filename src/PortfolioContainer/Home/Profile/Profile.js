import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/cavan_mitchell">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/cavan_mitche11/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/cavan_mitchell">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/cavan_mitchell">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Cavan Mitchell</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Entrepreneur 😎",
                    1000,
                    "Senior Product Manager 💻",
                    1000,
                    "Tech Futurist 📱",
                    1000,
                    "Blockchain Advocater 🔴",
                    1000,
                    "Bio-Hacker 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Experienced executor of ideas. Check out what I've done.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="cavancv.pdf" download="Cavan Mitchell Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
