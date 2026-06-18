import "../Styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col footer-brand">
                    <h2 className="footer-logo">
                        GREENALI <span>SOLAR</span>
                    </h2>

                    <p>
                        Powering homes, businesses and industries with clean, affordable
                        and sustainable solar energy solutions across India.
                    </p>

                    <div className="social-icons">
                        <a className="fb" href="https://www.facebook.com/profile.php?id=61553228232579" target="_blank" rel="noreferrer">f</a>
                        <a className="ig" href="https://www.instagram.com/greenalisolar/" target="_blank" rel="noreferrer">◎</a>
                        <a className="tw" href="https://x.com/GreenaliSolar_" target="_blank" rel="noreferrer">𝕏</a>
                        <a className="ln" href="https://www.linkedin.com/company/greenali-solar-private-limited/posts/?feedView=all" target="_blank" rel="noreferrer">in</a>
                        <a className="wa" href="https://wa.me/916200003061" target="_blank" rel="noreferrer">☏</a>
                        <a className="yt" href="https://www.youtube.com/@GreenaliSolar" target="_blank" rel="noreferrer">▶</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Company</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-col">
                    <h3>Solar Services</h3>
                    <a href="#services">Residential Solar</a>
                    <a href="#services">Commercial Solar</a>
                    <a href="#services">Industrial Solar</a>
                    <a href="#services">Solar Maintenance</a>
                    <a href="#products">Solar Products</a>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <p><strong>Phone:</strong> +91 6200003061</p>
                    <p><strong>Email:</strong> <a href="mailto:Info@greenalisolar.com">Info@greenalisolar.com</a></p>
                    <p><strong>Address:</strong> Ashok Raj Path, Mahendru, Patna - 800006</p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Greenali Solar Private Limited. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;