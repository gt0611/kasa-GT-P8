import arrowUp from "../../assets/arrowUp.svg";
import { useState } from "react";

const Collaspe = ({ title, children }) => {
  const [contentVisible, setContentVisible] = useState(false);

  const showContent = () => {
    setContentVisible(!contentVisible); // inverse la valeur actuelle
  };

  const collapseContent = contentVisible
    ? "collaspe-content_visible"
    : "collaspe-content_hidden";

  return (
    <div className="collaspe">
      <div className="collaspe-header" onClick={showContent}>
        <span>{title}</span>
        <img
          className={contentVisible ? "rotate arrow" : "arrow"}
          src={arrowUp}
          alt="flèche"
        />
      </div>
      <div className={collapseContent}>{children}</div>
    </div>
  );
};

export default Collaspe;
