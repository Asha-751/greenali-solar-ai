import "../Styles/About.css";
import { Link } from "react-router-dom";
import asimImg from "../assets/asim.jpg";
import shaliniImg from "../assets/shalini.png";
import sumitImg from "../assets/sumit.png";

import event1 from "../assets/expo1.jpg";
import event2 from "../assets/expo2.jpg";
import event3 from "../assets/expo3.jpg";

import solar1 from "../assets/solar1.jpg";
import solar2 from "../assets/solar2.jpg";

const ABOUT_VIDEO =
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4";

export default function About() {
  return (
    <div className="about-page" id="about">
      <section className="about-hero">
        <video autoPlay muted loop playsInline className="about-video">
          <source src={ABOUT_VIDEO} type="video/mp4" />
        </video>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span>Greenali Solar Private Limited</span>
          <h1>
            About <b>Greenali Solar</b>
          </h1>

          <p>
            Building a cleaner and brighter India with reliable, affordable and
            sustainable solar energy solutions.
          </p>

          <div className="hero-points">
            <div>⚡ Clean Energy</div>
            <div>🛡 Trusted Solutions</div>
            <div>🌱 Sustainable Future</div>
          </div>

          <div className="about-highlights hero-highlight">
            <div className="about-card">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="about-card">
              <h3>15MW+</h3>
              <p>Solar Capacity Installed</p>
            </div>
            <div className="about-card">
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="about-card">
              <h3>25 Years</h3>
              <p>Performance Warranty</p>
            </div>
          </div>
        </div>
      </section>

      <main className="about-main">
        <section className="founder-dark">
          <div className="founder-img">
            <img src={asimImg} alt="Asim Ali" />
            <a
              href="https://www.linkedin.com/in/asim-ali-3a964516b/"
              target="_blank"
              rel="noreferrer"
              className="in-badge"
            >
              in
            </a>
          </div>

          <div className="founder-text">
            <span>Founder & Managing Director</span>
            <h2>Asim Ali</h2>
            <p>
              Asim Ali is the founder of Greenali Solar and a renewable energy
              professional focused on innovation, safety and sustainable growth.
              His vision is to make solar energy simple, affordable and reliable
              for homes, businesses and industries.
            </p>

            <div className="founder-tags">
              <div>⚡ Solar Expertise</div>
              <div>🛡 Safety First</div>
              <div>🌱 Clean Energy Vision</div>
            </div>

            <a
              className="linkedin-btn"
              href="https://www.linkedin.com/in/asim-ali-3a964516b/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </section>

        <section className="team-dark">
          <div className="team-head">
            <span>Our Team</span>
            <h2>Meet The People Behind Greenali Solar</h2>
            <p>
              A passionate team working together to deliver clean energy, better
              service and smart solar solutions.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <b className="role-badge">Founder</b>
              <img src={asimImg} alt="Asim Ali" />
              <h3>Asim Ali</h3>
              <h4>Founder & Managing Director</h4>
              <p>
                Leading Greenali Solar with expertise in renewable energy,
                safety management and sustainable business growth.
              </p>
            </div>

            <div className="team-card">
              <img src={shaliniImg} alt="Shalini Singh" />
              <h3>Shalini Singh</h3>
              <h4>HR Manager</h4>
              <p>
                Handles recruitment, team coordination and employee support,
                helping Greenali Solar build a strong and professional work
                culture.
              </p>
            </div>

            <div className="team-card">
              <img src={sumitImg} alt="Sumit Kumar" />
              <h3>Sumit Kumar</h3>
              <h4>Digital Marketing Executive</h4>
              <p>
                Works on SEO, social media, content planning and online brand
                promotion to grow Greenali Solar’s digital presence.
              </p>
            </div>
          </div>
        </section>

        <section className="real-work-section">
          <div className="real-work-head">
            <span>Our Solar Solutions</span>

            <h2>
              Powering Homes <br />
              Businesses & <br />
              Industries
            </h2>

            <p>
              Greenali Solar delivers reliable rooftop solar,
              commercial solar and industrial solar solutions
              helping homes and businesses reduce electricity
              costs while building a greener future.
            </p>
          </div>

          <div className="real-work-grid">
            <div className="real-work-card">
              <img src={solar1} alt="Residential Solar System" />
              <h3>Residential Solar Systems</h3>
              <p>
                Smart rooftop solar installations helping homeowners save
                electricity bills and achieve energy independence.
              </p>
            </div>

            <div className="real-work-card">
              <img src={solar2} alt="Commercial Solar Project" />
              <h3>Commercial Solar Projects</h3>
              <p>
                Reliable solar power solutions for offices, schools, hospitals
                and commercial buildings.
              </p>
            </div>

            <div className="real-work-card">
              <img src={<img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                alt="Industrial Solar Plant"
              />} alt="Industrial Solar Plant" />
              <h3>Industrial Solar Plants</h3>
              <p>
                Large-scale solar systems engineered for factories and
                industrial facilities with maximum efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="events-dark">
          <div className="event-info">
            <span>Events & Exhibitions</span>
            <h2>Our Presence, Our Pride</h2>
            <p>
              Greenali Solar actively participates in renewable energy
              exhibitions, industry networking events and technology showcases
              to stay connected with the latest innovations in solar energy.
            </p>

            <div className="event-point">
              <b>⭐</b>
              <p>Industry recognition and participation in solar events.</p>
            </div>
            <div className="event-point">
              <b>🤝</b>
              <p>Connecting with clients, partners and industry experts.</p>
            </div>
            <div className="event-point">
              <b>🌱</b>
              <p>Promoting awareness about clean and sustainable energy.</p>
            </div>
          </div>

          <div className="event-gallery">
            <div className="event-card">
              <img src={event1} alt="Greenali Solar Exhibition" />
              <h4>Renewable Energy Exhibition 2024</h4>
              <p>📍 Patna, Bihar</p>
            </div>

            <div className="event-card">
              <img src={event2} alt="Greenali Solar Exhibition" />
              <h4>Industry Networking Session</h4>
              <p>📍 Patna, Bihar</p>
            </div>

            <div className="event-card">
              <img src={event3} alt="Greenali Solar Exhibition" />
              <h4>Solar Technology Showcase</h4>
              <p>📍 Patna, Bihar</p>
            </div>
          </div>
        </section>

        <section className="about-bottom-cta">
          <div>
            <h2>Let’s Build A Greener Future Together</h2>
            <p>
              Join us in the journey towards a clean, green and sustainable
              energy future.
            </p>
          </div>
          <Link to="/contact" className="cta-btn">
            Get In Touch →
          </Link>
        </section>
      </main>
    </div>
  );
}