import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Slider from "../../components/slider/Slider";
import { DarkModeContext } from "../../context/DarkModeContext";
import "./home.scss"
import { useContext } from 'react';

export function Home() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
    <div className="home">
      <Slider />
      <Carousel/>
      <Gallery />
      <Footer />
    </div>
    </div>
  );
}
