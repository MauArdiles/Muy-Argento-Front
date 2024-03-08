import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import data from "../../data/data.json";
import { ProductCard } from "./ProductCard";
import "swiper/css";

register();

export const FavProducts = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <>
      <h3 style={{ margin: "1em", textAlign: "center" }}>
        Productos Recomendados
      </h3>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="4"
        navigation="true"
        pagination="false"
        style={{ margin: "1em" }}
      >
        {data.Recommendations.map((favProduct) => (
          <swiper-slide key={favProduct.id}>
            <ProductCard product={favProduct} />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};
