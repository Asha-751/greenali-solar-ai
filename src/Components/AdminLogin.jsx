import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("https://greenali-solar-ai.onrender.com/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem("adminToken", data.token);
            navigate("/dashboard");
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div style={{
            background: "#07140d",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <form
                onSubmit={handleLogin}
                style={{
                    background: "#123524",
                    padding: "40px",
                    borderRadius: "12px",
                    width: "350px"
                }}
            >
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                    Greenali Solar Admin
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "12px", margin: "15px 0" }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%", padding: "12px", marginBottom: "20px" }}
                />

                <button
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#1db954",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}