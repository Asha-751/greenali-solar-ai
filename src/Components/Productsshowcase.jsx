import { useState, useEffect, useCallback, useRef } from "react";

const PRODUCTS = [
    {
        id: 0,
        num: "PRODUCT 01 / 08",
        tag: "High Efficiency · ISI Approved · Made in India",
        title: "SOLAR",
        titleEm: "PANEL",
        desc: "Monocrystalline panels engineered for India's climate — high output in both peak sun and diffused light conditions.",
        specs: [
            { val: "25yr", label: "Warranty" },
            { val: "22%", label: "Efficiency" },
            { val: "ISI", label: "Approved" },
        ],
        badge: "🇮🇳 Made in India",
        photo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
        alt: "Solar panels",
        slideClass: "ps-slide-0",
    },
    {
        id: 1,
        num: "PRODUCT 02 / 08",
        tag: "Lithium Storage · Deep Cycle · Smart BMS",
        title: "SOLAR",
        titleEm: "BATTERY",
        desc: "Advanced lithium deep-cycle battery storage for maximum energy independence.",
        specs: [
            { val: "10yr", label: "Warranty" },
            { val: "6000+", label: "Cycles" },
            { val: "95%", label: "Efficiency" },
        ],
        badge: "⚡ Smart BMS Included",
        photo: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80",
        alt: "Solar battery",
        slideClass: "ps-slide-1",
    },
    {
        id: 2,
        num: "PRODUCT 03 / 08",
        tag: "Smart MPPT · Grid Tie · Real-Time Monitoring",
        title: "SOLAR",
        titleEm: "INVERTER",
        desc: "Intelligent MPPT inverters that convert DC solar power to AC with 97%+ efficiency.",
        specs: [
            { val: "97%", label: "Efficiency" },
            { val: "MPPT", label: "Technology" },
            { val: "WiFi", label: "Enabled" },
        ],
        badge: "📱 App Monitoring",
        photo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
        alt: "Solar inverter",
        slideClass: "ps-slide-2",
    },
    {
        id: 3,
        num: "PRODUCT 04 / 08",
        tag: "Hot-Dip Galvanized · Wind Resistant",
        title: "SOLAR",
        titleEm: "STRUCTURE",
        desc: "Strong mounting structures compatible with flat, sloped, tin, and RCC rooftops.",
        specs: [
            { val: "25yr", label: "Life" },
            { val: "150+", label: "km/h Wind" },
            { val: "All", label: "Roof Types" },
        ],
        badge: "🔩 Corrosion-Free",
        photo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
        alt: "Solar structure",
        slideClass: "ps-slide-3",
    },
    {
        id: 4,
        num: "PRODUCT 05 / 08",
        tag: "AI Scheduled · Zero Water · Robotic",
        title: "AUTO PANEL",
        titleEm: "CLEANER",
        desc: "Robotic cleaning system with AI-scheduled dry-clean cycles.",
        specs: [
            { val: "+30%", label: "Output Gain" },
            { val: "Zero", label: "Water Used" },
            { val: "Auto", label: "Schedule" },
        ],
        badge: "🤖 AI Auto-Schedule",
        photo: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
        alt: "Solar cleaner",
        slideClass: "ps-slide-4",
    },
    {
        id: 5,
        num: "PRODUCT 06 / 08",
        tag: "DC Solar · Agriculture · Remote Areas",
        title: "SOLAR WATER",
        titleEm: "PUMP",
        desc: "DC solar pumps for Indian agriculture and rural water supply.",
        specs: [
            { val: "₹0", label: "Running Cost" },
            { val: "15yr", label: "Life" },
            { val: "Deep", label: "Bore Compatible" },
        ],
        badge: "🌾 Agriculture Ready",
        photo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80",
        alt: "Solar pump",
        slideClass: "ps-slide-5",
    },
    {
        id: 6,
        num: "PRODUCT 07 / 08",
        tag: "Domestic · Street · Auto On/Off",
        title: "SOLAR",
        titleEm: "LIGHTS",
        desc: "Solar indoor, outdoor, street and security lighting solutions.",
        specs: [
            { val: "Auto", label: "Dusk/Dawn" },
            { val: "₹0", label: "Electricity Bill" },
            { val: "IP65", label: "Waterproof" },
        ],
        badge: "💡 Zero Wiring Needed",
        photo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
        alt: "Solar lights",
        slideClass: "ps-slide-6",
    },
    {
        id: 7,
        num: "PRODUCT 08 / 08",
        tag: "Distribution Board · Protection · Safety",
        title: "SOLAR",
        titleEm: "DB PANEL",
        desc: "Solar Distribution Boards with surge protection, MCBs and fuse protection.",
        specs: [
            { val: "IP54", label: "Protection" },
            { val: "SPD", label: "Surge Guard" },
            { val: "MCB", label: "Included" },
        ],
        badge: "🛡️ IP54 Protected",
        photo: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
        alt: "DB panel",
        slideClass: "ps-slide-7",
    },
];

const TOTAL = PRODUCTS.length;

export default function ProductsShowcase() {
    const [current, setCurrent] = useState(0);
    const [blocking, setBlocking] = useState(false);
    const lastWheelRef = useRef(0);
    const touchStartRef = useRef(0);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const goTo = useCallback(
        (index) => {
            if (blocking || index < 0 || index >= TOTAL) return;
            setBlocking(true);
            setCurrent(index);
            setTimeout(() => setBlocking(false), 800);
        },
        [blocking]
    );

    const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
    const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

    useEffect(() => {
        const onWheel = (e) => {
            const now = Date.now();
            if (now - lastWheelRef.current < 800) return;

            lastWheelRef.current = now;
            if (e.deltaY > 0) goNext();
            else goPrev();
        };

        window.addEventListener("wheel", onWheel, { passive: true });
        return () => window.removeEventListener("wheel", onWheel);
    }, [goNext, goPrev]);

    useEffect(() => {
        const onStart = (e) => {
            touchStartRef.current = e.touches[0].clientY;
        };

        const onEnd = (e) => {
            const diff = touchStartRef.current - e.changedTouches[0].clientY;
            if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
        };

        window.addEventListener("touchstart", onStart, { passive: true });
        window.addEventListener("touchend", onEnd, { passive: true });

        return () => {
            window.removeEventListener("touchstart", onStart);
            window.removeEventListener("touchend", onEnd);
        };
    }, [goNext, goPrev]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
            if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev]);

    const progressPct = ((current + 1) / TOTAL) * 100;

    return (
        <section id="products" className="ps-wrapper">
            <div className="ps-track">
                {PRODUCTS.map((p) => (
                    <div
                        key={p.id}
                        className={`ps-slide ${p.slideClass} ${p.id === current ? "active" : ""
                            }`}
                    >
                        <div className="ps-content">
                            <div className="ps-num">{p.num}</div>
                            <div className="ps-tag">{p.tag}</div>

                            <div className="ps-title">
                                {p.title}
                                <em>{p.titleEm}</em>
                            </div>

                            <div className="ps-desc">{p.desc}</div>

                            <div className="ps-specs">
                                {p.specs.map((s) => (
                                    <div key={s.label} className="ps-spec">
                                        <div className="ps-spec-val">{s.val}</div>
                                        <div className="ps-spec-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="product-buttons">
                                <button
                                    className="product-order-btn"
                                    onClick={() => scrollToSection("contact")}
                                >
                                    Order Now
                                </button>

                                <button
                                    className="product-learn-btn"
                                    onClick={() => scrollToSection("about")}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="ps-visual">
                            <div className="ps-photo-wrap">
                                <img
                                    className="ps-photo"
                                    src={p.photo}
                                    alt={p.alt}
                                    loading={p.id === 0 ? "eager" : "lazy"}
                                />
                                <div className="ps-photo-overlay" />
                                <div className="ps-badge">{p.badge}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ps-side-nav">
                {PRODUCTS.map((p) => (
                    <button
                        key={p.id}
                        className={`ps-dot ${p.id === current ? "active" : ""}`}
                        onClick={() => goTo(p.id)}
                    />
                ))}
            </div>

            <div className="ps-counter">
                <div className="ps-counter-current">
                    {String(current + 1).padStart(2, "0")}
                </div>
                <div className="ps-counter-total">/ 0{TOTAL} Products</div>
            </div>

            <button className="ps-arrow ps-arrow-prev" onClick={goPrev} disabled={current === 0}>
                ↑
            </button>

            <button className="ps-arrow ps-arrow-next" onClick={goNext} disabled={current === TOTAL - 1}>
                ↓
            </button>

            <div className={`ps-scroll-hint ${current > 0 ? "hidden" : ""}`}>
                <span>Scroll to explore</span>
                <span className="ps-scroll-arrow">↓</span>
            </div>

            <div className="ps-progress" style={{ width: `${progressPct}%` }} />
        </section>
    );
}