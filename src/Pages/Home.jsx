import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Thumb from "../components/thumb/Thumb";
import Banner from "../components/banner/Banner";
import ImgBanner from "../assets/IMG.png";
import Footer from "../components/footer/Footer";

const Home = () => {
  /*utilisation des useState egal variable + set suivi de la variable */
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    /*fonction asynchrome pour récupérer le fichier logement.json*/
    async function getLogements() {
      const datas = await fetch("/logements.json").then((res) => res.json());
      setLogements(datas);
    }
    getLogements();
  }, []);

  return (
    <div className="page-home">
      <Header />
      <br />
      <Banner img={ImgBanner}>
        <h1>Chez vous, partout et ailleurs</h1>
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
      <Footer />
    </div>
  );
};

export default Home;
