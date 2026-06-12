import { useState } from "react";

import "./App.css";
import "./Styles/Productsshowcase.css";
import AiChat from "./Components/AiChat";
import About from "./Components/About";
import ProductsShowcase from "./Components/Productsshowcase";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import WhySolar from "./Components/WhySolar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SplashScreen from "./Components/SplashScreen";
import logoImg from "./assets/logo.png";

import heroBg from "./assets/hero-bg.jpg.png";
import AdminLeads from "./components/AdminLeads";
function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>

            <SplashScreen />
            <section
                className="hero"
                id="home"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="top-bar">
                    <p><span className="tagline">
                        🌞 Switch To Solar & Save Up To 90% On Electricity Costs
                    </span></p>
                    <button className="translator">🌐 Translator</button>
                </div>

                <nav className="navbar">
                    <div className="brand">
                        <img src={logoImg} alt="Greenali Solar" />
                        <div>
                            <h2>GREENALI</h2>
                            <p>SOLAR</p>
                        </div>
                    </div>

                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "✕" : "☰"}
                    </div>

                    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <li onClick={() => scrollTo("home")}>Home</li>
                        <li onClick={() => scrollTo("about")}>About Us</li>
                        <li onClick={() => scrollTo("products")}>Products</li>
                        <li onClick={() => scrollTo("services")}>Services</li>
                        <li onClick={() => scrollTo("projects")}>Projects</li>
                        <li onClick={() => scrollTo("blog")}>Blog</li>
                        <li onClick={() => scrollTo("why-solar")}>Why Solar</li>
                        <li onClick={() => scrollTo("contact")}>Contact Us</li>
                    </ul>
                    <div className="mega-menu">
                        <div className="mega-left">
                            <div className="mega-card">
                                <img src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=500" />
                                <h3>Solar Panels</h3>
                                <p>Learn</p>
                            </div>

                            <div className="mega-card">
                                <img src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=500" />
                                <h3>Solar Inverter</h3>
                                <p>Learn</p>
                            </div>

                            <div className="mega-card">
                                <img src="https://images.pexels.com/photos/9799716/pexels-photo-9799716.jpeg?auto=compress&cs=tinysrgb&w=500" />
                                <h3>Solar Battery</h3>
                                <p>Learn</p>
                            </div>

                            <div className="mega-card">
                                <img src="https://images.pexels.com/photos/9799720/pexels-photo-9799720.jpeg?auto=compress&cs=tinysrgb&w=500" />
                                <h3>Solar Pump</h3>
                                <p>Learn</p>
                            </div>
                        </div>

                        <div className="mega-right">
                            <p>Get Free Quote</p>
                            <p>Subsidy Help</p>
                            <p>EMI Available</p>
                            <p>Contact Expert</p>
                        </div>
                    </div>
                </nav>

                <div className="hero-content">
                    <span className="tagline">✹ Smart Solar Energy Solutions</span>



                    <p>
                        <h1>
                            Powering A <br />
                            <span>Bill-Free Future</span>
                        </h1>
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => scrollTo("products")}>
                            Explore Solutions →
                        </button>
                        <button className="btn-secondary" onClick={() => scrollTo("contact")}>
                            Get Free Quote
                        </button>
                    </div>
                </div>



                <div className="global-ai-bot">
                    <div className="bot-bubble">Hi! Need Solar Help?</div>

                    <div className="robot-body">
                        <div className="robot-head">🤖</div>
                        <div className="robot-chest">AI</div>
                    </div>
                </div>
            </section>

            <ProductsShowcase />
            <About />
            <Services />
            <Project />

            <div id="blog">
                <Blog />
            </div>

            <WhySolar />
            <Contact />
            <Footer />
            <AiChat />
            <AdminLeads />
            <div className="global-ai-bot">


                <span className="particle" style={{ left: "12%", top: "35%" }}></span>
                <span className="particle" style={{ left: "45%", top: "28%", animationDelay: ".8s" }}></span>
                <span className="particle" style={{ left: "72%", top: "55%", animationDelay: "1.4s" }}></span>
                <span className="particle" style={{ left: "88%", top: "40%", animationDelay: "2s" }}></span>

            </div>

            <button className="scroll-top-btn" onClick={() => scrollTo("home")}>
                ↑
            </button>


        </>
    );
}

export default App;