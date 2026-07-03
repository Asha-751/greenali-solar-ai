import React from "react";
import "../Styles/WhySolar.css";
import { Link } from "react-router-dom";
const stats = [
    { number: "25 Yrs", label: "Panel Performance Warranty" },
    { number: "₹0", label: "Electricity Bills After ROI" },
    { number: "450 GW", label: "India's Solar Target by 2030" },
    { number: "24×7", label: "O&M Support from Greenali" },
];

const reasons = [
    {
        icon: "💸",
        title: "Slash Your Electricity Bills",
        text: "A rooftop solar system typically pays for itself in 4–6 years. After that, every unit of power you generate is pure savings.",
    },
    {
        icon: "🌍",
        title: "Cut Your Carbon Footprint",
        text: "A 5 kW solar system offsets roughly 6–8 tonnes of CO₂ per year and helps reduce environmental impact.",
    },
    {
        icon: "⚡",
        title: "Energy Independence",
        text: "With solar and battery storage, your home or business runs on its own power even during outages.",
    },
    {
        icon: "📈",
        title: "Increase Property Value",
        text: "Solar-equipped properties are more attractive because buyers value energy savings and sustainability.",
    },
    {
        icon: "🏛️",
        title: "Government Subsidies",
        text: "Residential solar subsidies and net metering can reduce installation cost and improve returns.",
    },
    {
        icon: "🤖",
        title: "AI-Powered Performance",
        text: "Greenali Solar uses smart monitoring, site assessment and fault detection for better output.",
    },
];

const comparisonRows = [
    { feature: "Monthly Cost", solar: "Near zero after ROI", grid: "Rising every year" },
    { feature: "Power During Outage", solar: "With battery backup", grid: "No power" },
    { feature: "Carbon Emissions", solar: "Zero emissions", grid: "High emissions" },
    { feature: "25-Year Savings", solar: "₹5–12 lakhs avg.", grid: "₹5–12 lakhs spent" },
    { feature: "Maintenance", solar: "Minimal support", grid: "No control" },
    { feature: "Govt. Incentives", solar: "Subsidy eligible", grid: "None" },
];

const benefits = [
    {
        icon: "🔋",
        title: "Store & Use Anytime",
        desc: "Battery storage means your solar energy works at night or during power cuts.",
    },
    {
        icon: "📡",
        title: "Remote Monitoring",
        desc: "Track real-time output, savings and system health from your phone.",
    },
    {
        icon: "🏭",
        title: "Made in India",
        desc: "Greenali Solar products are ISI approved and made for Indian conditions.",
    },
    {
        icon: "🤝",
        title: "End-to-End Service",
        desc: "From site survey to commissioning and support, our team handles everything.",
    },
];

export default function WhySolar() {
    return (
        <main className="why-solar" id="why-solar">
            <section className="why-hero">
                <div className="hero__bg" />
                <div className="hero__overlay" />

                <div className="hero__content">
                    <span className="hero__eyebrow">Greenali Solar — Why Go Solar?</span>
                    <h1 className="hero__title">
                        The Sun Never Sends <span>a Bill.</span>
                    </h1>
                    <p className="hero__subtitle">
                        India gets over 300 sunny days a year. Every day is an opportunity
                        to power your home or business and protect the planet.
                    </p>
                    <Link to="/contact" className="hero__cta">
                        Get a Free Solar Quote →
                    </Link>
                </div>

                <div className="hero__scroll">
                    <div className="hero__scroll-line" />
                    Scroll
                </div>
            </section>

            <div className="stats-bar">
                <div className="stats-bar__inner">
                    {stats.map((s) => (
                        <div key={s.label} className="stat-item">
                            <div className="stat-item__number">{s.number}</div>
                            <div className="stat-item__label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="section">
                <p className="section__eyebrow">6 Reasons to Switch</p>
                <h2 className="section__title">
                    Why Solar Is the Smartest Decision You'll Make
                </h2>
                <p className="section__subtitle">
                    Whether you're a homeowner, a business, or a farmer — solar energy
                    delivers real, measurable benefits from day one.
                </p>

                <div className="reasons-grid">
                    {reasons.map((r) => (
                        <div key={r.title} className="reason-card">
                            <span className="reason-card__icon">{r.icon}</span>
                            <h3 className="reason-card__title">{r.title}</h3>
                            <p className="reason-card__text">{r.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="comparison-section">
                <div className="section comparison-inner">
                    <p className="section__eyebrow">Solar vs Grid Power</p>
                    <h2 className="section__title">The Numbers Speak for Themselves</h2>
                    <p className="section__subtitle">
                        A side-by-side look at solar versus conventional grid power.
                    </p>

                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th className="col-solar">☀️ Solar</th>
                                <th className="col-grid">⚡ Grid Power</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonRows.map((row) => (
                                <tr key={row.feature}>
                                    <td>{row.feature}</td>
                                    <td className="col-solar">{row.solar}</td>
                                    <td className="col-grid">{row.grid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="split-section">
                <div className="split-section__image">
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                        alt="Solar panels on a modern home"
                    />
                    <div className="split-section__image-overlay" />
                </div>

                <div className="split-section__body">
                    <p className="section__eyebrow">Built for India</p>
                    <h2 className="section__title">Everything You Need, Nothing You Don't</h2>

                    <ul className="benefit-list">
                        {benefits.map((b) => (
                            <li key={b.title} className="benefit-list__item">
                                <div className="benefit-list__icon">{b.icon}</div>
                                <div className="benefit-list__text">
                                    <strong>{b.title}</strong>
                                    <span>{b.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="cta-banner">
                <h2 className="cta-banner__title">Ready to Make the Switch?</h2>
                <p className="cta-banner__subtitle">
                    Join Indian homes and businesses already saving with Greenali Solar.
                </p>
                <div className="cta-banner__actions">
                    <a href="#contact" className="btn-primary">
                        Get Free Quote →
                    </a>
                    <a href="#blog" className="btn-outline">
                        Read Our Blog
                    </a>
                </div>
            </section>
        </main>
    );
}