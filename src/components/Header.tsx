"use client";
import { Bell } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-100/50">
      <div>
        {/* Breadcrumb or Title placeholder */}
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Bienvenue
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2.5 rounded-full hover:bg-white bg-slate-100 transition-colors text-slate-600">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800">
              {session?.user?.name || "Invité"}
            </p>
            <p className="text-xs text-brand-primary font-medium">Pro Member</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            {session?.user?.name?.[0]?.toUpperCase() || "U"}
          </div>
        </div>
      </div>
    </header>
  );
}
