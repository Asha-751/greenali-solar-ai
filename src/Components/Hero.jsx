import sunImg from "../assets/sun.png";
import satelliteImg from "../assets/Solarinspace.png";
import "../Styles/Hero.css";
import herobg from"../assets/hero-bg.jpg.png";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Powering a <br />
          <span>Sustainable</span> <br />
          Tomorrow
        </h1>

        <p>
          High-efficiency solar solutions for homes, businesses & industries.
          Clean energy. Green future. Infinite possibilities.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">☀ Explore Solutions →</button>
          <button className="secondary-btn">📄 Get a Free Quote</button>
        </div>
      </div>
      <div className="satellite-container">
        <img
          src={satelliteImg}
          alt="Solar Satellite"
          className="satellite"
        />
      </div>

      <img src={sunImg} alt="Sun" className="hero-sun" />
      <img src={satelliteImg} alt="Solar Satellite" className="satellite" />
    </section>
  );
}

export default Hero;