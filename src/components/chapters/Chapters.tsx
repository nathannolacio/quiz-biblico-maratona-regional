"use client";

import Button from "../ui/Button";
import { chapters } from "@/data/quiz";
import ChaptersProgress from "./ChaptersProgress";
import ChapterCard from "./ChapterCard";
import { useChaptersStatus } from "@/hooks/useChaptersStatus";

export default function Chapters() {
  const { answered, loading } = useChaptersStatus();

  const unlockedChapters = chapters.filter((c) => c.unlocked);

  const completed = unlockedChapters.filter((c) =>
    answered.has(c.id)
  ).length;

  const total = unlockedChapters.length;

  return (
    <main className="min-h-screen w-full bg-indigo-50/45 px-5 py-8 pb-24 md:pb-8">
      <div className="w-full max-w-xl mx-auto lg:max-w-2xl">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">
            Capítulos
          </h1>

          <p className="mt-2 text-slate-500">
            Continue sua jornada em Efésios.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="mb-8">
          <ChaptersProgress
            completed={completed}
            total={total}
          />
        </div>

        {/* CONTAINER */}
        <div>

          {loading ? (
            <p className="text-center text-slate-500 py-10">
              Carregando os quizzes...
            </p>
          ) : (
            <div className="space-y-4">
              {chapters.map((chapter) => (
                <ChapterCard 
                  key={chapter.id}
                  chapter={chapter}
                  answered={answered.has(chapter.id)}
                />
              ))}
            </div>
          )}

          {/* FOOTER */}
          {/* <div className="mt-6 flex justify-center">
            <Button variant="secondary" href="/">
              Voltar
            </Button>
          </div> */}

        </div>
      </div>
    </main>
  );
}