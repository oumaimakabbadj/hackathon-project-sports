"use client";
import { Lightbulb } from "lucide-react";

export default function FunFact() {
  return (
    <div className="h-full bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
          <Lightbulb className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-slate-800 text-lg">Le Saviez-vous ?</h3>
      </div>

      <p className="text-slate-600 leading-relaxed text-lg">
        "Les séances de sport le soir peuvent vous aider à vous endormir plus
        vite, à condition de laisser 1h de repos avant le coucher."
      </p>

      <div className="mt-6 flex gap-2">
        <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wide">
          Sommeil
        </span>
        <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wide">
          Récupération
        </span>
      </div>
    </div>
  );
}
