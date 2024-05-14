import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Tag from "../components/tag/Tag";
import Collaspe from "../components/collaspe/Collaspe";
import Host from "../components/host/Host";

const Logement = () => {
  const [logement, setLogement] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const arrayStars = [1, 2, 3, 4, 5];

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
    <div className="page-logement">
      <Header />
      {logement && (
        <main className="page-logement-main">
          <Carousel pictures={logement.pictures} />
          <div className="logements">
            <div className="logements-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="logements-info">
              <div className="logements-info-tag">
                {logement.tags.map((tag, index) => (
                  <Tag tag={tag} key={tag + index} />
                ))}
              </div>
              <div className="logements-info-host">
                <Host
                  name={logement.host.name}
                  picture={logement.host.picture}
                />
                <div className="logements-stars-rating">
                  {arrayStars.map((star) => {
                    const nbEtoiles = parseInt(logement.rating);
                    return (
                      <span
                        key={"stars" + star}
                        className={
                          star <= nbEtoiles
                            ? "logements-stars-rating_1"
                            : "logements-stars-rating_2"
                        }
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="logements-collaspe">
              <Collaspe title="Description">
                <p>{logement.description}</p>
              </Collaspe>
              <Collaspe title={"Équipements"}>
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={equipment + index}>{equipment}</li>
                  ))}
                </ul>
              </Collaspe>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Logement;
