import React from "react";
import "./Features.css";
import data from "./FeaturesApi";
import Card from "./Card";

const Features = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>
              magiawkazdymdniu.blogspot.com/2016/11/klub-pickwicka-charles-dickens.html
            </h4>
            <h2>Magia w każdym dniu</h2>
          </div>
          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                  link={val.link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
