import { Link } from "react-router-dom";

const Thumb = ({ id, title, cover }) => {
  return (
    <Link to={"/logement/" + id}>
      <article className="card">
        <img className="card_img" src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  );
};

export default Thumb;
