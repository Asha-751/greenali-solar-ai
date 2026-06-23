import { useState } from "react";
import "../Styles/Blog.css";

const posts = [
    {
        id: 1,
        category: "AI in Solar",
        title: "How AI Is Transforming Solar Project Planning in India",
        excerpt:
            "AI-powered site assessment, smart monitoring and fault detection are changing solar project planning.",
        date: "June 5, 2026",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
        featured: true,
    },
    {
        id: 2,
        category: "Solar Cost",
        title: "5kW Solar System Cost in Bihar: Complete Guide",
        excerpt:
            "Understand pricing, installation, savings, rooftop space and subsidy support for a 5kW solar system.",
        date: "June 20, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        category: "How Solar Works",
        title: "On-Grid, Off-Grid, or Hybrid? Choosing the Right Solar System",
        excerpt:
            "A simple guide to help homes and businesses choose the right solar system.",
        date: "June 18, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 4,
        category: "Government Scheme",
        title: "PM Surya Ghar Yojana: What Homeowners Should Know",
        excerpt:
            "Learn how solar subsidy works, who can apply and what documents are required.",
        date: "June 15, 2026",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 5,
        category: "Solar Savings",
        title: "How Solar Panels Reduce Electricity Bills",
        excerpt:
            "Solar panels help reduce monthly electricity bills and improve long-term savings.",
        date: "June 12, 2026",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 6,
        category: "Maintenance",
        title: "Solar Panel Maintenance Tips for Better Performance",
        excerpt:
            "Cleaning, inspection and monitoring tips to keep solar panels performing efficiently.",
        date: "June 10, 2026",
        readTime: "3 min read",
        image:
            "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 7,
        category: "Commercial Solar",
        title: "Why Businesses Should Invest in Commercial Solar",
        excerpt:
            "Commercial solar helps companies reduce energy costs and improve sustainability.",
        date: "June 8, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1542336391-ae2936d78728?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 8,
        category: "Solar Technology",
        title: "Solar Battery Storage: Why It Matters",
        excerpt:
            "Battery storage can improve backup, energy control and reliability.",
        date: "June 4, 2026",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 9,
        category: "Local Solar",
        title: "Why Choose a Local Solar Company in Patna",
        excerpt:
            "Local support, site visits, faster service and better understanding of regional needs.",
        date: "June 1, 2026",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    },
];

const categories = ["All Posts", ...new Set(posts.map((post) => post.category))];

const tagColors = {
    "AI in Solar": { bg: "#e0f2fe", text: "#0369a1" },
    "Solar Cost": { bg: "#dcfce7", text: "#15803d" },
    "How Solar Works": { bg: "#e6f4ec", text: "#2d7a4f" },
    "Government Scheme": { bg: "#fce7f3", text: "#be185d" },
    "Solar Savings": { bg: "#fef3c7", text: "#92400e" },
    Maintenance: { bg: "#f3e8ff", text: "#7e22ce" },
    "Commercial Solar": { bg: "#ffe4e6", text: "#be123c" },
    "Solar Technology": { bg: "#dbeafe", text: "#1d4ed8" },
    "Local Solar": { bg: "#fde68a", text: "#92400e" },
};

function Tag({ category }) {
    const colors = tagColors[category] || { bg: "#f3f4f6", text: "#374151" };

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
                        Solar energy is becoming a smart investment for homes, businesses
                        and industries. With proper planning and expert installation, it can
                        reduce electricity bills and support a cleaner future.
                    </p>

                    <h2>Greenali Solar Advantage</h2>
                    <p>
                        Greenali Solar focuses on quality products, safe installation,
                        professional guidance and long-term support for better performance.
                    </p>

                    <h2>FAQs</h2>
                    <div className="article-faq">
                        <p>
                            <b>Q. Is solar good for homes?</b>
                            <br />
                            Yes, solar can reduce electricity bills and improve energy
                            independence.
                        </p>

                        <p>
                            <b>Q. Can businesses use solar?</b>
                            <br />
                            Yes, commercial solar is useful for offices, factories, schools
                            and shops.
                        </p>

                        <p>
                            <b>Q. Does Greenali Solar provide consultation?</b>
                            <br />
                            Yes, you can contact the team for site survey and guidance.
                        </p>
                    </div>

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

            <h2>Need Solar Installation?</h2>

            <p>
                Get expert guidance for residential, commercial and industrial solar
                projects.
            </p>

            <div className="benefit-box">
                <div>⚡ Save On Electricity Bills</div>
                <div>🌱 Clean & Sustainable Energy</div>
                <div>🏡 Homes, Businesses & Industries</div>
                <div>💰 Subsidy Guidance</div>
                <div>🛡️ Long-Term Performance Support</div>
                <div>📞 Free Consultation</div>
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
    const [searchTerm, setSearchTerm] = useState("");

    const featuredPost = posts.find((post) => post.featured);

    const filteredPosts = posts.filter((post) => {
        const search = searchTerm.toLowerCase();

        const matchesCategory =
            activeCategory === "All Posts" || post.category === activeCategory;

        const matchesSearch =
            post.title.toLowerCase().includes(search) ||
            post.excerpt.toLowerCase().includes(search) ||
            post.category.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });

    const normalPosts =
        activeCategory === "All Posts" && searchTerm.trim() === ""
            ? filteredPosts.filter((post) => !post.featured)
            : filteredPosts;

    return (
        <div className="blog-page" id="blog">
            {selectedPost && (
                <ArticlePopup post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}

            <header className="blog-header">
                <div className="blog-header__glow" />
                <p className="blog-header__eyebrow">Greenali Solar — Knowledge Hub</p>

                <h1 className="blog-header__title">
                    Insights on Solar Energy & Clean Future
                </h1>

                <p className="blog-header__subtitle">
                    Expert articles on solar technology, savings, subsidy, maintenance and
                    India's renewable journey.
                </p>

                <div className="blog-search">
                    <input
                        type="text"
                        placeholder="Search solar blogs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
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
                {activeCategory === "All Posts" &&
                    searchTerm.trim() === "" &&
                    featuredPost && (
                        <FeaturedPost post={featuredPost} onRead={setSelectedPost} />
                    )}

                {normalPosts.length > 0 ? (
                    <div className="posts-grid">
                        {normalPosts.map((post) => (
                            <PostCard key={post.id} post={post} onRead={setSelectedPost} />
                        ))}
                    </div>
                ) : (
                    <div className="posts-empty">
                        No posts found. Try another category or search term.
                    </div>
                )}

                <NewsletterCTA />
            </div>
        </div>
    );
}