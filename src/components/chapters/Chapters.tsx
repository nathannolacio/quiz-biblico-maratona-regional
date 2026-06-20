"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { chapters } from "@/data/quiz";
import { getChaptersStatus } from "@/services/getChaptersStatus";
import ChaptersProgress from "./ChaptersProgress";

type QuizResult = {
  quiz_id: string;
};

export default function Chapters() {
  const [answered, setAnswered] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getChaptersStatus();

      if (data) {
        const answeredIds = data.map((item: QuizResult) =>
          Number(item.quiz_id)
        );

        setAnswered(new Set(answeredIds));
      }

      setLoading(false);
    }

    load();
  }, []);

  const isAnswered = (chapterId: number) => {
    return answered.has(chapterId);
  };

  const unlockedChapters = chapters.filter((c) => c.unlocked);

  const completed = unlockedChapters.filter((c) =>
    answered.has(c.id)
  ).length;

  const total = unlockedChapters.length;

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-slate-100 flex items-center justify-center p-4 pb-20 sm:p-6">
      <div className="w-full max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 tracking-tight">
            📖 Capítulos
          </h1>

          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Acompanhe seu progresso e veja o que já foi respondido
          </p>
        </div>

        {/* PROGRESS */}
        <ChaptersProgress
          completed={completed}
          total={total}
        />

        {/* CONTAINER */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6">

          {loading ? (
            <p className="text-center text-slate-500 py-10">
              Carregando os quizzes...
            </p>
          ) : (
            <div className="space-y-3">
              {chapters.map((chapter) => {
                const locked = !chapter.unlocked;
                const answeredState = isAnswered(chapter.id);

                return (
                  <Link
                    key={chapter.id}
                    href={locked ? "#" : `/quiz/${chapter.id}`}
                    className={`
                      flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-3 sm:gap-0
                      p-4 rounded-xl border transition
                      ${
                        locked
                          ? "opacity-40 cursor-not-allowed bg-slate-50"
                          : "hover:shadow-md hover:-translate-y-[1px] bg-white border-slate-200"
                      }
                    `}
                  >

                    {/* LEFT */}
                    <div className="flex flex-col min-w-0">
                      <h2 className="font-semibold text-slate-800 break-words">
                        {`${chapter.title}`}
                      </h2>

                      <p className="text-sm text-slate-500">
                        {chapter.questions.length} questões
                      </p>
                    </div>

                    {/* RIGHT BADGE */}
                    <div className="shrink-0">
                      {locked ? (
                        <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap bg-slate-200 text-slate-600">
                          🔒 Em breve
                        </span>
                      ) : answeredState ? (
                        <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap bg-green-100 text-green-700 font-medium">
                          ✅ Respondido
                        </span>
                      ) : (
                        <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap bg-slate-100 text-slate-600">
                          ⬜ Não respondido
                        </span>
                      )}
                    </div>

                  </Link>
                );
              })}
            </div>
          )}

          {/* FOOTER */}
          <div className="mt-6 flex justify-center">
            <Button variant="secondary" href="/">
              Voltar
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}