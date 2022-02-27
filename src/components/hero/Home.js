import React from "react";
import "./Home.css";
import hero from "../../assets/5.png";
import img from "../../assets/2.png";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/3.svg";
import { Typewriter } from "react-simple-typewriter";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Londyńskie Stowarzyszenie Korespondentów</h3>
            <h1>
              Klubu
              <span> Pickwicka</span>
            </h1>
            <h2>
              pan
              <span>
                <Typewriter
                  words={[
                    " Samuel Pickwick",
                    " August Snodgrass",
                    " Nataniel",
                    " Winkle",
                    " Tracy Tupman",
                    " Samuel Weller",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              Samuel Pickwick - tytułowy bohater powieści - założyciel i prezes
              Klubu Pickwicka - najpierw poczciwy i śmieszny grubas, następnie -
              wcielenie dobroci i stateczny mieszczanin wędruje po Anglii w
              towarzystwie trzech przyjaciół, członków Klubu i służącego.
              Spotykają wiele osób, przeżywają liczne przygody, bowiem Pickwick
              - naiwny i dobrotliwy - często popada w tarapaty.
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Media</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a
                      href="https://pl-pl.facebook.com/instytut.chopina"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsFacebook />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://twitter.com/ludka142/status/1137732475235504128?lang=da"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillTwitterCircle />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://www.instagram.com/chopininstitute/?hl=pl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      href="https://pl.pinterest.com/claudiapriv/chopin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsPinterest />
                    </a>
                  </button>
                  {/* <button className="btn_shadow">
                    <BsFacebook />
                  </button>
                  <button className="btn_shadow">
                    <AiFillTwitterCircle />
                  </button>
                  <button className="btn_shadow">
                    <AiFillInstagram />
                  </button>
                  <button className="btn_shadow">
                    <BsPinterest />
                  </button> */}
                </div>
              </div>
              {/* <div className="col1">
                <h4>Statut</h4>
                <button className="btn_shadow">
                  <img src={img} alt="..." />
                </button>
                <button className="btn_shadow">
                  <img src={img1} alt="..." />
                </button>
                <button className="btn_shadow">
                  <img src={img2} alt="..." />
                </button>
              </div> */}
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="..." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// https://czasgentlemanow.pl/2014/12/nietuzinkowy-klub-dzentelmenow-wedlug-dickensa/
