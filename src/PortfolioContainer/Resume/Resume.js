import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Technical Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "Photoshop", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 65 },
    { skill: "Premiere Pro", ratingPercentage: 89 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "Audacity", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Google & Facebook Analytics", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "51 Give P2P Lending Platform",
      duration: { fromDate: "2010", toDate: "2022" },
      description:
        "A P2P Lending Platform on mobile and desktop that is available via Apple and Google Play Stores.",
      subHeading: "Used: Javascript, PHP, C++",
    },

    {
      title: "Real Coin - Web3 Website ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Blockchain based site for transacting Real Estate via smart contracts",
      subHeading:
        "Used: React Js, Node JS, Redux, Bootstrap, Solidity.",
    },


    {
      title: "Smart City Outlet - Ecommerce Website ",
      duration: { fromDate: "2019", toDate: "2022" },
      description:
        "An ecommerce site selling Energy Saving LED Lighting products with payment system integration",
      subHeading:
        "Used:  Wordpress, Magento 2, UPS Shipping Integration, Payment Integrations.",
    },


    {
      title: "Masenix - Ecommerce Website ",
      duration: { fromDate: "2019", toDate: "2022" },
      description:
        "Online ecommerce site for selling PPE products online with payment system integration",
      subHeading:
        "Used: Wordpress, WooCommerce, UPS Shipping Integration, Payment Integrations.",
    }

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Florida International University"}
        subHeading={"BACHELOR OF SCIENCE in FINANCE and minor in REAL ESTATE"}
        fromDate={"2000"}
        toDate={"2004"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Francis Lewis High School"}
        fromDate={"1995"}
        toDate={"1999"}
      />

      <ResumeHeading
        heading={"Toast Master"}
        subHeading={"Public Speaking Organization"}
        fromDate={"2013"}
        toDate={"2015"}
      />

    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Red Rock Properties"}
          subHeading={"Real Estate Investor focused on Short Term Rentals (STR)"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as operator of real estate portfolio managing a property management team.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Sports"
        description="Basketball, Tennis, Golf, Softball."
      />
      <ResumeHeading
        heading="Competitive Poker"
        description="Ranked around 60,000th in the world in tournament Texas Holdem."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
