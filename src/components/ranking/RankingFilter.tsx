"use client";

import { chapters } from "@/data/quiz";
import { useRouter } from "next/navigation";

type RankingFilterProps = {
  chapter?: string;
};

export default function RankingFilter({
  chapter,
}: RankingFilterProps) {
  const router = useRouter();

  const baseButtonClass =
    "px-4 py-2 rounded-xl font-medium transition";

  const activeClass =
    "bg-indigo-600 text-white";

  const inactiveClass =
    "bg-white text-slate-700 hover:bg-slate-50";

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => router.push("/ranking")}
        className={`${baseButtonClass} ${
          !chapter ? activeClass : inactiveClass
        }`}
      >
        🏆 Geral
      </button>

      {chapters.map((chapterData) => {
        const isActive =
          chapter === String(chapterData.id);

        return (
          <button
            key={chapterData.id}
            onClick={() =>
              router.push(
                `/ranking?chapter=${chapterData.id}`
              )
            }
            className={`${baseButtonClass} ${
              !chapterData.unlocked
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : isActive
                ? activeClass
                : inactiveClass
            }`}
          >
            {chapterData.unlocked
              ? `📖 Cap. ${chapterData.id}` 
              : `🔒 Cap. ${chapterData.id}`}
            
          </button>
        );
      })}
    </div>
  );
}