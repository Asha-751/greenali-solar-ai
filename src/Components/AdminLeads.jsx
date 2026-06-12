import { useEffect, useState } from "react";

export default function AdminLeads() {
    const [leads, setLeads] = useState([]);

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
                    {leads.map((lead) => (
                        <tr key={lead.id}>
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