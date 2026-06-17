"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleStart() {
    console.log("CLICK FUNCIONOU");
    alert("CLICK FUNCIONOU");
    
    router.push("/login");
  }

  return (
    <main className="w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 flex items-center justify-center p-6">

      <div className="flex flex-col gap-10 max-w-3xl w-full bg-white rounded-2xl p-8 shadow-lg">

        <h1 className="text-center font-bold text-indigo-600 text-4xl">
          📖 Quiz Bíblico - Efésios
        </h1>

        <div className="space-y-3">
          <h2 className="text-center font-semibold text-gray-700 text-xl">
            Bem-vindo ao Quiz!
          </h2>

          <p className="text-center text-gray-600 leading-relaxed">
            Teste seus conhecimentos sobre a carta de Efésios.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button variant="primary" onClick={handleStart}>
            Iniciar Quiz
          </Button>

          <Button variant="secondary" href="/ranking">
            Ver Ranking
          </Button>

        </div>

      </div>

    </main>
  );
}