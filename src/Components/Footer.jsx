import "../Styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col">
                    <h2 className="footer-logo">
                        GREENALI <span>SOLAR</span>
                    </h2>

                    <p>
                        Powering homes and businesses with clean,
                        affordable and sustainable solar energy solutions.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#products">Products</a>
                    <a href="#services">Services</a>
                </div>

                <div className="footer-col">
                    <h3>Explore</h3>

                    <a href="#projects">Projects</a>
                    <a href="#blog">Blog</a>
                    <a href="#why-solar">Why Solar</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>

                    <p>📞 +91 6200003061</p>
                    <p>✉️ hello@greenalisolar.com</p>
                    <p>📍 Ashok Raj Path, Mahendru, Patna</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Greenali Solar. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;