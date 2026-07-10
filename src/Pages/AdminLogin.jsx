import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                "http://localhost:5000/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await res.json();

            if (data.success) {

                localStorage.setItem(
                    "adminToken",
                    data.token
                );

                navigate("/admin/dashboard");

            } else {

                alert("Invalid Email or Password");

            }

        } catch (error) {

            console.log(error);
            alert("Backend Server Not Connected");

        }
    };


    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#07140d"
            }}
        >

            <form
                onSubmit={handleLogin}
                style={{
                    background: "white",
                    padding: "40px",
                    borderRadius: "15px",
                    width: "350px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
            >

                <h2 style={{ textAlign: "center" }}>
                    Greenali Admin Login
                </h2>


                <input
                    type="email"
                    placeholder="Owner Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        margin: "10px 0"
                    }}
                />


                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        margin: "10px 0"
                    }}
                />


                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#128a2e",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Login
                </button>


            </form>

        </div>
    );
}