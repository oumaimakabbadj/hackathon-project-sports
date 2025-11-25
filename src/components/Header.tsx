import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-end items-center py-4 gap-4">
      <button
        type="button"
        className="relative p-2 rounded-full hover:bg-gray-100 transition"
      >
        {""}
        <Bell className="w-6 h-6 text-gray-600" />
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
      </button>

      <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-gray-800">User Name</p>
          <p className="text-xs text-gray-500">Athlète Amateur</p>
        </div>
        <div className="w-10 h-10 bg-sport-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
