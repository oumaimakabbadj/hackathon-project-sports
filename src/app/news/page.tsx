import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function News() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="ml-64 flex-1">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Actualités Sportives</h1>
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            Article 1: Les JO 2024...
          </div>
        </div>
      </main>
    </div>
  );
}
