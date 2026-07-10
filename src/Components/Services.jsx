import { useRef, useState, useEffect } from "react";
import "../Styles/Services.css";
const VIDEO_BG = "https://cdn.coverr.co/videos/coverr-aerial-view-of-solar-panels-1573/1080p.mp4";
const IMG_HERO = "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600";
const IMG_CTA = "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1600";
console.log("📧 Sending Email...");
console.log("✅ Email Sent Successfully");
// ── All services from PDF ──
const services = [
  {
    id: "01",
    icon: "🏠",
    title: "Residential Solar Installation",
    sub: "Homes & Apartments",
    desc: "Complete rooftop solar solutions for homes and apartments. We handle everything — from site survey to final commissioning. Zero electricity bills with 25-year performance warranty.",
    benefits: ["Zero Electricity Bills", "25 Yr Warranty", "Free Site Survey", "EMI Available"],
    img: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#2ecc71",
  },
  {
    id: "02",
    icon: "🏭",
    title: "Commercial Solar Installation",
    sub: "Offices, Factories & Industries",
    desc: "Large-scale solar EPC solutions for offices, factories, warehouses and industries. Reduce operational costs drastically with custom-designed high-capacity solar systems.",
    benefits: ["Reduce OpEx", "Custom Design", "High Capacity", "ROI in 3-4 Yrs"],
    img: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#3498db",
  },
  {
    id: "03",
    icon: "🌾",
    title: "Agriculture Solar Solutions",
    sub: "Farms & Rural Areas",
    desc: "Solar water pumps and off-grid systems specially designed for farmers and rural communities. Power your irrigation and daily needs without any electricity cost.",
    benefits: ["Solar Water Pump", "Off-Grid Power", "No Grid Needed", "Govt Subsidy"],
    img: "https://images.pexels.com/photos/9799720/pexels-photo-9799720.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#f9c74f",
  },
  {
    id: "04",
    icon: "🔍",
    title: "Solar Site Survey & Design",
    sub: "AI-Powered Assessment",
    desc: "Our AI-powered site assessment uses satellite imagery, solar irradiance data and roof dimensions to calculate optimal panel placement and expected yield — before a single site visit.",
    benefits: ["AI Assessment", "Satellite Imagery", "Yield Calculation", "Free of Cost"],
    img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#9b59b6",
  },
  {
    id: "05",
    icon: "⚙️",
    title: "Operation & Maintenance",
    sub: "24×7 O&M Support",
    desc: "Round-the-clock operations and maintenance support. Smart IoT sensors combined with AI continuously monitor each panel. Faults flagged instantly to ensure maximum uptime.",
    benefits: ["24×7 Support", "IoT Monitoring", "Instant Fault Alert", "5-7 Yrs Free"],
    img: "https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#e74c3c",
  },
  {
    id: "06",
    icon: "🔋",
    title: "Solar Battery Storage",
    sub: "Energy Independence",
    desc: "Install battery storage systems to store excess solar energy for use at night or during power cuts. AI-based energy management decides when to store, use or sell back to grid.",
    benefits: ["No Power Cuts", "Night Power", "AI Management", "Grid Sell Back"],
    img: "https://images.pexels.com/photos/9799716/pexels-photo-9799716.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#27ae60",
  },
  {
    id: "07",
    icon: "📊",
    title: "Net Metering & Subsidy",
    sub: "Government Benefits",
    desc: "We handle complete net metering registration and help you avail government subsidies. AI tools generate accurate ROI projections, payback period calculations and subsidy eligibility.",
    benefits: ["Govt Subsidy", "Net Metering", "ROI Calculator", "Full Assistance"],
    img: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#f39c12",
  },
  {
    id: "08",
    icon: "🏗️",
    title: "Building-Integrated PV (BIPV)",
    sub: "Smart Architecture",
    desc: "Solar panels built into roofs, walls and glass that generate clean energy while enhancing modern building design. A smart solution for sustainable and energy-efficient buildings.",
    benefits: ["Roof Integration", "Wall Panels", "Smart Design", "Energy Efficient"],
    img: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#1abc9c",
  },
];

const process = [
  { step: "01", icon: "📞", title: "Free Consultation", desc: "Call us or fill the form. Our expert contacts you within 24 hours." },
  { step: "02", icon: "🔍", title: "Site Survey", desc: "Our team visits your site for AI-powered assessment and design." },
  { step: "03", icon: "📋", title: "Custom Proposal", desc: "You get a detailed proposal with cost, savings and ROI analysis." },
  { step: "04", icon: "⚙️", title: "Installation", desc: "Expert team installs your system with zero disruption to your routine." },
  { step: "05", icon: "✅", title: "Commissioning", desc: "System tested, net metering applied, handover with full training." },
  { step: "06", icon: "🛠️", title: "After Sales O&M", desc: "5-7 years free maintenance with 24×7 monitoring and support." },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); }, { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`sv-fadeup ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <div className="sv-root" id="services">

      {/* ══ HERO ══ */}
      <section className="sv-hero">
        <video autoPlay muted loop playsInline className="sv-bg-video" poster={IMG_HERO}>
          <source src={VIDEO_BG} type="video/mp4" />
        </video>
        <div className="sv-overlay" />
        <div className="sv-hero-content">
          <FadeUp><span className="sv-eyebrow">Our Services</span></FadeUp>
          <FadeUp delay={100}>
            <h1 className="sv-hero-h1">
              End-to-End Solar<br />
              <span className="sv-green">Services</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="sv-hero-sub">
              From consultation to commissioning — complete solar solutions
              for homes, businesses and agriculture across India.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="sv-hero-btns">
              <a href="tel:+916200003061" className="sv-btn-white">📞 Get Free Consultation</a>
              <a href="#sv-grid" className="sv-btn-ghost">View Services ↓</a>
            </div>
          </FadeUp>
        </div>
        <div className="sv-scroll-hint"><div className="sv-scroll-dot" /></div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="sv-grid-sec" id="sv-grid">
        <div className="sv-container">
          <FadeUp>
            <div className="sv-sec-header">
              <span className="sv-eyebrow">8 Services</span>
              <h2 className="sv-sec-h2">Everything Solar,<br />Under One Roof</h2>
              <p className="sv-sec-p">Complete solar EPC — survey, supply, install, maintain</p>
            </div>
          </FadeUp>

          <div className="sv-grid">
            {services.map((s, i) => (
              <FadeUp key={s.id} delay={i * 70}>
                <div className="sv-card" style={{ "--accent": s.color }}>
                  <div className="sv-card-img-wrap">
                    <img src={s.img} alt={s.title} className="sv-card-img" />
                    <div className="sv-card-img-fade" />
                    <span className="sv-card-id">{s.id}</span>
                  </div>
                  <div className="sv-card-body">
                    <div className="sv-card-icon">{s.icon}</div>
                    <h3 className="sv-card-title">{s.title}</h3>
                    <p className="sv-card-sub">{s.sub}</p>
                    <p className="sv-card-desc">{s.desc}</p>
                    <div className="sv-benefits">
                      {s.benefits.map((b, j) => (
                        <span key={j} className="sv-benefit">✓ {b}</span>
                      ))}
                    </div>
                    <a href="tel:+916200003061" className="sv-card-btn">Enquire Now →</a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS — Process ══ */}
      <section className="sv-process-sec">
        <div className="sv-container">
          <FadeUp>
            <div className="sv-sec-header">
              <span className="sv-eyebrow">How It Works</span>
              <h2 className="sv-sec-h2">Our Simple 6-Step<br />Solar Process</h2>
              <p className="sv-sec-p">From your first call to your first unit generated</p>
            </div>
          </FadeUp>
          <div className="sv-process-grid">
            {process.map((p, i) => (
              <FadeUp key={i} delay={i * 90}>
                <div className="sv-process-card">
                  <div className="sv-process-num">{p.step}</div>
                  <div className="sv-process-icon">{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  {i < process.length - 1 && <div className="sv-process-arrow">→</div>}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="sv-cta">
        <img src={IMG_CTA} alt="Solar" className="sv-bg-img" />
        <div className="sv-overlay sv-overlay-heavy" />
        <div className="sv-cta-content">
          <FadeUp>
            <h2 className="sv-cta-h2">Ready to Start<br />Your Solar Journey?</h2>
          </FadeUp>
          <FadeUp delay={120}>
            <p className="sv-cta-p">
              Get a free site survey and custom solar proposal for your
              home or business. No obligations, no hidden charges.
            </p>
          </FadeUp>
          <FadeUp delay={240}>
            <div className="sv-cta-btns">
              <a href="tel:+916200003061" className="sv-btn-white">📞 Call Now</a>
              <a href="https://wa.me/916200003061" target="_blank" rel="noreferrer" className="sv-btn-green">
                💬 WhatsApp
              </a>
              <a href="mailto:Info@greenalisolar.com" className="sv-btn-ghost">
                ✉️ Email Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}