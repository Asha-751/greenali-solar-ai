import "../Styles/Loader.css";
import About from "./Components/About";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
function Loader() {
  return (
    <div className="loader-screen">

      <div className="loader-sun">
        <div className="orbit orbit1"></div>
        <div className="orbit orbit2"></div>
      </div>

      <h1>GREENALI SOLAR</h1>

      <p>Powering A Green Future...</p>

      <div className="loading-bar">
        <span></span>
      </div>

    </div>
  );
} const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loader />;
}

export default Loader;