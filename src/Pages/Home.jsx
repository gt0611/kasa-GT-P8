import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Thumb from "../components/thumb/Thumb";
import Banner from "../components/banner/Banner";
import ImgBanner from "../assets/IMG.png";

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function getLogements() {
      const datas = await fetch("/logements.json").then((res) => res.json());
      setLogements(datas);
    }
    getLogements();
  }, []);

  return (
    <div>
      <Header />
      <Banner img={ImgBanner}>
        <h1>chez vous</h1>
      </Banner>
      <section className="gallery">
        {logements.map((logement) => (
          <Thumb
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
