"use client";
import { useState } from "react";
import { Dumbbell } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/login"); // Redirect to login after success
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6 text-brand-primary">
          <Dumbbell className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">
          Créer un compte
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Rejoignez la communauté SportLife
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nom Complet
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
              placeholder="Alex Smith"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
              placeholder="alex@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
              placeholder="*******"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-slate-500">
          Déjà un compte ?{" "}
          <Link
            href="/login"
            className="text-brand-primary font-bold hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
