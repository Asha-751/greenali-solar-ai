import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import solar1 from "./assets/solar1.jpg";
import solar2 from "./assets/solar2.jpg";

import solar4 from "./assets/solar4.jpg";
import "./App.css";
import AdminLeads from "./Components/AdminLeads";
import AiChat from "./Components/AiChat";
import About from "./Components/About";
import ProductsShowcase from "./Components/Productsshowcase";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import WhySolar from "./Components/WhySolar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SplashScreen from "./Components/SplashScreen";

import logoImg from "./assets/logo.png";
import heroBg from "./assets/hero-bg.jpg.png";
import "./Styles/Productsshowcase.css";

function HomePage() {
    return (
        <section
            className="clean-hero"
            id="home"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="clean-hero-overlay"></div>

            <div className="clean-hero-content">
                <h1>
                    Powering A <br />
                    <b>Bill-Free Future</b>
                </h1>

                <p>
                    Switch to clean solar energy and save up to 90% on electricity costs
                    with Greenali Solar.
                </p>

                <div className="clean-hero-buttons">
                    <Link to="/products" className="hero-btn">
                        Explore Solutions
                    </Link>

                    <Link to="/contact" className="hero-btn">
                        Get Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <SplashScreen />

            <nav className="navbar">
                <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
                    <img src={logoImg} alt="Greenali Solar" />

                    <div>
                        <h2>GREENALI</h2>
                        <p>SOLAR</p>
                    </div>
                </Link>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/why-solar" onClick={() => setMenuOpen(false)}>Why Solar</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductsShowcase />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/why-solar" element={<WhySolar />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminLeads />} />
            </Routes>

            <Footer />
            <AiChat />
        </>
    );
}

export default App;