import { Header } from "../Components/Header";
import { Translate } from "../Components/Translate";
import { Banner } from "../Components/Banner";
import { Footer } from "../Components/Footer";
import { Copy } from "../Components/Copy";
import { FavProducts } from "../Components/Products/FavProducts";

export const Home = () => {
  return (
    <>
      <Translate />
      <Header />;
      <Banner />
      <FavProducts />
      <Footer />
      <Copy />
    </>
  );
};
