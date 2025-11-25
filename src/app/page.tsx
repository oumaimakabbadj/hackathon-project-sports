"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DayNightWidget from "@/components/DayNightWidget";
import FunFact from "@/components/FunFact";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div className="p-10">Chargement...</div>;
  if (status === "unauthenticated") redirect("/login");

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-64 flex-1 flex flex-col">
        <Header />
        <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DayNightWidget username={session?.user?.name || "User"} />
            </div>
            <div className="lg:col-span-1">
              <FunFact />
            </div>
          </div>

          {/* Quick Shortcuts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {["Mon Programme", "Nutrition", "Statistiques"].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-bold text-slate-800 text-lg">{item}</h3>
                <div className="mt-4 h-2 w-12 bg-brand-primary rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
