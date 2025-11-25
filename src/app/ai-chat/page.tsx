"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState, useRef, useEffect } from "react";
import { Send, Bot } from "lucide-react";

export default function AiChat() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([
    {
      role: "bot",
      text: "Bonjour ! Je suis Raya, ton assistant sportif. Comment puis-je t'aider aujourd'hui ?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<null | HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // Simulated AI Response (Hackathon Fake)
    setTimeout(() => {
      let reply = "C'est une excellente question sur le sport !";
      if (userMsg.toLowerCase().includes("manger"))
        reply =
          "Pour la nutrition, privilégie les protéines après l'effort et les glucides complexes avant.";
      if (userMsg.toLowerCase().includes("courir"))
        reply =
          "La course à pied est excellente pour le cardio. Commence par 20 minutes et augmente progressivement.";
      if (userMsg.toLowerCase().includes("fatigue"))
        reply =
          "Le repos est crucial. Assure-toi de dormir au moins 7-8h par nuit.";

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 1000);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-64 flex-1 flex flex-col h-screen">
        <Header />
        <div className="flex-1 p-8 flex flex-col overflow-hidden">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 flex-1 flex flex-col overflow-hidden">
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-brand-primary text-white rounded-tr-none"
                        : "bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100"
                    }`}
                  >
                    {msg.role === "bot" && (
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase text-brand-primary">
                        <Bot size={14} /> Raya
                      </div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-primary transition"
                placeholder="Posez une question à Raya..."
              />
              <button
                onClick={handleSend}
                className="bg-brand-primary text-white p-3 rounded-xl hover:bg-blue-600 transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
