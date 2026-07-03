import "../Styles/Footer.css";
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-col footer-brand">
                    <h2 className="footer-logo">
                        GREENALI
                        <span>SOLAR</span>
                    </h2>

                    <p>
                        Powering homes, businesses and industries with clean,
                        affordable and sustainable solar energy solutions across India.
                    </p>

                    <div className="footer-social">
                        <a href="https://www.facebook.com/profile.php?id=61553228232579" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com/greenalisolar/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://x.com/GreenaliSolar" target="_blank" rel="noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>

                        <a href="https://www.linkedin.com/company/greenali-solar-private-limited/posts/?feedView=all" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a href="https://wa.me/916200003061" target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>

                        <a href="tel:+916200003061">
                            <i className="fas fa-phone"></i>
                        </a>

                        <a href="https://www.youtube.com/@GreenaliSolar" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Company */}
                <div className="footer-col">
                    <h3>Company</h3>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h3>Solar Services</h3>
                    <a href="/services">Residential Solar</a>
                    <a href="/services">Commercial Solar</a>
                    <a href="/services">Industrial Solar</a>
                    <a href="/services">Solar Maintenance</a>
                    <a href="/products">Solar Products</a>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h3>Contact Info</h3>

                    <p>
                        <strong>Phone:</strong> +91 6200003061
                    </p>

                    <p>
                        <strong>Email:</strong> Info@greenalisolar.com
                    </p>

                    <p>
                        <strong>Address:</strong> Ashok Raj Path, Mahendru,
                        Patna - 800006
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Greenali Solar Private Limited. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;