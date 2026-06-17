"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export default function OnboardingPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    if (!name.trim()) {
      showToast("Digite seu nome", "error");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      showToast("Perfil atualizado com sucesso!", "success");
      router.push("/chapters");
    } catch (err) {
      console.error(err);
      showToast("Erro ao salvar nome", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 flex items-center justify-center p-6">

      <div className="flex flex-col gap-10 max-w-3xl w-full bg-white rounded-2xl p-8 shadow-lg">

        {/* HEADER (igual login) */}
        <h1 className="text-center font-bold text-indigo-600 text-4xl">
          📖 Quiz Bíblico - Efésios
        </h1>

        <div className="space-y-3">
          <h2 className="text-center font-semibold text-gray-700 text-xl">
            Digite aqui seu nome:
          </h2>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <Button
            variant="primary"
            onClick={handleSave}
            disabled={loading}
          >
            Continuar
          </Button>
        </div>

        {/* FOOTER (igual login) */}
        <div className="flex justify-center">
          <Button variant="secondary" href="/login">
            Voltar
          </Button>
        </div>

      </div>

    </main>
  );
}