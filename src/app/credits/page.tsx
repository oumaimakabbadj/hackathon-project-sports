import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Credits() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-64 flex-1">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h1>
          <div className="bg-white p-8 rounded-3xl shadow-sm max-w-2xl">
            <p>Créé par l'équipe Hackathon 2024.</p>
            <p className="mt-4 font-bold">Contact: team@sportlife.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}
