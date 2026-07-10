import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import AdminDashboard from "./Components/AdminDashboard";
import AdminLogin from "./Components/AdminLogin";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SplashScreen from "./Components/SplashScreen";
import AiChat from "./Components/AiChat";
import AdminLeads from "./Components/AdminLeads";
import "./Styles/Productsshowcase.css";
import About from "./Components/About";
import ProductsShowcase from "./Components/Productsshowcase";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import WhySolar from "./Components/WhySolar";
import Contact from "./Components/Contact";

function App() {
    return (
        <>
            <SplashScreen />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductsShowcase />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/why-solar" element={<WhySolar />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminLeads />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>

            <Footer />
            <AiChat />
        </>
    );
}

export default App;