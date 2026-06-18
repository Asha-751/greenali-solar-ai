const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Greenali Solar Backend Running 🚀");
});

app.post("/ask", (req, res) => {
    const q = (req.body.question || "").toLowerCase();

    let answer =
        "Namaste! Main Greenali Solar AI Advisor hoon. Aap solar cost, subsidy, installation, maintenance, battery backup ya contact ke baare me pooch sakte hain.";

    if (q.includes("cost") || q.includes("price") || q.includes("kitna")) {
        answer =
            "Solar cost system size, roof area aur electricity bill par depend karta hai. Exact quote ke liye Greenali Solar free consultation provide karta hai.";
    } else if (q.includes("subsidy")) {
        answer =
            "Residential rooftop solar par government subsidy mil sakti hai. Greenali Solar subsidy process aur documentation me help karta hai.";
    } else if (q.includes("installation") || q.includes("install")) {
        answer =
            "Greenali Solar residential, commercial aur industrial solar installation provide karta hai.";
    } else if (q.includes("maintenance") || q.includes("service")) {
        answer =
            "Hum solar panel cleaning, inverter checking, wiring inspection aur maintenance support provide karte hain.";
    } else if (q.includes("battery") || q.includes("backup")) {
        answer =
            "Battery backup ke liye hybrid solar system best hota hai. Ye power cut aur night usage me useful hai.";
    } else if (q.includes("contact") || q.includes("phone")) {
        answer =
            "Greenali Solar contact: +91 6200003061, Email: Info@greenalisolar.com.com.";
    }

    res.json({ answer });
});

app.post("/api/contact", (req, res) => {
    const filePath = path.join(__dirname, "leads.json");

    let leads = [];

    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf-8");
        if (fileData.trim()) {
            leads = JSON.parse(fileData);
        }
    }

    const newLead = {
        id: Date.now(),
        ...req.body,
        createdAt: new Date().toLocaleString(),
    };

    leads.push(newLead);

    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    console.log("New Contact Inquiry:", newLead);

    res.json({
        success: true,
        message: "Inquiry saved successfully",
    });
});

app.get("/api/leads", (req, res) => {
    const filePath = path.join(__dirname, "leads.json");

    if (!fs.existsSync(filePath)) {
        return res.json([]);
    }

    const fileData = fs.readFileSync(filePath, "utf-8");

    if (!fileData.trim()) {
        return res.json([]);
    }

    const leads = JSON.parse(fileData);
    res.json(leads);
});

app.listen(5000, () => {
    console.log("🚀 Backend running on http://localhost:5000");
});