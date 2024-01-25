import { Header } from "../Components/Header";
import { Translate } from "../Components/Translate";
import { Banner } from "../Components/Banner";
import { Footer } from "../Components/Footer";
import { Copy } from "../Components/Copy";

export const Home = () => {
  return (
    <>
      <Translate />
      <Header />;
      <Banner />
      <Footer />
      <Copy />
    </>
  );
};
