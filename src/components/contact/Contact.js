import React from "react";
import "./Contact.css";
import img from "../../assets/8.png";
import img1 from "../../assets/28.jpg";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="kontakt">
        <div className="container top">
          <div className="heading text-center">
            <h4>Kontakt</h4>
            <h3>Epilog</h3>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="imge">
                  <img src={img} alt="..." />
                </div>
                <div className="details">
                  <h2>Samuel Pickwick</h2>
                  <p>Londyn</p>
                  <p>48 Daughty Street Bloomsbury</p>
                  <p className="mail">
                    <AiOutlineMail />
                    <a href="mailto:puaro@vp.pl"> puaro@vp.pl</a>
                  </p>
                  <br />
                  <span>Szukaj w mediach:</span>
                  <div className="button f_flex">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="right box_shadow">
              <img src={img1} alt="..." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
