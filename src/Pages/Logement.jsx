import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";

const Logement = () => {
  const [logement, setLogement] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const tags = logement.tags;

  useEffect(() => {
    /*fonction asynchrome pour récupérer le fichier logement.json*/
    async function getLogements() {
      const datas = await fetch("/logements.json").then((res) => res.json());
      //variable pour parcourir est trouver chaque objet logement
      const foundLogement = datas.find((log) => log.id === id);

      if (foundLogement) {
        setLogement(foundLogement);
      } else {
        navigate("/error");
      }
    }
    getLogements();
  }, [id, navigate]);

  return (
    <div>
      <Header />
      {logement && (
        <main>
          <Carousel pictures={logement.pictures} />
          <div className="logements">
            <div className="logements-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="logements-description">
              {tags.map((tag, index) => {
                return (
                  <button key={(tag, index)}>
                    <p>{tag}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Logement;
