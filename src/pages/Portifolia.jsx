import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import image1 from "../pages/img/logo.png";

const PortfolioPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: image1,
      caption: "Project 1",
    },
    {
      id: 2,
      image: image1,
      caption: "Project 2",
    },
    {
      id: 3,
      image: image1,
      caption: "Project 3",
    },
    {
      id: 4,
      image: image1,
      caption: "Project 4",
    },
    {
      id: 5,
      image: image1,
      caption: "Project 3",
    },
    {
      id: 6,
      image: image1,
      caption: "Project 4",
    },
    {
      id: 7,
      image: image1,
      caption: "Project 3",
    },
    {
      id: 8,
      image: image1,
      caption: "Project 4",
    },
    // Add more items as needed
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="portfolio-page container">
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-2">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(item.image)}
              className="border-0"
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={`Project ${item.id}`}
              />
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Moonland</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full Project"
              style={{ width: "100%" }}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PortfolioPage;
