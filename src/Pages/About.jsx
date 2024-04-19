import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ImgBanner from "../assets/IMG2.png";

const About = () => {
  return (
    <div>
      <Header />
      <h1>A propos</h1>
      <Banner img={ImgBanner}></Banner>
      <Footer />
    </div>
  );
};

export default About;
