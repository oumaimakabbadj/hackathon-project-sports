"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Newspaper, Bot, MessageSquare, Info, Dumbbell } from "lucide-react";

const menuItems = [
  { name: "Actualités", icon: Newspaper, href: "/news" },
  { name: "Assistant Raya", icon: Bot, href: "/ai-chat" }, // The AI name from sketch
  { name: "Board & Chat", icon: MessageSquare, href: "/board" },
  { name: "Qui sommes-nous?", icon: Info, href: "/credits" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm z-20 hidden md:flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <Dumbbell className="text-sport-primary w-8 h-8" />
        <h1 className="text-2xl font-bold text-gray-800 tracking-tighter">
          SportLife
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-sport-primary text-white shadow-md"
                  : "text-gray-600 hover:bg-blue-50 hover:text-sport-primary"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 group-hover:text-sport-primary"
                }`}
              />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-linear-to-r from-sport-primary to-purple-500 p-4 rounded-xl text-white">
          <p className="text-xs font-semibold opacity-80">Hackathon Project</p>
          <p className="text-sm mt-1">Version 1.0</p>
        </div>
      </div>
    </aside>
  );
}
