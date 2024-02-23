import React, { useEffect, useState } from "react";

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

  return (
    <div className="Landingpage">
      <h1 className="hometxt text-light">
        Welcome To Moonland Nursery And Primary School
      </h1>
      <h1 className="text-light">
        <h1 className="text-light hometxt2">
          Excellency With <span className="Us"> {typedText} </span>
        </h1>
      </h1>
    </div>
  );
};

export default Home;
