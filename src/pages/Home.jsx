import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardImage1 from "./img/childa.JPG";
import CardImage2 from "./img/childb.JPG";
import CardImage3 from "./img/childc.JPG";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = " Godliness";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setTypedText(targetText.slice(0, index));
      index += 1;

      if (index > targetText.length) {
        index = 0; // Reset the index to start typing again
      }
    }, 300); // Adjust the typing speed as needed

    return () => clearInterval(intervalId);
  }, []);

  const HomeCarData = [
    {
      imgSrc: CardImage1,
      title: "Helping young",
      description:
        "Fact that is some children cannot access education due to uncertainities in life & so we aim at making sure that most of Ugandan children accquire education",
    },
    {
      imgSrc: CardImage2,
      title: "Putting a smile on childrens face",
      description:
        "We want to make sure that all our children are happy & their embrace what the lord has given ",
    },
    {
      imgSrc: CardImage3,
      title: "Make sure we feed children",
      description: "Some children cannot acquire quality food",
    },
  ];

  return (
    <section>
      <div className="Landingpage">
        <h1 className="hometxt text-light">
          Welcome To Moonland Nursery And Primary School
        </h1>
        <h1 className="text-light">
          <h1 className="text-light hometxt2">
            Excellency With <span className="Us"> {typedText} </span>
          </h1>
        </h1>
        <div className="button">
          {" "}
          <Link className="nav-link" to="/donate">
            <button type="submit" className="submit col-sm-3">
              Donate
            </button>
          </Link>
        </div>
      </div>

      <section className="service_section layout_padding curved-top">
        <div className="service_container">
          <div className="container mb-5">
            <div className="heading_container heading_center text-center mt-5">
              <h2>
                Our <span className="Us">Services</span>
              </h2>
              <p>
                Helping young children who cannot access education due to
                uncertainities like parents being poor or death of
                parents,abandoned children
              </p>
            </div>
            <div className="row">
              {HomeCarData.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="box">
                    <div className="img-box">
                      <img src={item.imgSrc} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      {/* <a href=""> Read More </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
