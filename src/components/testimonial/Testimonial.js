import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import TestimonialApi from "./TestimonialApi";
import "./Testimonial.css";

const Testimonial = () => {
  const [data, setData] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <section className="testimonial" id="recenzje">
        <div className="container">
          <div className="heading text-center">
            <h4>Co napisali recenzenci?</h4>
            <h3>Recenzje</h3>
          </div>
          <div className="slide">
            {data.map((value, valueIndex) => {
              return (
                <Slide
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}
            <div className="slide_button">
              <button
                className="btn_shadow prev_btn"
                onClick={() => setIndex(index - 1)}
              >
                <BsArrowLeft />
              </button>
              <button
                className="btn_shadow next_btn"
                onClick={() => setIndex(index + 1)}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
