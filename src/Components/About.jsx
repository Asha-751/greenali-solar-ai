import { useRef, useState, useEffect } from "react";
import "../Styles/About.css";

import aboutVideo from "../assets/about-solar-video.mp4";
import asimImg from "../assets/asim.jpg";

import expo1 from "../assets/expo1.jpg";
import expo2 from "../assets/expo2.jpg";
import expo3 from "../assets/expo3.jpg";

const VIDEO2 =
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4";

const IMG_HERO =
  "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600";

const IMG_WHY =
  "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1600";

const IMG_CTA =
  "https://images.pexels.com/photos/9799716/pexels-photo-9799716.jpeg?auto=compress&cs=tinysrgb&w=1600";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function FadeUp({ children, delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`fadeup ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="ab-root" id="about">
      <section className="ab-fullscreen ab-hero-sec">
        <video autoPlay muted loop playsInline className="ab-bg-video" poster={IMG_HERO}>
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="ab-overlay ab-overlay-heavy"></div>

        <div className="ab-hero-content">
          <FadeUp>
            <p className="ab-eyebrow">Greenali Solar Private Limited</p>
          </FadeUp>

          <FadeUp delay={120}>
            <h1 className="ab-hero-h1">
              About <span className="ab-green">Greenali Solar</span>
            </h1>
          </FadeUp>

          <FadeUp delay={240}>
            <p className="ab-hero-sub">
              Building a cleaner and brighter India with reliable, affordable
              and sustainable solar energy solutions.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="ab-split-sec" id="who">
        <div className="ab-split-left">
          <FadeUp>
            <span className="ab-eyebrow">Who We Are</span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2 className="ab-section-h2">
              Your Trusted <br />
              Solar Partner
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="ab-section-p">
              At Greenali Solar, we do not just install panels — we build a
              cleaner future. From rooftop homes to large commercial projects,
              our end-to-end solar solutions make switching to solar simple,
              affordable and long-lasting.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="ab-mv-row">
              <div className="ab-mv">
                <strong>🎯 Mission</strong>
                <p>Make solar power simple and affordable for every Indian.</p>
              </div>

              <div className="ab-mv">
                <strong>🌱 Vision</strong>
                <p>A greener India powered by clean and renewable energy.</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="ab-split-right">
          <div className="ab-slider">
            <img
              src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Solar Farm"
              className="slide active"
            />

            <img
              src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Solar Panels"
              className="slide"
            />

            <img
              src="https://images.pexels.com/photos/9799716/pexels-photo-9799716.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Solar Installation"
              className="slide"
            />

            <img
              src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Clean Energy"
              className="slide"
            />
          </div>

          <div className="ab-img-overlay"></div>
        </div>
      </section>

      <section className="owner-section">
        <div className="owner-head">
          <span>Leadership</span>
          <h2>Our Founder & Visionary Leader</h2>
          <p>
            The vision behind Greenali Solar is driven by innovation,
            sustainability and a strong commitment to clean energy.
          </p>
        </div>

        <div className="owner-card">
          <div className="owner-img-box">
            <img src={asimImg} alt="Asim Ali" />
          </div>

          <div className="owner-content">
            <h4>Founder & Managing Director</h4>
            <h3>Asim Ali</h3>

            <p>
              Asim Ali is the founder of Greenali Solar and a passionate
              renewable energy advocate. With expertise in Electrical
              Engineering, Health, Safety & Environment, and sustainable energy
              consulting, he has dedicated his career to building reliable and
              future-ready solar solutions.
            </p>

            <p>
              His leadership combines technical excellence, safety standards and
              environmental responsibility to empower homes, businesses and
              industries with clean energy.
            </p>

            <a
              href="https://www.linkedin.com/in/asim-ali-3a964516b/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="facility-grid">
          <div className="feature-card green">
            <h3>⚡ Solar Expertise</h3>
            <p>Advanced solar planning, installation and energy-saving solutions.</p>
          </div>

          <div className="feature-card white">
            <h3>🛡 Safety First</h3>
            <p>Strong HSE standards, risk assessment and compliance-focused execution.</p>
          </div>

          <div className="feature-card blue">
            <h3>🌱 Sustainability</h3>
            <p>Clean energy solutions designed for a greener and brighter India.</p>
          </div>
        </div>
      </section>

      <section className="expo-section">
        <div className="expo-head">
          <span>Solar Expo Presence</span>
          <h2>Greenali Solar at Renewable Energy Events</h2>
          <p>
            Solar and renewable energy expos bring EPC companies, technology
            providers, investors and clean-energy professionals together to
            showcase rooftop solar, battery storage, EV charging and
            future-ready green technologies.
          </p>
        </div>

        <div className="expo-main">
          <div className="expo-text">
            <h3>Connecting Innovation With Clean Energy</h3>
            <p>
              Greenali Solar actively participates in solar expo events to
              explore new technologies, build industry connections and stay
              updated with the latest trends in rooftop solar, hybrid systems,
              battery backup and smart energy solutions.
            </p>

            <div className="expo-points">
              <div>
                <b>01</b>
                <h4>Technology Showcase</h4>
                <p>Latest panels, inverters, hybrid systems and storage solutions.</p>
              </div>

              <div>
                <b>02</b>
                <h4>Industry Networking</h4>
                <p>Connecting with EPC leaders, vendors, distributors and energy experts.</p>
              </div>

              <div>
                <b>03</b>
                <h4>Clean Energy Growth</h4>
                <p>Learning new trends to deliver better solar solutions for customers.</p>
              </div>
            </div>
          </div>

          <div className="expo-gallery">
            <img src={expo1} alt="Solar Expo Event" />
            <img src={expo2} alt="Renewable Energy Expo" />
            <img src={expo3} alt="Greenali Solar Event" />
          </div>
        </div>
      </section>

      <section className="ab-why-sec">
        <img src={IMG_WHY} alt="Solar farm" className="ab-bg-img" />
        <div className="ab-overlay ab-overlay-dark"></div>

        <div className="ab-why-inner">
          <FadeUp>
            <div className="ab-sec-header">
              <span className="ab-eyebrow">Why Greenali</span>
              <h2 className="ab-section-h2">The Greenali Advantage</h2>
            </div>
          </FadeUp>

          <div className="ab-why-grid">
            <div className="ab-why-card">
              <div className="ab-why-icon">🛡️</div>
              <h4>25 Year Warranty</h4>
              <p>Industry-leading performance guarantee on every installation.</p>
            </div>

            <div className="ab-why-card">
              <div className="ab-why-icon">🔧</div>
              <h4>Free Maintenance</h4>
              <p>5–7 years of free O&M support for smooth performance.</p>
            </div>

            <div className="ab-why-card">
              <div className="ab-why-icon">📞</div>
              <h4>24×7 Support</h4>
              <p>Our team is always ready to help you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-cta-sec">
        <video autoPlay muted loop playsInline className="ab-bg-video" poster={IMG_CTA}>
          <source src={VIDEO2} type="video/mp4" />
        </video>

        <div className="ab-overlay ab-overlay-heavy"></div>

        <div className="ab-cta-content">
          <FadeUp>
            <h2 className="ab-cta-h2">Ready to Go Solar?</h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p className="ab-cta-p">
              Get your free solar consultation today and start saving with clean energy.
            </p>
          </FadeUp>

          <FadeUp delay={240}>
            <div className="ab-cta-btns">
              <a href="tel:+916200003061" className="ab-btn-white">
                📞 Call Now
              </a>

              <a
                href="https://wa.me/916200003061"
                target="_blank"
                rel="noreferrer"
                className="ab-btn-green"
              >
                💬 WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}