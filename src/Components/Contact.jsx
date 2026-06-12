import { useState } from "react";
import "../Styles/Contact.css";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "Patna",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
            } else {
                alert("Form submit failed");
            }
        } catch (error) {
            console.log("CONTACT ERROR:", error);
            alert("Backend not connected");
        }

        setLoading(false);
    };

    return (
        <main className="contact-page" id="contact">
            <section className="contact-hero">
                <div className="contact-hero__glow"></div>
                <p className="contact-hero__eyebrow">Greenali Solar — Contact Us</p>
                <h1 className="contact-hero__title">Let’s Power Your Future Together</h1>
                <p className="contact-hero__subtitle">
                    Get a free solar consultation for your home, business or farm.
                </p>
            </section>

            <section className="contact-body">
                <div className="contact-left">
                    <p className="contact-left__eyebrow">GET IN TOUCH</p>
                    <h2 className="contact-left__title">Request Your Free Solar Quote</h2>
                    <p className="contact-left__desc">
                        Fill the form and our solar expert will contact you within 24 hours.
                    </p>

                    <div className="info-item">
                        <span className="info-item__icon">📞</span>
                        <p>+91 6200003061</p>
                    </div>

                    <div className="info-item">
                        <span className="info-item__icon">✉️</span>
                        <p>hello@greenalisolar.com</p>
                    </div>

                    <div className="info-item">
                        <span className="info-item__icon">📍</span>
                        <p>Ashok Raj Path, Mahendru, Patna – 800006</p>
                    </div>
                </div>

                <div className="contact-form-card">
                    {submitted ? (
                        <div className="form-success">
                            <div className="form-success__icon">🎉</div>
                            <h3>Request Received!</h3>
                            <p>Thank you for contacting Greenali Solar.</p>
                            <p>Our team will contact you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <input
                                name="city"
                                type="text"
                                placeholder="City / State"
                                value={formData.city}
                                onChange={handleChange}
                            />

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Service</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Installation">Installation</option>
                                <option value="Maintenance">Maintenance</option>
                                <option value="Upgrades">Upgrades</option>
                            </select>

                            <textarea
                                name="message"
                                placeholder="Tell us your requirement"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                            <button type="submit">
                                {loading ? "Submitting..." : "Request Free Quote →"}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
}