import React, { useState } from "react";
import { BiBook } from "react-icons/bi";
import {
  BsArrowRight,
  BsFillHandThumbsUpFill,
  BsChevronRight,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const Card = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="..." onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <BiBook /> {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <BsArrowRight />
          </a>
        </div>
      </div>
      {/* {Popup modal} */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="..." />
            </div>
            <div className="modal-text right">
              <span>Rozdziały</span>
              <h2>{props.title}</h2>
              {/* <p>lorem</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p> */}
              {/* <div className="button f_flex mtop">
                <button className="btn_shadow f_flex">
                  Lubię
                  <BsFillHandThumbsUpFill />
                </button>
                <button className="btn_shadow f_flex">
                  Więcej
                  <BsChevronRight />
                </button>
              </div> */}
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

// https://docer.tips/dickens-charles-klub-pickwicka.html
