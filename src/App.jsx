import { useState } from "react";
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
;
function App() {

    const [menuOpen, setMenuOpen] = useState(false);
    if (window.location.pathname === "/admin") {
        return <AdminLeads />;
    }
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <SplashScreen />

            <nav className="navbar">
                <div className="brand" onClick={() => scrollTo("home")}>
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
                    <li onClick={() => scrollTo("about")}>About</li>
                    <li onClick={() => scrollTo("products")}>Products</li>
                    <li onClick={() => scrollTo("services")}>Services</li>
                    <li onClick={() => scrollTo("blog")}>Blog</li>
                    <li onClick={() => scrollTo("why-solar")}>Why Solar</li>
                    <li onClick={() => scrollTo("contact")}>Contact</li>
                </ul>
            </nav>

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
                        <button onClick={() => scrollTo("products")}>
                            Explore Solutions
                        </button>
                        <button onClick={() => scrollTo("contact")}>
                            Get Free Quote
                        </button>
                    </div>
                </div>
            </section>

            <ProductsShowcase />
            <About />
            <Services />

            <div id="blog">
                <Blog />
            </div>

            <WhySolar />
            <Contact />
            <Footer />

            <AiChat />

        </>
    );
}

export default App;