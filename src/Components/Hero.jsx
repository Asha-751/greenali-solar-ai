function HomePage() {
  return (
    <section className="clean-hero" id="home">
      <div className="hero-slide slide1"></div>
      <div className="hero-slide slide2"></div>
      <div className="hero-slide slide3"></div>
      <div className="hero-slide slide4"></div>

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
          <Link to="/products" className="hero-btn">Explore Solutions</Link>
          <Link to="/contact" className="hero-btn">Get Free Quote</Link>
        </div>
      </div>
    </section>
  );
}