/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: "1rem 2rem",
        zIndex: 100,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#about" style={linkStyle}>About</a>
      <a href="#portfolio" style={linkStyle}>Projects</a>
      <a href="#footer" style={linkStyle}>Contact</a>
    </header>
  );
};

const linkStyle = {
  color: "#333",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1.1rem",
  transition: "color 0.3s ease",
};

export default Header;