/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */


import bg from "url:../images/motion-background.jpg";

const imageAltText = "coding workspace with laptop and notes";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science, Maths, and Physics student at St. Joseph's University, Bangalore. I enjoy building modern and efficient web apps using React, Tailwind CSS, and Firebase.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "React.js & Tailwind CSS",
  "Firebase Authentication",
  "Node.js & Express",
  "MySQL & MongoDB",
  "Data Analysis (NumPy, Pandas)",
  "UI/UX & Responsive Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I’m passionate about building impactful digital solutions that make everyday tasks easier. I love combining logic with creativity to design smooth, efficient, and user-friendly experiences.";

const About = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "6rem 2rem",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src={bg}
        alt={imageAltText}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))",
          zIndex: -1,
        }}
      />

      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(8px)",
          borderRadius: "1rem",
          padding: "3rem",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          About Myself
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", lineHeight: 1.6 }}>
          {description}
        </p>

        <hr
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            width: "80%",
            margin: "1rem auto",
          }}
        />

        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.15rem",
            margin: "2rem auto",
            maxWidth: "700px",
            lineHeight: 1.8,
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <hr
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            width: "80%",
            margin: "1rem auto",
          }}
        />

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.15rem",
            marginTop: "1.5rem",
            lineHeight: 1.8,
          }}
        >
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
