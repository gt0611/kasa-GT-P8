import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ImgBanner from "../assets/IMG2.png";
import Collaspe from "../components/collaspe/Collaspe";

const About = () => {
  return (
    <div className="page-about">
      <Header />
      <Banner img={ImgBanner}></Banner>
      <main className="page-about-main">
        <section className="page-about-collaspe">
          <Collaspe title={"Fiabilité"}>
            <p>
              les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collaspe>
          <Collaspe title={"Respect"}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collaspe>
          <Collaspe title={"Service"}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collaspe>
          <Collaspe title={"Sécurité"}>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos
            </p>
          </Collaspe>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
