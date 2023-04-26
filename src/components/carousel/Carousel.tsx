import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  img: string;
  title: string;
  price: string;
}

const Carousel: React.FC = () => {
  const data: Product[] = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/04.2022_Augustus_Bevilacqua_cropped.jpg/800px-04.2022_Augustus_Bevilacqua_cropped.jpg",
      title: "Title1",
      price: "Price1",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/%28Toulouse%29_Tib%C3%A8re_-_Mus%C3%A9e_Saint-Raymond_Ra_342_b_%28cropped%29.jpg/800px-%28Toulouse%29_Tib%C3%A8re_-_Mus%C3%A9e_Saint-Raymond_Ra_342_b_%28cropped%29.jpg",
      title: "Title2",
      price: "Price2",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Caligula_-_MET_-_14.37_%28cropped_2%29.jpg/800px-Caligula_-_MET_-_14.37_%28cropped_2%29.jpg",
      title: "Title3",
      price: "Price3",
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Claudius_crop_%28cropped%29.jpg/800px-Claudius_crop_%28cropped%29.jpg",
      title: "Title4",
      price: "Price4",
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nero_Glyptothek_Munich_321_%28cropped%29.jpg/800px-Nero_Glyptothek_Munich_321_%28cropped%29.jpg",
      title: "Title5",
      price: "Price5",
    },
    {
      id: 6,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Roman_emperor_Galba%2C_Gustav_III%27s_Museum_of_Antiquities%2C_Stockholm_%2820%29_%2835867773310%29_edited_%28cropped%29.jpg/800px-Roman_emperor_Galba%2C_Gustav_III%27s_Museum_of_Antiquities%2C_Stockholm_%2820%29_%2835867773310%29_edited_%28cropped%29.jpg",
      title: "Title6",
      price: "Price6",
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Statue_of_the_emperor_Otho%2C_Ma_1215_%2830612822394%29_%28cropped%29.jpg/800px-Statue_of_the_emperor_Otho%2C_Ma_1215_%2830612822394%29_%28cropped%29.jpg",
      title: "Title7",
      price: "Price7",
    },
  ];
  const settings = {
    className: "carouselSlider",
    dots: true,
    infinite: true,
    speed: 800,
    centerPadding: "10px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <h2>Related Products</h2>
      <Slider {...settings}>
        {" "}
        {data.map((product) => (
          <Link className="link" to={`/`} key={product?.id}>
            <div className="card">
              <div className="imgWrapper">
              {product?.img && product.img.length > 0 && (
                  <img src={product?.img} />
                )}
              </div>
              <div className="infoWrapper">
                <h3>{product?.title}</h3>
                <p>${product?.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
