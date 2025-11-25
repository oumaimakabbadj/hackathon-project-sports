import DayNightWidget from "@/components/DayNightWidget";
import FunFact from "@/components/FunFact";
import Header from "@/components/Header";
import { Activity, Flame, Trophy } from "lucide-react";

export default function Home() {
  // In a real app, you would fetch the user session here
  const mockUser = "Alex";

  return (
    <div className="max-w-4xl mx-auto">
      {/* Top Bar */}
      <Header />

      <div className="mt-6 space-y-8">
        {/* Main Sketch Area: Greeting, Time, Day/Night */}
        <section>
          <DayNightWidget username={mockUser} />
        </section>

        {/* Fun Fact Section */}
        <section>
          <FunFact />
        </section>

        {/* Quick Stats (Extra visual filler based on Sport theme) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-8">
            <Flame className="w-8 h-8 text-orange-500 mb-2" />
            <span className="text-2xl font-bold">1,240</span>
            <span className="text-xs text-gray-500 uppercase">Calories</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-8">
            <Activity className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-2xl font-bold">8,432</span>
            <span className="text-xs text-gray-500 uppercase">Pas (Steps)</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-8">
            <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-2xl font-bold">#3</span>
            <span className="text-xs text-gray-500 uppercase">Classement</span>
          </div>
        </section>
      </div>
    </div>
  );
}
