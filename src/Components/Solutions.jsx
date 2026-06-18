// Solutions.jsx
<Route path="/solutions" element={<Solutions />} />
export default function Solutions() {
    return (
        <section className="solutions-page">
            <h1>Our Solar Solutions</h1>

            <div className="solution-card">
                <h3>Residential Solar</h3>
                <p>Reduce electricity bills by up to 90%.</p>
            </div>

            <div className="solution-card">
                <h3>Commercial Solar</h3>
                <p>Power your business with clean energy.</p>
            </div>

            <div className="solution-card">
                <h3>Industrial Solar</h3>
                <p>Large-scale solar systems for industries.</p>
            </div>
        </section>
    );
}