"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Bot,
  MessageSquare,
  Info,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Actualités", icon: Newspaper, href: "/news" },
  { name: "Assistant Raya", icon: Bot, href: "/ai-chat" },
  { name: "Community Board", icon: MessageSquare, href: "/board" },
  { name: "Qui sommes-nous?", icon: Info, href: "/credits" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-50">
      <div className="p-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-600 tracking-tighter">
          SportLife
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-medium ${
                isActive
                  ? "bg-brand-primary text-white shadow-lg shadow-blue-200 translate-x-1"
                  : "text-slate-500 hover:bg-slate-50 hover:text-brand-primary"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
