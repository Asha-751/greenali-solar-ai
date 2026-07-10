import { useState } from "react";
import "../Styles/Project.css";
const VIDEO_BG =
  "https://cdn.coverr.co/videos/coverr-solar-panels-on-a-house-1573/1080p.mp4";

const projects = [
  {
    id: 1,
    category: "Industrial",
    title: "500kW Solar Park",
    location: "Bihta Industrial Area, Patna",
    capacity: "500 kW",
    type: "On-Grid",
    savings: "₹3.5L/month",
    panels: "1200 Panels",
    status: "Completed",
    year: "2025",
    desc: "Large-scale industrial solar plant for manufacturing units.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
  },
  {
    id: 2,
    category: "Commercial",
    title: "120kW Shopping Mall Solar",
    location: "Danapur, Patna",
    capacity: "120 kW",
    type: "On-Grid",
    savings: "₹95,000/month",
    panels: "290 Panels",
    status: "Completed",
    year: "2025",
    desc: "Rooftop solar installation for a commercial shopping complex.",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200",
  },
  {
    id: 3,
    category: "Residential",
    title: "15kW Luxury Villa Solar",
    location: "Rajgir, Bihar",
    capacity: "15 kW",
    type: "Hybrid",
    savings: "₹12,000/month",
    panels: "36 Panels",
    status: "Completed",
    year: "2024",
    desc: "Premium solar solution with battery backup for a luxury villa.",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Industrial", "Commercial", "Residential"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <video autoPlay muted loop playsInline className="projects-video">
          <source src={VIDEO_BG} type="video/mp4" />
        </video>

        <div className="projects-overlay"></div>

        <div className="projects-hero-content">
          <p>GREENALI SOLAR PROJECTS</p>
          <h1>Our Solar Success Stories</h1>
          <span>
            Explore residential, commercial and industrial solar installations
            delivered with quality, safety and sustainability.
          </span>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img-box">
                <img src={project.img} alt={project.title} />
                <span>{project.status}</span>
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-details">
                  <div>
                    <strong>{project.capacity}</strong>
                    <small>Capacity</small>
                  </div>
                  <div>
                    <strong>{project.type}</strong>
                    <small>System</small>
                  </div>
                  <div>
                    <strong>{project.savings}</strong>
                    <small>Savings</small>
                  </div>
                  <div>
                    <strong>{project.panels}</strong>
                    <small>Panels</small>
                  </div>
                </div>

                <div className="project-footer">
                  <span>📍 {project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;