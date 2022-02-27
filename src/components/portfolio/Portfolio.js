import React from "react";
import "./Portfolio.css";
import Card from "./Card.js";
import PortfolioData from "./PortfolioData";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio top" id="rozdziały">
        <div className="container">
          <div className="heading text-center">
            <h4>Fragmenty</h4>
            <h3>Rozdziałów</h3>
          </div>
          <div className="content grid">
            {PortfolioData.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
