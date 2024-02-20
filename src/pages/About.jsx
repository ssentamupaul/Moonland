import React from "react";
import AboutUsImage from "./img/logo.png";

const AboutUsPage = () => {
  return (
    <section className="about_section layout_padding border-bottom border-white">
      <div className="container ">
        <div className="heading_container heading_center text-center">
          <h3>
            About <span className="Us">Us</span>
          </h3>
          <p>
            Moonland Primary School Bombo Kakerenge Excellency With Godliness{" "}
          </p>
        </div>
        <div className="row ">
          <div className="col-md-6 mb-5">
            <div className="img-box">
              <img src={AboutUsImage} alt={AboutUsImage} />
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="detail-box">
              <h3>We Are Moonland Primary School</h3>
              <p>
                Moonland primary school was established in 2018,with an aim of
                Helping young children who cannot access education due to
                uncertainities like parents being poor or death of
                parents,abandoned children, though we have heart and willing to
                help the young generation,
              </p>
              <p>
                We are limited due to lack of funds. There fore we call upon any
                good samaritan all over the world who can stand with us. Your
                small contribution to our school will help us provide quality
                education to the needy children
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
