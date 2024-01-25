import Carousel from "react-bootstrap/Carousel";
import ImgBanner1 from "../assets/Banner_Mate.png";
import ImgBanner2 from "../assets/Banner_2.png";

export const Banner = () => {
  return (
    <Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <img src={ImgBanner2} alt="ImgBanner2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgBanner1} alt="ImgBanner1" />
      </Carousel.Item>
    </Carousel>
  );
};
