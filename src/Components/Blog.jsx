import { useState } from "react";
import "../Styles/Blog.css";

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
            "A clear breakdown of the three solar system types — and how to decide which fits your home or business.",
        date: "May 28, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    },
    {
        id: 3,
        category: "Solar Technology",
        title: "Solar Energy Storage: Why a Battery Changes Everything",
        excerpt:
            "Store surplus power, stay protected during outages, and cut your electricity bill to near-zero.",
        date: "May 20, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
    },
];

const categories = [
    "All Posts",
    "Solar Technology",
    "How Solar Works",
    "AI in Solar",
];

const tagColors = {
    "AI in Solar": { bg: "#EEF2FF", text: "#4F46E5" },
    "How Solar Works": { bg: "#E6F4EC", text: "#2D7A4F" },
    "Solar Technology": { bg: "#FEF3C7", text: "#92400E" },
};

function Tag({ category }) {
    const colors = tagColors[category] || { bg: "#F3F4F6", text: "#374151" };

    return (
        <span className="tag" style={{ background: colors.bg, color: colors.text }}>
            {category}
        </span>
    );
}

function FeaturedPost({ post, onRead }) {
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

                <button className="featured-post__link" onClick={() => onRead(post)}>
                    Read Article →
                </button>
            </div>
        </div>
    );
}

function PostCard({ post, onRead }) {
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
                    <span>
                        {post.date} · {post.readTime}
                    </span>

                    <button className="post-card__link" onClick={() => onRead(post)}>
                        Read →
                    </button>
                </div>
            </div>
        </div>
    );
}

function ArticlePopup({ post, onClose }) {
    return (
        <div className="article-popup-overlay">
            <div className="article-popup">
                <button className="article-close" onClick={onClose}>
                    ✕
                </button>

                <img src={post.image} alt={post.title} />

                <div className="article-content">
                    <Tag category={post.category} />

                    <h1>{post.title}</h1>

                    <p className="article-meta">
                        {post.date} · {post.readTime}
                    </p>

                    <p>{post.excerpt}</p>

                    <h2>Why This Matters</h2>

                    <p>
                        Solar energy is becoming one of the smartest investments for Indian
                        homes, businesses and industries. With better technology, improved
                        planning and expert installation, customers can reduce electricity
                        bills and move towards a cleaner future.
                    </p>

                    <h2>Greenali Solar Advantage</h2>

                    <p>
                        Greenali Solar focuses on smart project planning, quality products,
                        safe installation and long-term support so every customer gets better
                        performance and reliable savings.
                    </p>

                    <div className="article-actions">
                        <a href="tel:+916200003061">📞 Call Now</a>
                        <a
                            href="https://wa.me/916200003061"
                            target="_blank"
                            rel="noreferrer"
                        >
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NewsletterCTA() {
    return (
        <div className="newsletter-cta">
            <div className="newsletter-cta__glow" />
            <p className="newsletter-cta__icon">🌞</p>

            <h2>Why Switch To Solar With Greenali?</h2>

            <p>
                Save more, consume clean energy and secure your future with smart solar
                solutions.
            </p>

            <div className="benefit-box">
                <div>⚡ Save Up To 90% On Electricity Bills</div>
                <div>🌱 Eco-Friendly & Sustainable Energy</div>
                <div>🏡 Ideal For Homes, Businesses & Industries</div>
                <div>💰 Government Subsidy Assistance</div>
                <div>🛡️ 25 Years Performance Warranty</div>
                <div>📞 Free Consultation & Site Survey</div>
            </div>

            <div className="benefit-btns">
                <a href="tel:+916200003061">📞 Call Now</a>
                <a
                    href="https://wa.me/916200003061"
                    target="_blank"
                    rel="noreferrer"
                >
                    💬 WhatsApp Us
                </a>
            </div>
        </div>
    );
}

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All Posts");
    const [selectedPost, setSelectedPost] = useState(null);

    const featuredPost = posts.find((p) => p.featured);

    const filtered =
        activeCategory === "All Posts"
            ? posts.filter((p) => !p.featured)
            : posts.filter((p) => !p.featured && p.category === activeCategory);

    return (
        <div className="blog-page" id="blog">
            {selectedPost && (
                <ArticlePopup
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}

            <header className="blog-header">
                <div className="blog-header__glow" />
                <p className="blog-header__eyebrow">Greenali Solar — Knowledge Hub</p>
                <h1 className="blog-header__title">
                    Insights on Solar Energy & Clean Future
                </h1>
                <p className="blog-header__subtitle">
                    Expert articles on solar technology, savings, AI integration, and
                    India's renewable journey.
                </p>
            </header>

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

            <div className="blog-content">
                {activeCategory === "All Posts" && featuredPost && (
                    <FeaturedPost post={featuredPost} onRead={setSelectedPost} />
                )}

                {filtered.length > 0 ? (
                    <div className="posts-grid">
                        {filtered.map((post) => (
                            <PostCard key={post.id} post={post} onRead={setSelectedPost} />
                        ))}
                    </div>
                ) : (
                    <div className="posts-empty">
                        No posts in this category yet. Check back soon!
                    </div>
                )}

                <NewsletterCTA />
            </div>
        </div>
    );
}