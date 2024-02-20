import React from "react";
// import homeImage1 from "./img/homeImage1.jpg";
// import homeImage2 from "./img/homeImage2.jpg";
// import homeImage3 from "./img/homeImage3.jpg";

const HeroSection = () => {
  const scrollSections = [
    {
      title: "Welcome to Moonland Primary School",
      description: "Excellency With Godliness",
    },
    {
      title: "Religious character",
      description: "Christian Based",
    },
    {
      title: "Our Vision:",
      description:
        "To Ensure That Unprivileged Young children access quality education",
    },
  ];

  return (
    <section className="hero-section">
      {/* Background images for each section */}
      <div className="background-image background-image-1"></div>
      <div className="background-image background-image-2"></div>
      <div className="background-image background-image-3"></div>

      {/* Container for content */}
      <div className="hero-content-container">
        <div className="scroll-container">
          {/* Map over the scroll sections array */}
          {scrollSections.map((section, index) => (
            <div key={index} className="scroll-section">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
