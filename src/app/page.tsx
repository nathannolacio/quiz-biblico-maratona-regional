import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 flex items-center justify-center p-6">

      <div className="flex flex-col gap-10 max-w-3xl w-full bg-white rounded-2xl p-8 shadow-lg">

        {/* HEADER */}
        <h1 className="text-center font-bold text-indigo-600 text-4xl">
          📖 Quiz Bíblico - Efésios
        </h1>

        {/* INTRO */}
        <div className="space-y-3">
          <h2 className="text-center font-semibold text-gray-700 text-xl">
            Bem-vindo ao Quiz!
          </h2>

          <p className="text-center text-gray-600 leading-relaxed">
            Teste seus conhecimentos sobre a carta de Efésios com este quiz bíblico interativo.
            Desafie-se e aprenda mais sobre as mensagens e ensinamentos contidos nesta epístola do Novo Testamento.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button
            variant="primary"
            href="/quiz"
          >
            Responder ao Quiz
          </Button>

          <Button
            variant="secondary"
            href="/ranking"
          >
            Ver Ranking
          </Button>

        </div>

      </div>      

    </main>
  ); 
} 