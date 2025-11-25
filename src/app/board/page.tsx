"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useState } from "react";
import { Users, MessageCircle } from "lucide-react";

export default function Board() {
  const [view, setView] = useState<"rooms" | "posts">("rooms");

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-64 flex-1 flex flex-col">
        <Header />
        <div className="p-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setView("rooms")}
              className={`px-6 py-3 rounded-xl font-bold transition ${
                view === "rooms"
                  ? "bg-brand-primary text-white shadow-lg shadow-blue-200"
                  : "bg-white text-slate-500"
              }`}
            >
              Chat Rooms
            </button>
            <button
              onClick={() => setView("posts")}
              className={`px-6 py-3 rounded-xl font-bold transition ${
                view === "posts"
                  ? "bg-brand-primary text-white shadow-lg shadow-blue-200"
                  : "bg-white text-slate-500"
              }`}
            >
              Community Posts
            </button>
          </div>

          {view === "rooms" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Running Club", count: 124, color: "bg-orange-500" },
                { name: "Yoga & Zen", count: 85, color: "bg-purple-500" },
                { name: "Musculation", count: 230, color: "bg-red-500" },
                { name: "Nutrition", count: 90, color: "bg-green-500" },
              ].map((room) => (
                <div
                  key={room.name}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div
                    className={`w-12 h-12 ${room.color} rounded-2xl mb-4 flex items-center justify-center text-white shadow-md`}
                  >
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {room.name}
                  </h3>
                  <p className="text-slate-500 mt-1">
                    {room.count} membres actifs
                  </p>
                  <button className="mt-6 w-full py-2 bg-slate-50 text-slate-700 font-semibold rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    Rejoindre
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-w-3xl">
              {[1, 2, 3].map((post) => (
                <div
                  key={post}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <span className="font-bold text-sm text-slate-700">
                      SarahRunner
                    </span>
                    <span className="text-xs text-slate-400">• Il y a 2h</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Conseils pour le marathon de Paris ?
                  </h3>
                  <p className="text-slate-600 mt-2">
                    Je me prépare pour mon premier marathon et je cherche des
                    conseils sur l'alimentation la semaine avant la course.
                  </p>
                  <div className="mt-4 flex gap-4 text-slate-400 text-sm font-semibold">
                    <span className="flex items-center gap-1 hover:text-brand-primary cursor-pointer">
                      <MessageCircle size={16} /> 15 Réponses
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
