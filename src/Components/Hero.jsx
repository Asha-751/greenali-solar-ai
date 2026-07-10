import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg.png";

function Hero() {
  return (
    <section
      className="clean-hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
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

export default Hero;