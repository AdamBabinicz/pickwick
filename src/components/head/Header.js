import React, { useState } from "react";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/1.svg";
import Modal from "../Portal/Modal";

const Header = () => {
  // when scroll header at top
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  //toggle menu
  const [mobile, setMobile] = useState(false);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="..." />
            Klub&nbsp;Pickwicka
          </div>
          <div className="navlink">
            {/* <ul className="link f_flex uppercase"> */}
            <ul
              className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/#">Start</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#rozdziały">Rozdziały</a>
              </li>
              <li>
                <a href="#cytaty">Cytaty</a>
              </li>
              <li>
                <a href="#recenzje">Recenzje</a>
              </li>
              <li>
                <a href="#życiorys">Życiorys</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
              <li>
                <button className="home-btn" onClick={() => Toggle()}>
                  Więcej
                </button>
              </li>
            </ul>
            <Modal show={modal} close={Toggle} title="Okoliczności powstania">
              <p>
                "Inicjatorem powstania utworu był popularny rysownik Robert
                Seymour, który zaproponował wydawnictwu „Chapman and Hall”
                stworzenie serii humorystycznych obrazków, przedstawiających
                wydarzenia z życia amatorskiego klubu sportowego. Stworzenie
                tekstu, który łączyłby ilustracje, zaproponowano Dickensowi.
                Pomimo wątpliwości (wynikających m.in. z nieznajomości realiów
                wsi i sportu), pisarz zgodził się, pod warunkiem jednak, że to
                teksty będą stanowić właściwą treść publikacji, ilustracje
                natomiast powstaną na ich podstawie. Wydawcy przystali na tę
                propozycję i rozpoczęli publikację, zaplanowaną na 24 zeszyty.
                Współpraca pomiędzy Seymourem a Dickensem od początku układała
                się źle – rysownik niedobrze znosił dominację pisarza oraz
                przymus ilustrowania nie tylko humorystycznych, ale i ponurych
                fragmentów utworu."
              </p>
              <br />
              <p>
                <em>pl.wikipedia.org/wiki/Klub_Pickwicka</em>
              </p>
            </Modal>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <FaTimes className="close home-btn" />
              ) : (
                <FaBars className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
      <section className="demo"></section>
    </>
  );
};

export default Header;
