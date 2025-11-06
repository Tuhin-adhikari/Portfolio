/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Tuhin Adhikari",
  title: "Web Developer & Tech Enthusiast",
  email: "tuhinworkspace2817@gmail.com",
  gitHub: "Tuhin-adhikari",
  instagram: "agent_tuhin_",
  linkedIn: "tuhin-adhikari-6aa9b42a4/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#222831";
const secondaryColor = "#EEEEEE";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
