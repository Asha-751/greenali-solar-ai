import { useState } from "react";
import "../Styles/Blog.css";

// ── DATA ──────────────────────────────────────────────────────────────────────

const posts = [
    {
        id: 1,
        category: "AI in Solar",
        title: "How AI Is Transforming Solar Project Planning in India",
        excerpt:
            "From AI-powered site assessments using satellite imagery to real-time fault detection via IoT sensors — Greenali Solar's smart systems ensure your panels deliver maximum output every single day.",
        date: "June 5, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
        featured: true,
    },
    {
        id: 2,
        category: "How Solar Works",
        title: "On-Grid, Off-Grid, or Hybrid? Choosing the Right Solar System",
        excerpt:
            "A clear breakdown of the three solar system types — and how to decide which fits your home or business based on grid reliability, budget, and energy needs.",
        date: "May 28, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    },
    {
        id: 3,
        category: "Solar Technology",
        title: "Solar Energy Storage: Why a Battery Changes Everything",
        excerpt:
            "Store surplus power, stay protected during outages, and cut your electricity bill to near-zero. Here's how modern solar batteries work and what to look for.",
        date: "May 20, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
    },
    {
        id: 4,
        category: "Government Policy",
        title: "India's 450 GW Target: What It Means for Homeowners in 2025",
        excerpt:
            "India's renewable energy ambitions are unlocking subsidies and net metering benefits. Learn how national policy directly reduces the cost of going solar today.",
        date: "May 12, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80",
    },
    {
        id: 5,
        category: "Savings & Benefits",
        title: "Zero Electricity Bills: A Realistic Guide for Indian Households",
        excerpt:
            "Real numbers, real timelines. We walk through a typical 3–5 kW rooftop installation and show exactly when the system pays for itself.",
        date: "May 4, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
        id: 6,
        category: "Solar Technology",
        title: "What is Building-Integrated Photovoltaics (BIPV)?",
        excerpt:
            "Solar panels that replace your roof, walls, or glass — not just sit on top of them. BIPV is redefining sustainable architecture across India.",
        date: "Apr 25, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    },
    {
        id: 7,
        category: "Savings & Benefits",
        title: "Solar Water Pumps: A Game-Changer for Indian Farmers",
        excerpt:
            "Diesel costs gone. Irrigation runs day and night. Discover how solar-powered water pumps are improving yields and income for farmers across rural India.",
        date: "Apr 16, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    },
];

const categories = [
    "All Posts",
    "Solar Technology",
    "How Solar Works",
    "AI in Solar",
    "Savings & Benefits",
    "Government Policy",
];

const tagColors = {
    "AI in Solar": { bg: "#EEF2FF", text: "#4F46E5" },
    "How Solar Works": { bg: "#E6F4EC", text: "#2D7A4F" },
    "Solar Technology": { bg: "#FEF3C7", text: "#92400E" },
    "Government Policy": { bg: "#EFF6FF", text: "#1D4ED8" },
    "Savings & Benefits": { bg: "#F0FDF4", text: "#166534" },
};

// ── SUB-COMPONENTS ─────────────────────────────────────────────────────────────

function Tag({ category }) {
    const colors = tagColors[category] || { bg: "#F3F4F6", text: "#374151" };
    return (
        <span className="tag" style={{ background: colors.bg, color: colors.text }}>
            {category}
        </span>
    );
}

function FeaturedPost({ post }) {
    return (
        <div className="featured-post">
            <div className="featured-post__image-wrap">
                <img className="featured-post__img" src={post.image} alt={post.title} />
                <div className="featured-post__overlay" />
                <div className="featured-post__sun">☀️</div>
            </div>

            <div className="featured-post__body">
                <div className="featured-post__tags">
                    <Tag category={post.category} />
                    <span className="featured-badge">★ Featured</span>
                </div>

                <h2 className="featured-post__title">{post.title}</h2>

                <div className="featured-post__meta">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                </div>

                <p className="featured-post__excerpt">{post.excerpt}</p>

                <a href="#" className="featured-post__link">Read Article →</a>
            </div>
        </div>
    );
}

function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-card__thumb">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="post-card__body">
                <Tag category={post.category} />
                <h3 className="post-card__title">{post.title}</h3>
                <p className="post-card__excerpt">{post.excerpt}</p>
                <div className="post-card__footer">
                    <span>{post.date} · {post.readTime}</span>
                    <a href="#" className="post-card__link">Read →</a>
                </div>
            </div>
        </div>
    );
}

function NewsletterCTA() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            alert("Subscribed! 🎉");
            setEmail("");
        }
    };

    return (
        <div className="newsletter-cta">
            <div className="newsletter-cta__glow" />
            <p className="newsletter-cta__icon">🌞</p>
            <h3 className="newsletter-cta__title">Stay Charged with Solar Insights</h3>
            <p className="newsletter-cta__subtitle">
                Monthly articles on savings, technology, and India's clean energy future.
            </p>
            <div className="newsletter-cta__form">
                <input
                    className="newsletter-cta__input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                />
                <button className="newsletter-cta__btn" onClick={handleSubscribe}>
                    Subscribe Free
                </button>
            </div>
        </div>
    );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All Posts");

    const featuredPost = posts.find((p) => p.featured);
    const filtered =
        activeCategory === "All Posts"
            ? posts.filter((p) => !p.featured)
            : posts.filter((p) => !p.featured && p.category === activeCategory);

    return (
        <div className="blog-page">

            {/* HEADER */}
            <header className="blog-header">
                <div className="blog-header__glow" />
                <p className="blog-header__eyebrow">Greenali Solar — Knowledge Hub</p>
                <h1 className="blog-header__title">Insights on Solar Energy &amp; Clean Future</h1>
                <p className="blog-header__subtitle">
                    Expert articles on solar technology, savings, AI integration, and India's renewable journey.
                </p>
            </header>

            {/* FILTER TABS */}
            <div className="blog-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* CONTENT */}
            <div className="blog-content">

                {activeCategory === "All Posts" && featuredPost && (
                    <FeaturedPost post={featuredPost} />
                )}

                {filtered.length > 0 ? (
                    <div className="posts-grid">
                        {filtered.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="posts-empty">No posts in this category yet. Check back soon!</div>
                )}

                <NewsletterCTA />
            </div>
        </div>
    );
}