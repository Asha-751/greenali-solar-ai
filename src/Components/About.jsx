import { useRef, useState, useEffect } from "react";
import "../Styles/About.css";
import aboutVideo from "../assets/about-solar-video.mp4";

const VIDEO2 =
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4";

const IMG_HERO =
  "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600";
const IMG_WHO =
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200";
const IMG_ONGRID =
  "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800";
const IMG_OFFGRID =
  "https://images.pexels.com/photos/9799720/pexels-photo-9799720.jpeg?auto=compress&cs=tinysrgb&w=800";
const IMG_HYBRID =
  "https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800";
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

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`fadeup ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 30));

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end, inView]);

  return (
    <span ref={ref}>
      {count}
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 25, suffix: " Yrs", label: "Performance Warranty" },
  { value: 7, suffix: " Yrs", label: "Free Maintenance" },
  { value: 24, suffix: "×7", label: "O&M Support" },
  { value: 100, suffix: "%", label: "Pan India Network" },
];

const services = [
  {
    icon: "⚡",
    title: "On-Grid Solar",
    sub: "Grid-Connected System",
    desc:
      "Connected to the national grid. Sell excess power back and reduce your electricity bill to near zero.",
    tag: "Most Popular",
    img: IMG_ONGRID,
  },
  {
    icon: "🔋",
    title: "Off-Grid Solar",
    sub: "Stand-Alone System",
    desc:
      "100% independent. Electricity stored in batteries — power available day and night, rain or shine.",
    tag: "For Rural Areas",
    img: IMG_OFFGRID,
  },
  {
    icon: "🌐",
    title: "Hybrid Solar",
    sub: "Best of Both Worlds",
    desc:
      "Solar first. Battery backup second. Grid as fallback. Maximum savings with zero interruptions.",
    tag: "Best Value",
    img: IMG_HYBRID,
  },
];

const whyUs = [
  {
    icon: "🛡️",
    title: "25 Year Warranty",
    desc: "Industry-leading performance guarantee on every installation.",
  },
  {
    icon: "🔧",
    title: "Free Maintenance",
    desc: "5–7 years of free O&M. No surprise bills, ever.",
  },
  {
    icon: "📞",
    title: "24×7 Support",
    desc: "Our team is always on call. Day or night.",
  },
  {
    icon: "🇮🇳",
    title: "Pan India",
    desc: "Installations across every state in India.",
  },
  {
    icon: "💰",
    title: "EMI Available",
    desc: "Flexible financing so solar fits any budget.",
  },
  {
    icon: "🏆",
    title: "Certified EPC",
    desc: "Trusted solar EPC partner with proven track record.",
  },
];

export default function About() {
  return (
    <div className="ab-root">
      <section id="about" className="ab-fullscreen ab-hero-sec">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="ab-bg-video"
          poster={IMG_HERO}
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="ab-overlay ab-overlay-heavy" />

        <div className="ab-hero-content">
          <FadeUp>
            <p className="ab-eyebrow">Greenali Solar Private Limited</p>
          </FadeUp>

          <FadeUp delay={120}>
            <h1 className="ab-hero-h1">
              Power Your World.
              <br />
              <span className="ab-green">Sustainably.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={240}>
            <p className="ab-hero-sub">
              India's trusted solar EPC company — delivering clean, affordable
              energy to homes and businesses nationwide.
            </p>
          </FadeUp>

          <FadeUp delay={360}>
            <div className="ab-hero-actions">
              <a href="tel:+916200003061" className="ab-btn-white">
                Get Free Quote
              </a>
              <a href="#who" className="ab-btn-ghost">
                Learn More ↓
              </a>
            </div>
          </FadeUp>
        </div>

        <div className="ab-scroll-hint">
          <div className="ab-scroll-dot" />
        </div>
      </section>

      <section className="ab-split-sec" id="who">
        <div className="ab-split-left">
          <FadeUp>
            <span className="ab-eyebrow">Who We Are</span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2 className="ab-section-h2">
              Your Trusted
              <br />
              Solar Partner
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="ab-section-p">
              At Greenali Solar, we don't just install panels — we build a
              cleaner future. From rooftop homes to large commercial projects,
              our end-to-end solar solutions make switching simple, affordable,
              and long-lasting.
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
                <p>A greener India — 100% renewable by 2030.</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="ab-split-right">
          <img src={IMG_WHO} alt="Solar installation" className="ab-split-img" />
          <div className="ab-img-overlay" />
        </div>
      </section>

      <section className="ab-stats-bar">
        {stats.map((s, i) => (
          <FadeUp key={i} delay={i * 80}>
            <div className="ab-stat">
              <div className="ab-stat-val">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="ab-stat-lbl">{s.label}</div>
            </div>
          </FadeUp>
        ))}
      </section>

      <section className="ab-services-sec">
        <div className="ab-services-inner">
          <FadeUp>
            <div className="ab-sec-header">
              <span className="ab-eyebrow">What We Do</span>
              <h2 className="ab-section-h2">Choose Your System</h2>
              <p
                className="ab-section-p"
                style={{ maxWidth: "500px", margin: "0 auto" }}
              >
                Three solar solutions — one for every need and budget.
              </p>
            </div>
          </FadeUp>

          <div className="ab-cards-row">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 120}>
                <div className="ab-card">
                  <div className="ab-card-img-wrap">
                    <img src={s.img} alt={s.title} className="ab-card-img" />
                    <div className="ab-card-img-fade" />
                  </div>

                  <div className="ab-card-body">
                    <span className="ab-card-tag">{s.tag}</span>
                    <div className="ab-card-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p className="ab-card-sub">{s.sub}</p>
                    <p className="ab-card-desc">{s.desc}</p>
                    <a href="tel:+916200003061" className="ab-card-link">
                      Get Quote →
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-why-sec">
        <img src={IMG_WHY} alt="Solar farm" className="ab-bg-img" />
        <div className="ab-overlay ab-overlay-dark" />

        <div className="ab-why-inner">
          <FadeUp>
            <div className="ab-sec-header">
              <span className="ab-eyebrow">Why Greenali</span>
              <h2 className="ab-section-h2">The Greenali Advantage</h2>
            </div>
          </FadeUp>

          <div className="ab-why-grid">
            {whyUs.map((w, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="ab-why-card">
                  <div className="ab-why-icon">{w.icon}</div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-cta-sec">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="ab-bg-video"
          poster={IMG_CTA}
        >
          <source src={VIDEO2} type="video/mp4" />
        </video>

        <div className="ab-overlay ab-overlay-heavy" />

        <div className="ab-cta-content">
          <FadeUp>
            <h2 className="ab-cta-h2">Ready to Go Solar?</h2>
          </FadeUp>

          <FadeUp delay={120}>
            <p className="ab-cta-p">
              Join thousands of Indian families saving with clean solar energy.
              Get your free consultation today.
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