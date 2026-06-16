"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Result() {
  const router = useRouter();

  // 🔥 HARD CODED (temporário)
  const score = 7;
  const total = 10;
  const name = "Jogador";

  const percentage = Math.round((score / total) * 100);

  function getMessage() {
    if (percentage === 100) return "Perfeito! 🔥";
    if (percentage >= 70) return "Muito bom! 🙌";
    if (percentage >= 50) return "Bom, mas pode melhorar 📖";
    return "Continue estudando 💪";
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">

        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          🎉 Resultado do Quiz
        </h1>

        <p className="text-sm text-gray-600 mb-2">
          Participante: <span className="font-semibold">{name}</span>
        </p>

        <p className="text-lg mb-2">
          Você acertou <span className="font-bold">{score}</span> de{" "}
          <span className="font-bold">{total}</span>
        </p>

        <p className="text-3xl font-bold text-indigo-700 mb-4">
          {percentage}%
        </p>

        <p className="text-gray-700 mb-6">
          {getMessage()}
        </p>

        <Button onClick={() => router.push("/")}>
          Voltar ao Início
        </Button>

      </div>
    </div>
  );
}