import React from "react";
import "./Blog.css";
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  return (
    <>
      <section className="portfolio blog" id="życiorys">
        <div className="container top">
          <div className="heading text-center">
            <h4>1812 - 1870</h4>
            <h3>Charles John Huffam Dickens (Boz)</h3>
          </div>
          <div className="content grid">
            {BlogApi.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  date={value.date}
                  title_one={value.title_one}
                  title_two={value.title_two}
                  title_three={value.title_three}
                  desc_one={value.desc_one}
                  desc_two={value.desc_two}
                  desc_three={value.desc_three}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
