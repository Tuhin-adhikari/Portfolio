/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */

import React from "react";
import PropTypes from "prop-types";

import envelope from "url:../images/socials/envelope.svg";
import devdotto from "url:../images/socials/devdotto.svg";
import github from "url:../images/socials/github.svg";
import instagram from "url:../images/socials/instagram.svg";
import linkedin from "url:../images/socials/linkedin.svg";
import medium from "url:../images/socials/medium.svg";
import twitter from "url:../images/socials/twitter.svg";
import youtube from "url:../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */
const Footer = ({
  devDotTo,
  email,
  gitHub,
  instagram: ig,
  linkedIn,
  medium: med,
  name,
  primaryColor,
  twitter: tw,
  youTube,
}) => {
  const icons = {
    email: envelope,
    devDotTo: devdotto,
    gitHub: github,
    instagram: instagram,
    linkedIn: linkedin,
    medium: medium,
    twitter: twitter,
    youTube: youtube,
  };

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={icons.email} alt="Email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a
            href={`https://dev.to/${devDotTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.devDotTo} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.gitHub} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {ig && (
          <a
            href={`https://www.instagram.com/${ig}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.instagram} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.linkedIn} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {med && (
          <a
            href={`https://medium.com/@${med}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.medium} alt="Medium" className="socialIcon" />
          </a>
        )}
        {tw && (
          <a
            href={`https://twitter.com/${tw}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.twitter} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.youTube} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>

      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;