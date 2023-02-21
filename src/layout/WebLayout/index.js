import React, { useEffect, useState } from "react";
import Header from "../../components/blocks/Header";
import Footer from "../../components/blocks/Footer";
import HomePage from "../../pages/client/Homepage";
import ReactDOM from "react-dom";
import './style.scss'; // style theme
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faGears } from "@fortawesome/free-solid-svg-icons";

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
  },[]);

  //click btn
  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
    <div className="header-wrapper">
      <Header />
    </div>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
      
      {/* scroll element */}
      <button id="scroll-top-btn" onClick={goToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {/* setting element */}
      <div className="settings">
        <FontAwesomeIcon className="settings-icon" icon={faGears} color="#fff" />
      </div>
    </>
  );
};

export default WebLayout;
