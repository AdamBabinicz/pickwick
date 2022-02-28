import React from "react";
import logo from "../../assets/1.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <div className="cont_f ">
          <div className="image">
            <img src={logo} alt="..." />
          </div>
          <p>Radom, 2022 - {new Date().getFullYear()}.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
