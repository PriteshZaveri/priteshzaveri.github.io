import React from "react";
import Hello from "./components/hello";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Portfolio from "./components/portfolio";
import Feedback from "./components/feedback";
import ContactUs from "./components/contactus";

const Home = () => {
  return (
    <>
      <Hello />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      {/* <Feedback /> */}
      <ContactUs />
    </>
  );
};

export default Home;
