import React from "react";
import PropTypes from "prop-types";
import image from "url:../images/self.jpeg";
import arrowSvg from "url:../images/down-arrow.svg";

const imageAltText = "Portfolio background showing workspace with tech setup";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "10%",
        color: "white",
      }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={imageAltText}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "60% center", // ⬅ shift image slightly right
          backgroundColor: "black",
          zIndex: -2,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6))",
          zIndex: -1,
        }}
      />

      {/* Text content */}
      <div style={{ zIndex: 1 }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>{name}</h1>
        <h2 style={{ fontWeight: "400", fontSize: "1.8rem" }}>{title}</h2>
      </div>

      {/* Down arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <img
          src={arrowSvg}
          alt="Scroll down indicator"
          style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;