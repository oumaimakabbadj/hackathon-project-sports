"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Dumbbell } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Email ou mot de passe incorrect");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6 text-brand-primary">
          <Dumbbell className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">
          Bon retour !
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Connectez-vous à SportLife
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
              placeholder="alex@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary outline-none bg-white"
              placeholder="*******"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
          >
            Se Connecter
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-slate-500">
          Pas encore de compte ?{" "}
          <Link
            href="/register"
            className="text-brand-primary font-bold hover:underline"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}
