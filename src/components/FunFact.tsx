"use client";
import { Lightbulb } from "lucide-react";

const facts = [
  "Le cœur d'un athlète peut pomper jusqu'à 35 litres de sang par minute pendant l'effort.",
  "Faire du sport libère des endorphines, l'hormone du bonheur.",
  "La natation est le seul sport qui sollicite tous les muscles du corps simultanément.",
  "Dormir suffisamment est aussi important que l'entraînement pour la récupération musculaire.",
];

export default function FunFact() {
  // Simple logic to pick a fact based on the day of the year (so it changes daily)
  const dayOfYear = Math.floor(
    (new Date().getTime() -
      new Date(new Date().getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24,
  );
  const fact = facts[dayOfYear % facts.length];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-start gap-4 mt-6">
      <div className="bg-orange-100 p-3 rounded-full">
        <Lightbulb className="w-6 h-6 text-orange-500" />
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-lg mb-1">
          Le saviez-vous ?
        </h3>
        <p className="text-gray-600 italic leading-relaxed">
          &quot;{fact}&quot;
        </p>
        <p className="text-xs text-gray-400 mt-2 font-semibold uppercase tracking-wider">
          Santé & Sport
        </p>
      </div>
    </div>
  );
}
