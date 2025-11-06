import React from "react";

const projects = [
  {
    name: "Food Warden",
    url: "https://github.com/tuhinadhikari/Food-Warden",
    description:
      "A React + Firebase food ordering platform for PG and hostel students with slot-based delivery and loyalty rewards.",
  },
  {
    name: "PSA Website",
    url: "https://github.com/tuhinadhikari/PSA-Website",
    description:
      "Multi-page dynamic website for the Physics Student Association featuring event management and team showcases.",
  },
  {
    name: "INCPUC",
    url: "https://github.com/tuhinadhikari/INCPUC",
    description:
      "Event management and participation platform for college clubs with real-time data tracking.",
  },
  {
    name: "InstaTask Chatbot",
    url: "https://github.com/tuhinadhikari/InstaTask-Chatbot",
    description:
      "AI chatbot for automating task allocation and team productivity using conversational interface.",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#1e1e1e", // deep gray
        color: "#f5f5f5",
        padding: "4rem 2rem",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.name}
            style={{
              backgroundColor: "#2b2b2b", // slightly lighter gray
              padding: "2rem",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-4 text-gray-300">{project.description}</p>
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
    </section>
  );
};

export default Portfolio;
