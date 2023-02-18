import React, { useEffect, useState } from "react";
import Header from "../../components/blocks/Header";
import Footer from "../../components/blocks/Footer";
import HomePage from "../../pages/client/Homepage";
import ReactDOM from "react-dom";
import './style.css'; // style theme

const WebLayout = () => {

  useEffect(() => {
    const btnScrollTop = document.getElementById("scroll-top-btn");
    window.onscroll = function () {
      scrollFunction();
    };

    // show btn
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        btnScrollTop.style.display = "block";
      } else {
        btnScrollTop.style.display = "none";
      }
    };
  });

  //click btn
  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
      <button id="scroll-top-btn" onClick={goToTop}>
        ^
      </button>
    </>
  );
};

export default WebLayout;
