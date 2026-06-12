import { useRef, useState, useEffect } from "react";
import "../Styles/Project.css";

const VIDEO_BG = "https://videos.pexels.com/video-files/4254174/4254174-uhd_2560_1440_25fps.mp4";
const IMG_HERO = "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600";

// ── All Projects Data ──
const projects = [
    {
        id: 1, category: "Residential",
        title: "3kW Rooftop Solar — Patna Home",
        location: "Patna, Bihar",
        capacity: "3 kW",
        type: "On-Grid",
        savings: "₹2,400/month",
        panels: "7 Panels",
        status: "Completed",
        year: "2024",
        desc: "Complete rooftop on-grid solar installation for a 3BHK home. Zero electricity bills achieved within first month of commissioning.",
        img: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#2ecc71",
    },
    {
        id: 2, category: "Commercial",
        title: "50kW Factory Solar Plant — Bihar",
        location: "Muzaffarpur, Bihar",
        capacity: "50 kW",
        type: "On-Grid",
        savings: "₹40,000/month",
        panels: "120 Panels",
        status: "Completed",
        year: "2024",
        desc: "Large-scale solar plant for a manufacturing unit. Reduced electricity costs by 80% and achieved ROI within 3.5 years.",
        img: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#3498db",
    },
    {
        id: 3, category: "Agriculture",
        title: "Solar Water Pump — Nalanda Farm",
        location: "Nalanda, Bihar",
        capacity: "5 kW",
        type: "Off-Grid",
        savings: "₹8,000/month",
        panels: "12 Panels",
        status: "Completed",
        year: "2024",
        desc: "Off-grid solar water pump for irrigation. Farmer saves ₹8,000/month on diesel and grid electricity. Fully subsidy-assisted.",
        img: "https://images.pexels.com/photos/9799720/pexels-photo-9799720.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#f9c74f",
    },
    {
        id: 4, category: "Residential",
        title: "5kW Hybrid System — Gaya",
        location: "Gaya, Bihar",
        capacity: "5 kW",
        type: "Hybrid",
        savings: "₹4,200/month",
        panels: "12 Panels",
        status: "Completed",
        year: "2023",
        desc: "Hybrid solar system with battery backup for a large family home. 24×7 power supply even during grid outages.",
        img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#9b59b6",
    },
    {
        id: 5, category: "Commercial",
        title: "100kW Solar Plant — Office Complex",
        location: "Patna, Bihar",
        capacity: "100 kW",
        type: "On-Grid",
        savings: "₹85,000/month",
        panels: "240 Panels",
        status: "Completed",
        year: "2023",
        desc: "Rooftop solar for a multi-floor office complex. Complete net metering done. Generating excess units sold back to BSPHCL.",
        img: "https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#e74c3c",
    },
    {
        id: 6, category: "Agriculture",
        title: "10kW Solar Irrigation — Bhojpur",
        location: "Bhojpur, Bihar",
        capacity: "10 kW",
        type: "Off-Grid",
        savings: "₹15,000/month",
        panels: "24 Panels",
        status: "Completed",
        year: "2023",
        desc: "Solar irrigation system for 5 acres of farmland. Group of farmers collectively benefiting from shared solar water pump.",
        img: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#27ae60",
    },
    {
        id: 7, category: "Residential",
        title: "10kW Premium Rooftop — Vaishali",
        location: "Vaishali, Bihar",
        capacity: "10 kW",
        type: "Hybrid",
        savings: "₹9,000/month",
        panels: "24 Panels",
        status: "Completed",
        year: "2023",
        desc: "Premium hybrid solar system for a large bungalow. Auto panel cleaner installed. AI monitoring via mobile app.",
        img: "https://images.pexels.com/photos/9799716/pexels-photo-9799716.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#f39c12",
    },
    {
        id: 8, category: "Commercial",
        title: "200kW Industrial Solar — Hajipur",
        location: "Hajipur, Bihar",
        capacity: "200 kW",
        type: "On-Grid",
        savings: "₹1.6L/month",
        panels: "480 Panels",
        status: "Ongoing",
        year: "2025",
        desc: "Largest Greenali Solar project to date. Industrial solar plant for a food processing unit. Expected to save ₹1.6 lakh/month.",
        img: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "#1abc9c",
    },
];

const categories = ["All", "Residential", "Commercial", "Agriculture"];

const stats = [
    { value: "500+", label: "Projects Done" },
    { value: "5 MW+", label: "Capacity Installed" },
    { value: "₹50L+", label: "Monthly Savings" },
    { value: "Pan India", label: "Network Reach" },
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
        <div ref={ref} className={`pj-fadeup ${inView ? "visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

function ProjectCard({ p, index }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <FadeUp delay={index * 70}>
            <div
                className={`pj-card ${flipped ? "flipped" : ""}`}
                onClick={() => setFlipped(!flipped)}
            >
                {/* FRONT */}
                <div className="pj-card-front">
                    <div className="pj-card-img-wrap">
                        <img src={p.img} alt={p.title} className="pj-card-img" />
                        <div className="pj-card-img-fade" />
                        <div className="pj-top-badges">
                            <span className="pj-badge pj-badge-cat" style={{ background: p.color }}>{p.category}</span>
                            <span className={`pj-badge pj-badge-status ${p.status === "Ongoing" ? "ongoing" : "done"}`}>
                                {p.status === "Ongoing" ? "🔄 Ongoing" : "✅ Done"}
                            </span>
                        </div>
                    </div>
                    <div className="pj-card-body">
                        <div className="pj-card-meta">
                            <span>📍 {p.location}</span>
                            <span>📅 {p.year}</span>
                        </div>
                        <h3 className="pj-card-title">{p.title}</h3>
                        <div className="pj-card-specs">
                            <div className="pj-spec-item">
                                <span className="pj-spec-val">{p.capacity}</span>
                                <span className="pj-spec-lbl">Capacity</span>
                            </div>
                            <div className="pj-spec-div" />
                            <div className="pj-spec-item">
                                <span className="pj-spec-val">{p.type}</span>
                                <span className="pj-spec-lbl">System</span>
                            </div>
                            <div className="pj-spec-div" />
                            <div className="pj-spec-item">
                                <span className="pj-spec-val" style={{ color: "#2ecc71" }}>{p.savings}</span>
                                <span className="pj-spec-lbl">Savings</span>
                            </div>
                        </div>
                        <p className="pj-flip-hint">Tap to see details →</p>
                    </div>
                </div>

                {/* BACK */}
                <div className="pj-card-back" style={{ "--accent": p.color }}>
                    <div className="pj-back-header">
                        <span className="pj-back-cat" style={{ color: p.color }}>{p.category} Project</span>
                        <h3>{p.title}</h3>
                    </div>
                    <p className="pj-back-desc">{p.desc}</p>
                    <div className="pj-back-details">
                        <div className="pj-back-row"><span>📍 Location</span><strong>{p.location}</strong></div>
                        <div className="pj-back-row"><span>⚡ Capacity</span><strong>{p.capacity}</strong></div>
                        <div className="pj-back-row"><span>🔌 System</span><strong>{p.type}</strong></div>
                        <div className="pj-back-row"><span>🪟 Panels</span><strong>{p.panels}</strong></div>
                        <div className="pj-back-row"><span>💰 Savings</span><strong style={{ color: "#2ecc71" }}>{p.savings}</strong></div>
                        <div className="pj-back-row"><span>📅 Year</span><strong>{p.year}</strong></div>
                    </div>
                    <a href="tel:+916200003061" className="pj-back-btn" onClick={e => e.stopPropagation()}>
                        Get Similar Project →
                    </a>
                    <p className="pj-flip-hint" style={{ marginTop: "12px" }}>← Tap to go back</p>
                </div>
            </div>
        </FadeUp>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pj-root" id="projects">

            {/* ══ HERO ══ */}
            <section className="pj-hero">
                <video autoPlay muted loop playsInline className="pj-bg-video" poster={IMG_HERO}>
                    <source src={VIDEO_BG} type="video/mp4" />
                </video>
                <div className="pj-overlay" />
                <div className="pj-hero-content">
                    <FadeUp><span className="pj-eyebrow">Our Projects</span></FadeUp>
                    <FadeUp delay={100}>
                        <h1 className="pj-hero-h1">
                            Real Projects.<br />
                            <span className="pj-green">Real Savings.</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={200}>
                        <p className="pj-hero-sub">
                            500+ successful solar installations across Bihar and India —
                            homes, factories, farms and beyond.
                        </p>
                    </FadeUp>
                    <FadeUp delay={300}>
                        <div className="pj-hero-btns">
                            <a href="tel:+916200003061" className="pj-btn-white">📞 Start Your Project</a>
                            <a href="#pj-grid" className="pj-btn-ghost">View Projects ↓</a>
                        </div>
                    </FadeUp>
                </div>
                <div className="pj-scroll-hint"><div className="pj-scroll-dot" /></div>
            </section>

            {/* ══ STATS ══ */}
            <section className="pj-stats-bar">
                {stats.map((s, i) => (
                    <FadeUp key={i} delay={i * 80}>
                        <div className="pj-stat">
                            <div className="pj-stat-val">{s.value}</div>
                            <div className="pj-stat-lbl">{s.label}</div>
                        </div>
                    </FadeUp>
                ))}
            </section>

            {/* ══ FILTER + GRID ══ */}
            <section className="pj-grid-sec" id="pj-grid">
                <div className="pj-container">
                    <FadeUp>
                        <div className="pj-sec-header">
                            <span className="pj-eyebrow">Portfolio</span>
                            <h2 className="pj-sec-h2">Our Solar Projects</h2>
                            <p className="pj-sec-p">Click on any project card to see full details</p>
                        </div>
                    </FadeUp>

                    {/* Filter Tabs */}
                    <FadeUp delay={100}>
                        <div className="pj-filters">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`pj-filter-btn ${filter === cat ? "active" : ""}`}
                                    onClick={() => setFilter(cat)}
                                >
                                    {cat === "All" && "⚡ "}
                                    {cat === "Residential" && "🏠 "}
                                    {cat === "Commercial" && "🏭 "}
                                    {cat === "Agriculture" && "🌾 "}
                                    {cat}
                                    <span className="pj-filter-count">
                                        {cat === "All" ? projects.length : projects.filter(p => p.category === cat).length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Cards Grid */}
                    <div className="pj-grid">
                        {filtered.map((p, i) => (
                            <ProjectCard key={p.id} p={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="pj-cta">
                <div className="pj-cta-content">
                    <FadeUp>
                        <h2 className="pj-cta-h2">Want to Be Our<br />Next Success Story?</h2>
                    </FadeUp>
                    <FadeUp delay={120}>
                        <p className="pj-cta-p">
                            Join 500+ happy customers. Get a free site survey and custom
                            proposal for your home, business or farm.
                        </p>
                    </FadeUp>
                    <FadeUp delay={240}>
                        <div className="pj-cta-btns">
                            <a href="tel:+916200003061" className="pj-btn-white">📞 Call Now</a>
                            <a href="https://wa.me/916200003061" target="_blank" rel="noreferrer" className="pj-btn-green">
                                💬 WhatsApp
                            </a>
                            <a href="mailto:hello@greenalisolar.com" className="pj-btn-ghost">✉️ Email Us</a>
                        </div>
                    </FadeUp>
                </div>
            </section>

        </div>
    );
}