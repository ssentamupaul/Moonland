import React from "react";

import image from "./img/joel.png";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: image,
      name: "Kasule Yoweri",
      position: "Director",
    },

    {
      id: 2,
      image: image,
      name: "Kasule Yeweri",
      position: "Head Teacher",
    },

    {
      id: 3,
      image: image,
      name: "Blessing",
      position: "Burser",
    },

    {
      id: 4,
      image: image,
      name: "Paul clean Heart",
      position: "Secretary",
    },
  ];

  return (
    <section className="team_section layout_padding border-bottom border-white">
      <div className="container">
        <div className="heading_container heading_center  pt-5 ">
          <h2>
            Our <span className="Us"> Stuff</span>
          </h2>
        </div>

        <div className="team_container pb-5">
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img
                      src={member.image}
                      className="img1"
                      alt={member.name}
                    />
                  </div>
                  <div className="detail-box">
                    <h5>{member.name}</h5>
                    <p>{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
