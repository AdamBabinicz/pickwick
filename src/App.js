import React from "react";
import Header from "./components/head/Header";
import Home from "./components/hero/Home";
import "./App.css";
import Features from "./components/features/Features";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
};

export default App;
