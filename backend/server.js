require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Greenali Solar Backend Running 🚀");
});

/* AI CHAT */
app.post("/ask", (req, res) => {
    const q = (req.body.question || "").toLowerCase();
    let answer = "Namaste! Main Greenali Solar AI Advisor hoon.";
    if (q.includes("cost") || q.includes("price") || q.includes("kitna")) {
        answer = "Solar cost system size, roof area aur electricity bill par depend karta hai.";
    } else if (q.includes("subsidy")) {
        answer = "Residential rooftop solar par government subsidy mil sakti hai.";
    } else if (q.includes("installation") || q.includes("install")) {
        answer = "Greenali Solar residential, commercial aur industrial solar installation provide karta hai.";
    } else if (q.includes("maintenance") || q.includes("service")) {
        answer = "Hum solar panel cleaning, inverter checking aur maintenance support provide karte hain.";
    } else if (q.includes("battery") || q.includes("backup")) {
        answer = "Battery backup ke liye hybrid solar system best hota hai.";
    } else if (q.includes("contact") || q.includes("phone")) {
        answer = "Greenali Solar Contact: +91 6200003061 | Email: info@greenalisolar.com";
    }
    res.json({ answer });
});

/* CONTACT FORM */
app.post("/api/contact", async (req, res) => {
    try {
        const filePath = path.join(__dirname, "leads.json");
        let leads = [];
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf-8");
            if (fileData.trim()) leads = JSON.parse(fileData);
        }

        const newLead = {
            id: Date.now(),
            name: req.body.name || "",
            phone: req.body.phone || "",
            email: req.body.email || "",
            city: req.body.city || "",
            service: req.body.service || "",
            message: req.body.message || "",
            createdAt: new Date().toLocaleString(),
        };

        leads.push(newLead);
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
        console.log("📩 New Lead:", newLead);

        const { error } = await resend.emails.send({
            from: "Greenali Solar <onboarding@resend.dev>",
            to: process.env.RECEIVER_EMAIL,
            subject: "🌞 New Contact Form Inquiry",
            html: `
                <div style="font-family:Arial;padding:20px;">
                    <h2 style="color:#128a2e;">New Lead Received</h2>
                    <p><b>Name:</b> ${newLead.name}</p>
                    <p><b>Phone:</b> ${newLead.phone}</p>
                    <p><b>Email:</b> ${newLead.email}</p>
                    <p><b>City:</b> ${newLead.city}</p>
                    <p><b>Service:</b> ${newLead.service}</p>
                    <p><b>Message:</b> ${newLead.message}</p>
                    <hr/>
                    <p><b>Date:</b> ${newLead.createdAt}</p>
                </div>
            `,
        });

        if (error) {
            console.error("❌ Resend Error:", error);
            return res.status(500).json({ success: false, message: error.message });
        }

        console.log("✅ Email Sent via Resend");
        res.json({ success: true, message: "Email sent successfully" });

    } catch (error) {
        console.error("❌ Contact Form Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
});

/* GET ALL LEADS */
app.get("/api/leads", (req, res) => {
    const filePath = path.join(__dirname, "leads.json");
    if (!fs.existsSync(filePath)) return res.json([]);
    const fileData = fs.readFileSync(filePath, "utf-8");
    if (!fileData.trim()) return res.json([]);
    res.json(JSON.parse(fileData));
});

/* START SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});