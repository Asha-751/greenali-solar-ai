import { Link } from "react-router-dom";

export default function AdminDashboard() {
    const params = new URLSearchParams(window.location.search);
    const pass = params.get("pass");

    if (pass !== "greenali123") {
        return (
            <div style={{ padding: "100px", color: "red" }}>
                <h1>Access Denied</h1>
            </div>
        );
    }

    const cardStyle = {
        background: "#123524",
        color: "#fff",
        padding: "25px",
        borderRadius: "12px",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "600"
    };

    return (
        <div
            style={{
                background: "#07140d",
                minHeight: "100vh",
                color: "#fff",
                padding: "40px"
            }}
        >
            <h1>Greenali Solar Admin Panel</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "20px",
                    marginTop: "40px"
                }}
            >
                <Link to={`/admin/leads?pass=${pass}`} style={cardStyle}>
                    📋 Leads
                </Link>

                <Link to={`/admin/blogs?pass=${pass}`} style={cardStyle}>
                    📝 Blogs
                </Link>

                <Link to={`/admin/add-blog?pass=${pass}`} style={cardStyle}>
                    ➕ Add Blog
                </Link>

                <Link to={`/admin/media?pass=${pass}`} style={cardStyle}>
                    🖼 Media
                </Link>

                <Link to={`/admin/settings?pass=${pass}`} style={cardStyle}>
                    ⚙ Settings
                </Link>

                <Link to="/" style={cardStyle}>
                    🌐 Website
                </Link>
            </div>
        </div>
    );
}