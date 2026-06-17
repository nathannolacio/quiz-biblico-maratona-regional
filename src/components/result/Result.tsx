"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

type Props = {
  resultId: string;
};

type QuizResult = {
  score: number;
  total: number;
  chapter: string;
  percentage: number;
};

export default function Result({ resultId }: Props) {
  const router = useRouter();
  const { showToast } = useToast();
  const [error, setError] = useState(false);

  const [data, setData] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!resultId) return;

  async function loadResult() {
    const res = await fetch(`/api/quiz/result/${resultId}`);

    if (!res.ok) {
      throw new Error("Erro ao buscar resultado");
    }

    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  loadResult().catch(() => {
    setLoading(false);
    setError(true);
  });
}, [resultId]);

useEffect(() => {
  if (error) {
    showToast("Erro ao carregar resultado", "error");
  }
}, [error, showToast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100">
        <p className="text-gray-600 animate-pulse">
          Carregando resultado...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-gradient-to-br from-indigo-50 to-slate-100">
        <p className="text-gray-700">Não foi possível carregar o resultado</p>

        <Button onClick={() => router.push("/chapters")}>
          Voltar
        </Button>
      </div>
    );
  }

  const { score, total, chapter, percentage } = data;

  const isGood = percentage >= 70;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 text-center">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">
          🎉 Resultado do Quiz
        </h1>

        <p className="text-gray-500 mb-6">
          Capítulo: <span className="text-indigo-600 font-semibold">{chapter}</span>
        </p>

        {/* SCORE CIRCLE */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-indigo-100" />

          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold text-indigo-600">
              {percentage}%
            </span>
            <span className="text-sm text-gray-500">
              {score}/{total}
            </span>
          </div>
        </div>

        {/* FEEDBACK */}
        <div
          className={`mb-6 p-4 rounded-xl font-semibold ${
            isGood
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isGood
            ? "🔥 Excelente desempenho!"
            : "📖 Continue estudando, você está melhorando!"}
        </div>

        {/* DETAILS */}
        <div className="text-gray-600 text-sm mb-8">
          Você completou o quiz de <strong>{chapter}</strong> com{" "}
          <strong>{score}</strong> acertos de <strong>{total}</strong>.
        </div>

        {/* BUTTON */}
        <Button onClick={() => router.push("/chapters")}>
          Voltar aos capítulos
        </Button>

      </div>
    </div>
  );
}