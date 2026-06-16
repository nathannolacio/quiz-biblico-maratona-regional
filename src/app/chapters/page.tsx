"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

const chapters = [
  { id: "1", title: "Efésios Capítulo 1" },
  { id: "2", title: "Efésios Capítulo 2" },
  { id: "3", title: "Efésios Capítulo 3" },
  { id: "4", title: "Efésios Capítulo 4" },
  { id: "5", title: "Efésios Capítulo 5" },
  { id: "6", title: "Efésios Capítulo 6" },
];

export default function ChaptersPage() {
  const router = useRouter();

  function handleSelectChapter(id: string) {
    router.push(`/quiz?chapter=${id}`);
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-slate-100 p-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          📖 Escolha o capítulo
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Selecione o capítulo bíblico que você deseja responder.
        </p>

        <div className="grid gap-4">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => handleSelectChapter(chapter.id)}
              className="p-4 rounded-xl bg-gray-100 hover:bg-indigo-100 hover:text-indigo-700 transition text-left font-medium"
            >
              {chapter.title}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="secondary" href="/">
            Voltar
          </Button>
        </div>

      </div>
    </main>
  );
}