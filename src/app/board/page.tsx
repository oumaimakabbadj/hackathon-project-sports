"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function BoardPage() {
  const [activeTab, setActiveTab] = useState("rooms");

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col">
      <Header />

      <div className="mt-4 flex-1 flex flex-col bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("rooms")}
            className={`flex-1 py-4 text-center font-bold ${
              activeTab === "rooms"
                ? "text-sport-primary border-b-2 border-sport-primary"
                : "text-gray-500"
            }`}
          >
            Chat Rooms
          </button>
          <button
            onClick={() => setActiveTab("posts")}
            className={`flex-1 py-4 text-center font-bold ${
              activeTab === "posts"
                ? "text-sport-primary border-b-2 border-sport-primary"
                : "text-gray-500"
            }`}
          >
            Community Posts
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-gray-50">
          {activeTab === "rooms" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Room Cards */}
              {[
                "Marathon Prep",
                "Yoga Beginners",
                "Healthy Eating",
                "Gym Bros",
              ].map((room) => (
                <div
                  key={room}
                  className="bg-white p-6 rounded-xl shadow-sm border hover:border-sport-primary cursor-pointer transition"
                >
                  <h3 className="font-bold text-lg mb-2">{room}</h3>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white text-xs flex items-center justify-center text-white">
                      +12
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 bg-blue-50 text-sport-primary rounded-lg font-semibold text-sm">
                    Join Room
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Reddit Style Post Placeholder */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-500">
                    u/Runner99
                  </span>
                  <span className="text-xs text-gray-400">• 2h ago</span>
                </div>
                <h3 className="font-bold text-lg">
                  Comment améliorer mon cardio en 2 semaines ?
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Je prépare une compétition et j&apos;ai besoin de conseils...
                </p>
                <div className="mt-4 flex gap-4 text-gray-500 text-sm">
                  <span>⇧ 45</span>
                  <span>💬 12 Comments</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
