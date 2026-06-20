"use client";

import Button from "@/components/ui/Button";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { deferredPrompt, clearPrompt } = usePWAInstall();

  async function handleInstall() {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;

    clearPrompt();
  }

  function handleStart() {
    router.push("/login");
  }

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 px-6 flex items-center justify-center md:pb-0 pb-20">
      
      <div className="flex flex-col gap-8 w-full max-w-md md:max-w-2xl mx-auto">
        
        {/* Header */}
        <h1 className="text-center font-bold text-indigo-600 text-3xl sm:text-4xl md:text-5xl leading-tight">
          📖 Quiz Bíblico - Efésios
        </h1>

        {/* Description */}
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-center font-semibold text-gray-700 text-lg sm:text-xl md:text-2xl">
            Bem-vindo ao Quiz!
          </h2>

          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Teste seus conhecimentos sobre a carta de Efésios.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          
          <Button variant="primary" onClick={handleStart}>
            Iniciar Quiz
          </Button>

          <Button variant="secondary" href="/ranking">
            Ver Ranking
          </Button>
        </div>

        {/* Install section */}
        {deferredPrompt && (
          <div className="pt-6 border-t border-gray-200 text-center">
            
            <p className="text-xs sm:text-sm text-gray-500 mb-3">
              📱 Instale o app para uma experiência melhor
            </p>

            <Button variant="secondary" onClick={handleInstall}>
              Instalar app
            </Button>
          </div>
        )}

      </div>
    </main>
  );
}