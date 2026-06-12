// ── NAVBAR ABOUT LINK FIX ──
// Apne Navbar.jsx mein About Us link dhundo aur ye check karo:


// ✅ SAHI — React Router use karo:
import { Link, NavLink } from "react-router-dom";

// Option 1: NavLink (active class automatic milegi)
<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
>
  About Us
</NavLink>

// Option 2: Simple Link
<Link to="/about">About Us</Link>

// ─────────────────────────────────────────
// App.jsx mein Route check karo — ye hona chahiye:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />   {/* ← ye line honi chahiye */}
    <Route path="/products" element={<Products />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
</Routes>