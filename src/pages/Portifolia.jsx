import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import BabyClassImage1 from "./img/babya.JPG";
import BabyClassImage2 from "./img/babyb.JPG";
import BabyClassImage3 from "./img/babyc.JPG";
import BuildingsImage1 from "./img/buildinga.JPG";
import BuildingsImage2 from "./img/buildingb.JPG";
import BuildingsImage3 from "./img/buildingc.JPG";
import pOneClassImage1 from "./img/p1a.JPG";
import pOneClassImage2 from "./img/p1b.JPG";
import pOneClassImage3 from "./img/p1c.JPG";
import sportsImage1 from "./img/sportsa.JPG";
import sportsImage2 from "./img/sportsb.JPG";
import sportsImage3 from "./img/sportsc.JPG";
import staffImage1 from "./img/staffa.JPG";
import staffImage2 from "./img/staffb.JPG";
import staffImage3 from "./img/staffc.JPG";
import TopClassImage1 from "./img/topa.JPG";
import TopClassImage2 from "./img/topb.JPG";
import TopClassImage3 from "./img/topc.JPG";

const Portifolia = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(null);

  const categories = [
    "Baby Class",
    "Top Class",
    "P.1 & P.2",
    "Staff Members",
    "Sports",
    "Buildings",
  ];

  const photos = {
    "Baby Class": [BabyClassImage1, BabyClassImage2, BabyClassImage3],
    "Top Class": [TopClassImage1, TopClassImage2, TopClassImage3],
    "P.1 & P.2": [pOneClassImage1, pOneClassImage2, pOneClassImage3],
    "Staff Members": [staffImage1, staffImage2, staffImage3],
    Sports: [sportsImage1, sportsImage2, sportsImage3],
    Buildings: [BuildingsImage1, BuildingsImage2, BuildingsImage3],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePhotoClick = (photo, categoryTitle) => {
    setSelectedPhoto(photo);
    setSelectedCategoryTitle(categoryTitle);
  };

  const filteredPhotos = selectedCategory ? photos[selectedCategory] : [];

  const [typedText, setTypedText] = useState("");
  const targetText = "  Images";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setTypedText(targetText.slice(0, index));
      index += 1;

      if (index > targetText.length) {
        index = 0;
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" PortifoliaPage border-bottom border-white">
      <div className="container myGaley ">
        <h1 className="text-center mb-5 pt-5 ">Our Gallery</h1>
        <p className="text-center ">
          Click on these buttons to view <span className="Us">{typedText}</span>{" "}
        </p>
        <div className="align-items-center justfy-content-betweeen  text-center">
          {categories.map((category) => (
            <button
              className="portfolio-button"
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                marginRight: "10px",
                marginBottom: "10px",
                backgroundColor:
                  selectedCategory === category ? "lightblue" : "white",
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row mb-5" style={{ marginTop: "20px" }}>
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-2">
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => handlePhotoClick(photo, selectedCategory)}
              >
                <Card.Img
                  className="portfolio-image"
                  variant="top"
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Card>
            </div>
          ))}
        </div>

        <Modal
          show={selectedPhoto !== null}
          onHide={() => setSelectedPhoto(null)}
        >
          <Modal.Body>
            {selectedPhoto && (
              <img
                src={selectedPhoto}
                alt="Selected Photo"
                style={{ width: "100%" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Portifolia;
