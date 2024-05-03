import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const ErrorPage = () => {
  return (
    <div className="page-error">
      <Header />
      <div className="page-error-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to={"/"}>
        <p>Retourner sur la page d’accueil</p>
      </Link>
      <Footer />
    </div>
  );
};

export default ErrorPage;
