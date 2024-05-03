import { useState } from "react";
import arrowright from "../../assets/arrowright.svg";
import arrowleft from "../../assets/arrowleft.svg";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  //définie le nombre d'image max
  const totalPictures = pictures.length - 1;
  //si l'index est superieur à 0 définie le nombre d'images
  if (index < 0) setIndex(totalPictures);
  //si l'index est inferieur à 0 remet setIndex à 0
  if (index > totalPictures) setIndex(0);

  const goRight = () => {
    setIndex(index + 1);
  };
  const goLeft = () => {
    setIndex(index - 1);
  };

  return (
    <div className="carrousel">
      <img className="carrousel-img" src={pictures[index]} alt="" />
      <img
        className="carrousel-arrow-left"
        src={arrowleft}
        onClick={goLeft}
      ></img>
      <img
        className="carrousel-arrow-right"
        src={arrowright}
        onClick={goRight}
      ></img>
      {totalPictures > 0 && (
        <div className="counter-img">
          <p className="counter-img_p">
            {index + 1}/{totalPictures + 1}
          </p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
