import React, { useState } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./slider.scss";
import { Link } from "react-router-dom";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const data: string[] = [
    "https://images.pexels.com/photos/3760274/pexels-photo-3760274.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/10319784/pexels-photo-10319784.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      {currentSlide === 0 && (
        <div className="info">
          <div className="left">
            <h1 className="heading">Heading</h1>
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque esse quasi tempora eos.
            </h2>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <button>Learn More</button>
            </Link>
          </div>
          <div className="right"></div>
        </div>
      )}
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
