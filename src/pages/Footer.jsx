import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="i add some thi">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Bombo Kakerenge </span>
                  </a>
                  <a href="i add some thi">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span> Call +256 751 892 892</span>
                  </a>
                  <a href="i add some thi">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> kasuleyoweri@gmail.com </span>
                  </a>
                  <a href="i add some thi">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>moonlandprimaryshcool@gmail.com </span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="your_facebook_link">
                  <FaFacebook />
                </a>
                <a href="your_twitter_link">
                  <FaTwitter />
                </a>
                <a href="your_youtube_link">
                  <FaYoutube />
                </a>
                <a href="your_instagram_link">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Moonland School sponsors children, and we welcome anyone
                  willing to contribute to our charitable initiatives. Your
                  support is greatly appreciated as we strive to make a positive
                  impact on the lives of the children under our care. Join us in
                  making a difference!"
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="i add some thiindex.html">
                    Home
                  </a>
                  <a className="" href="i add some thiabout.html">
                    About
                  </a>
                  <a className="" href="i add some thiservice.html">
                    Contact
                  </a>
                  <a className="" href="i add some thiwhy.html">
                    Donate
                  </a>
                  <a className="" href="i add some thiteam.html">
                    Portifolia
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Donate</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Donate</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear">{currentYear}</span> All Rights
            Reserved By
            <a href="https://html.design/">Moonland Primary School Kakelenge</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
