import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import give from "../../../src/img/Testimonial/51give.png";
import smart from "../../../src/img/Testimonial/smart.png";
import masenix from "../../../src/img/Testimonial/masenix.jpg";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import real from "../../../src/img/Testimonial/real.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Check out my technical projects"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {/* Something regarding OwlCarousel */}

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={real} alt="no internet connection"></img>
                    <h5> www.real-coin.com</h5>
                    <p>Real Estate NFT - Blockchain</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={smart} alt="no internet connection"></img>
                    <h5>www.smartcityoutlet.com</h5>
                    <p>LED Lighting - Ecommerce</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={give} alt="no internet connection"></img>
                    <h5>www.51Give.org</h5>
                    <p>P2P Micro lending platform</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment"></div>
                  <div className="client-info">
                    <img src={masenix} alt="no internet connection"></img>
                    <h5>www.masenix.com</h5>
                    <p>PPE Related Products - Ecommerce</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
