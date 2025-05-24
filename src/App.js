import { Route, Routes, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Home from "./components/routes/Home";
import Price from "./components/routes/Price";
import ModalRegistration from "./components/ModalRegistration";
import PageNotFound from "./components/Page404/PageNotFound";
import Footer from "./components/Footer";

function App() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };

  const handleClick = () => {
    setClicked(!clicked);
  };


  return (
    <>
      <header className="nav">
        <div className="menu" onClick={logoClick}>
          <MdOutlineTravelExplore />
          <span>𝒯𝓇𝒶𝓋𝑒𝓁 </span>
          <span>𝓌𝒾𝓉𝒽 𝓊𝓈!</span>
        </div>

        <nav className={clicked ? "nav-open" : ""} onClick={()=>window.scroll(0,0)}>
      
          <Link to="/"> 🏠Home</Link>
          <Link to="/about">ℹ️ About</Link>
          <Link to="/price">🧮Price</Link>
          <Link to="/contact">📲Contact</Link>
          <div className="login-btn">
            <ModalRegistration />
          </div>
        </nav>
        <div className="burger_Menu" onClick={handleClick}>
          {clicked ? <IoCloseCircleSharp /> : <TbGridDots />}
        </div>
      </header>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;