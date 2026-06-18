import "./BlogDetails.css";

export default function BlogDetails() {
  return (
    <div className="blog-details">

      <div className="blog-hero">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600"
          alt="Solar AI"
        />
      </div>

      <div className="blog-content">
        <span>AI IN SOLAR • June 5, 2025</span>

        <h1>
          How AI Is Transforming Solar Project Planning In India
        </h1>

        <p>
          Artificial Intelligence is revolutionizing the solar industry by
          improving site assessment, energy forecasting, fault detection,
          maintenance planning and overall system efficiency.
        </p>

        <h2>Smart Site Assessment</h2>

        <p>
          AI-powered satellite imagery helps engineers identify the most
          efficient locations for solar installations. This reduces planning
          time and improves energy generation.
        </p>

        <img
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600"
          alt="Solar Technology"
        />

        <h2>Predictive Maintenance</h2>

        <p>
          AI continuously monitors solar panels and inverters, detecting issues
          before they become serious problems. This minimizes downtime and
          increases energy output.
        </p>

        <h2>Future Of Solar In India</h2>

        <p>
          With AI, IoT and advanced analytics, Greenali Solar is helping
          businesses and homeowners maximize savings while supporting India's
          clean energy goals.
        </p>
      </div>
    </div>
  );
}