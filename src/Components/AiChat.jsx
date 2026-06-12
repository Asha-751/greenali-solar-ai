import { useState } from "react";
import "../Styles/AiChat.css";

export default function AiChat() {
    const [open, setOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hi! I am Greenali Solar AI. How can I help you?",
        },
    ]);

    const askQuestion = async () => {
        if (!question.trim()) return;

        const currentQuestion = question;

        setMessages((prev) => [
            ...prev,
            { from: "user", text: currentQuestion },
        ]);

        setQuestion("");

        try {
            const res = await fetch("http://localhost:5000/ask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question: currentQuestion }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    from: "bot",
                    text: data.answer || "No response from AI.",
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    from: "bot",
                    text: "Backend not connected. Please start server.",
                },
            ]);
        }
    };

    return (
        <>
            <div className="ai-floating" onClick={() => setOpen(true)}>
                <div className="ai-text">Hi! Need Solar Help?</div>
                <div className="ai-robot">
                    🤖
                    <span>AI</span>
                </div>
            </div>

            {open && (
                <div className="ai-chat-box">
                    <div className="ai-chat-header">
                        <strong>Greenali Solar AI</strong>
                        <button onClick={() => setOpen(false)}>×</button>
                    </div>

                    <div className="ai-chat-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={msg.from === "bot" ? "bot-msg" : "user-msg"}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="ai-chat-input">
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Ask about solar..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    askQuestion();
                                }
                            }}
                        />
                        <button onClick={askQuestion}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
}