import React from "react";
import BannerHome from "../../../components/homepage/BannerHome";
import Service from "../../../components/homepage/Service";
import Advantage from "../../../components/homepage/Advantage";
import Contact from "../../../components/homepage/Contact";
import Experience from "../../../components/homepage/Experience";
import RecentWork from "../../../components/homepage/RecentWork";
import NewsWidget from "../../../components/homepage/NewsWidget";

const HomePage = (props) => {
  return (
    <>
      <BannerHome />
      <Advantage />
      <Service />
      <Experience />
      <RecentWork />
      <Contact />
      <NewsWidget />
    </>
  );
};

export default HomePage;
