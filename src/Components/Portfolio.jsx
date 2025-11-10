/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "url:../images/design-desk.jpeg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projects = [
  {
    name: "Food Warden",
    url: "https://github.com/Tuhin-adhikari/Food-Warden",
    description:
      "A React + Firebase food ordering platform for PG and hostel students with slot-based delivery and loyalty rewards.",
  },
  {
    name: "PSA Website",
    url: "https://github.com/Tuhin-adhikari/Physics-Association-website",
    description:
      "Multi-page dynamic website for the Physics Student Association featuring event management and team showcases.",
  },
  {
    name: "INCPUC",
    url: "https://github.com/Tuhin-adhikari/INCPUC",
    description:
      "Event management and participation platform for college clubs with real-time data tracking.",
  },
  {
    name: "InstaTask Chatbot",
    url: "https://github.com/Tuhin-adhikari/instaTask-chatbot",
    description:
      "AI chatbot for automating task allocation and team productivity using conversational interface.",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#1e1e1e",
        color: "#f5f5f5",
        padding: "4rem 2rem",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Left side image */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt="workspace design"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "1rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right side content */}
        <div
          style={{
            flex: "1 1 500px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                backgroundColor: "#2b2b2b",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.3)";
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4 text-gray-300">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00bcd4",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;