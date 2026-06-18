import { useEffect, useState } from "react";

export default function AdminLeads() {
    const [leads, setLeads] = useState([]);

    const params = new URLSearchParams(window.location.search);
    const pass = params.get("pass");

    if (pass !== "greenali123") {
        return (
            <div style={{ padding: "100px", color: "red" }}>
                <h1>Access Denied</h1>
            </div>
        );
    }

    useEffect(() => {
        fetch("https://greenali-solar-ai.onrender.com/api/leads")
            .then((res) => res.json())
            .then((data) => setLeads(data.reverse()))
            .catch(() => alert("Backend not connected"));
    }, []);

    return (
        <div style={{ padding: "100px 30px", background: "#07140d", minHeight: "100vh", color: "white" }}>
            <h1>Greenali Solar Leads</h1>

            <table border="1" cellPadding="12" style={{ width: "100%", marginTop: "30px", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Service</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {leads.map((lead, index) => (
                        <tr key={index}>
                            <td>{lead.name}</td>
                            <td>{lead.phone}</td>
                            <td>{lead.email}</td>
                            <td>{lead.city}</td>
                            <td>{lead.service}</td>
                            <td>{lead.message}</td>
                            <td>{lead.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}