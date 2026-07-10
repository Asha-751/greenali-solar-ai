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
            "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
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

// Frequently asked questions shown in the FAQ accordion
const faqs = [
    {
        q: "How much does a rooftop solar system cost in India?",
        a: "Cost depends on system size, brand, subsidy eligibility and rooftop type. Our team gives a free, no-obligation quote after a quick site or virtual assessment.",
    },
    {
        q: "Am I eligible for the PM Surya Ghar Yojana subsidy?",
        a: "Most residential homeowners with a valid electricity connection are eligible. Eligibility depends on rooftop area, sanctioned load and discom guidelines, which our team can check for you.",
    },
    {
        q: "How long does solar installation usually take?",
        a: "A typical residential rooftop system is installed within 5-10 working days after approvals, while larger commercial systems may take longer depending on scale.",
    },
    {
        q: "Do solar panels work well during monsoon or cloudy days?",
        a: "Yes, panels still generate power on cloudy days, though output is lower than on sunny days. Proper system sizing and battery backup help maintain reliability.",
    },
    {
        q: "What maintenance does a solar system need?",
        a: "Routine cleaning and periodic inspection keep panels performing well. Most systems need minimal upkeep, and Greenali Solar offers ongoing performance support.",
    },
];

function Tag({ category }) {
    const colors = tagColors[category] || { bg: "#f3f4f6", text: "#374151" };

    return (
        <div className="gs-pbmyof" style={{ background: colors.bg, color: colors.text }}>
            {category}
        </div>
    );
}

function FeaturedPost({ post, onRead }) {
    return (
        <div className="gs-uzfk8u">
            <div className="gs-ie6ivw">
                <img className="gs-pvs7hz" src={post.image} alt={post.title} />
                <div className="gs-j755nf" />
                <div className="gs-4zw9xa">☀️</div>
            </div>

            <div className="gs-t0cvs4">
                <div className="gs-3kx7ee">
                    <Tag category={post.category} />
                    <div className="gs-j2qp89">★ Featured</div>
                </div>

                <div className="gs-dtjvzh">{post.title}</div>

                <div className="gs-cq99ch">
                    <div>📅 {post.date}</div>
                    <div>⏱ {post.readTime}</div>
                </div>

                <div className="gs-f8cgvy">{post.excerpt}</div>

                <div className="gs-ioykl1" onClick={() => onRead(post)}>
                    Read Article →
                </div>
            </div>
        </div>
    );
}

function PostCard({ post, onRead }) {
    return (
        <div className="gs-agl58k">
            <div className="gs-0yncxl">
                <img src={post.image} alt={post.title} />
            </div>

            <div className="gs-xo9t7e">
                <Tag category={post.category} />
                <div className="gs-l4zklo">{post.title}</div>
                <div className="gs-8g8jdp">{post.excerpt}</div>

                <div className="gs-0lvsnu">
                    <div>
                        {post.date} · {post.readTime}
                    </div>

                    <div className="gs-jza7tz" onClick={() => onRead(post)}>
                        Read →
                    </div>
                </div>
            </div>
        </div>
    );
}

function ArticlePopup({ post, onClose }) {
    return (
        <div className="gs-3w5uzb">
            <div className="gs-30t9nt">
                <div className="gs-ahxthv" onClick={onClose}>
                    ✕
                </div>

                <img src={post.image} alt={post.title} />

                <div className="gs-3a3zmf">
                    <Tag category={post.category} />
                    <div style={{ fontSize: 42, margin: "18px 0", fontWeight: 900 }}>{post.title}</div>

                    <div className="gs-8mdd4v">
                        {post.date} · {post.readTime}
                    </div>

                    <div>{post.excerpt}</div>

                    <div style={{ color: "#39ff14", marginTop: 28, fontSize: 22, fontWeight: 800 }}>Why This Matters</div>
                    <div>
                        Solar energy is becoming a smart investment for homes, businesses
                        and industries. With proper planning and expert installation, it can
                        reduce electricity bills and support a cleaner future.
                    </div>

                    <div style={{ color: "#39ff14", marginTop: 28, fontSize: 22, fontWeight: 800 }}>Greenali Solar Advantage</div>
                    <div>
                        Greenali Solar focuses on quality products, safe installation,
                        professional guidance and long-term support for better performance.
                    </div>

                    <div style={{ color: "#39ff14", marginTop: 28, fontSize: 22, fontWeight: 800 }}>FAQs</div>
                    <div className="gs-x9f2qz">
                        <div>
                            <b>Q. Is solar good for homes?</b>
                            <br />
                            Yes, solar can reduce electricity bills and improve energy
                            independence.
                        </div>

                        <div>
                            <b>Q. Can businesses use solar?</b>
                            <br />
                            Yes, commercial solar is useful for offices, factories, schools
                            and shops.
                        </div>

                        <div>
                            <b>Q. Does Greenali Solar provide consultation?</b>
                            <br />
                            Yes, you can contact the team for site survey and guidance.
                        </div>
                    </div>

                    <div className="gs-6dpbhs">
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

function Sidebar({ activeCategory, onSelectCategory, popularPosts, onRead }) {
    return (
        <div className="gs-a753lc">
            <div className="gs-puxqph">
                <div className="gs-wm31yi">Categories</div>
                <div className="gs-xa11dp">
                    {categories.map((cat) => (
                        <div
                            key={cat}
                            className={`gs-owgzri ${activeCategory === cat ? "gs-xaji0y" : ""
                                }`}
                            onClick={() => onSelectCategory(cat)}
                        >
                            <div>{cat}</div>
                            <div className="gs-hair4c">
                                {cat === "All Posts"
                                    ? posts.length
                                    : posts.filter((p) => p.category === cat).length}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="gs-puxqph">
                <div className="gs-wm31yi">Popular Posts</div>
                <div className="gs-zcotoh">
                    {popularPosts.map((post) => (
                        <div key={post.id} className="gs-60rjiw" onClick={() => onRead(post)}>
                            <img src={post.image} alt={post.title} />
                            <div>
                                <div className="gs-jlteiy">{post.title}</div>
                                <div className="gs-1swjck">{post.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="gs-puxqph gs-r62gds">
                <div className="gs-q2y9v8">☀️</div>
                <div className="gs-wm31yi">Get a Free Solar Quote</div>
                <div className="gs-6wzs3t">
                    Talk to our experts about savings, subsidy and installation.
                </div>
                <a href="tel:+916200003061" className="gs-g8sbi4">
                    📞 Call Now
                </a>
            </div>
        </div>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const [question, setQuestion] = useState("");

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    const askOnWhatsApp = () => {
        const trimmed = question.trim();
        if (!trimmed) return;
        const text = encodeURIComponent(`Hi Greenali Solar, I have a question: ${trimmed}`);
        window.open(`https://wa.me/919122789990?text=${text}`, "_blank", "noreferrer");
        setQuestion("");
    };

    return (
        <div className="gs-0y9dom">
            <div className="gs-i7p5tb" />

            <div className="gs-94874f">
                <div className="gs-5igqpk">Got Doubts?</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "white", margin: "0 0 12px" }}>Frequently Asked Questions</div>
                <div className="gs-rhocn9">
                    Answers to common solar questions. Don't see yours? Ask us anything below.
                </div>
            </div>

            <div className="gs-3gdppq">
                {faqs.map((item, idx) => (
                    <div
                        key={item.q}
                        className={`gs-9xpsei ${openIndex === idx ? "gs-i3qk2i" : ""}`}
                    >
                        <div className="gs-he7ur2" onClick={() => toggle(idx)}>
                            <div>{item.q}</div>
                            <div className="gs-i64ciy">{openIndex === idx ? "−" : "+"}</div>
                        </div>

                        {openIndex === idx && (
                            <div className="gs-mvihcw">{item.a}</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="gs-1ertj5">
                <div style={{ fontSize: 18, fontWeight: 900, color: "white", margin: "0 0 8px" }}>Have a different question?</div>
                <div>Type it below — we'll answer you directly on WhatsApp.</div>

                <div className="gs-pht0hl">
                    <input
                        type="text"
                        placeholder="e.g. Can I install solar on a tin roof?"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && askOnWhatsApp()}
                    />
                    <div onClick={askOnWhatsApp} style={{ cursor: "pointer" }}>💬 Ask on WhatsApp</div>
                </div>
            </div>
        </div>
    );
}

function NewsletterCTA() {
    return (
        <div className="gs-6t4ufe">
            <div className="gs-id25ow" />
            <div className="gs-f75935">🌞</div>

            <div style={{ fontSize: 30, color: "#fff", marginBottom: 10, fontWeight: 900 }}>Need Solar Installation?</div>

            <div>
                Get expert guidance for residential, commercial and industrial solar
                projects.
            </div>
            <div className="gs-ikcidk">

                <a href="/contact" className="gs-wnnhj7">
                    ⚡ Save On Electricity Bills
                </a>

                <a href="/why-solar" className="gs-wnnhj7">
                    🌱 Clean & Sustainable Energy
                </a>

                <a href="/products" className="gs-wnnhj7">
                    🏠 Homes, Businesses & Industries
                </a>

                <a href="/contact" className="gs-wnnhj7">
                    💰 Subsidy Guidance
                </a>

                <a href="/services" className="gs-wnnhj7">
                    🛡 Long-Term Performance Support
                </a>

                <a href="tel:+916200003061" className="gs-wnnhj7">
                    📞 Free Consultation
                </a>

            </div>
            <div className="gs-nam148">
                <a
                    href="tel:+916200003061"
                    className="gs-p6vz41"
                >
                    📞 Call Now
                </a>

                <a
                    href="https://wa.me/916200003061"
                    target="_blank"
                    rel="noreferrer"
                    className="gs-p6vz41"
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
    const popularPosts = posts.slice(0, 4);

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
        <div className="gs-65kxvf" id="blog">
            {selectedPost && (
                <ArticlePopup post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}

            <div className="gs-jiujv6">
                <div className="gs-dw2pcn" />
                <div className="gs-oh9sdb">Greenali Solar — Knowledge Hub</div>

                <div className="gs-ytjxep">
                    Insights on Solar Energy & Clean Future
                </div>

                <div className="gs-9t84az">
                    Expert articles on solar technology, savings, subsidy, maintenance and
                    India's renewable journey.
                </div>

                <div className="gs-1t2tal">
                    <input
                        type="text"
                        placeholder="Search solar blogs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="gs-ibljh7 gs-5lxo6q">
                {categories.map((cat) => (
                    <div
                        key={cat}
                        className={`gs-wjr64d ${activeCategory === cat ? "gs-xaji0y" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </div>
                ))}
            </div>

            <div className="gs-q85jsg">
                <div className="gs-9xuy41">
                    {activeCategory === "All Posts" &&
                        searchTerm.trim() === "" &&
                        featuredPost && (
                            <FeaturedPost post={featuredPost} onRead={setSelectedPost} />
                        )}

                    {normalPosts.length > 0 ? (
                        <div className="gs-6wktak">
                            {normalPosts.map((post) => (
                                <PostCard key={post.id} post={post} onRead={setSelectedPost} />
                            ))}
                        </div>
                    ) : (
                        <div className="gs-okep7y">
                            No posts found. Try another category or search term.
                        </div>
                    )}
                </div>

                <Sidebar
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                    popularPosts={popularPosts}
                    onRead={setSelectedPost}
                />
            </div>

            <div className="gs-xvg0fn">
                <FAQSection />
                <NewsletterCTA />
            </div>
        </div>
    );
}