import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Logement from "./Pages/Logement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
