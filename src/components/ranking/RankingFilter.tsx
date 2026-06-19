"use client";

import { usePathname, useRouter } from "next/navigation";
import { chapters } from "@/data/quiz";

export default function RankingFilter() {
  const router = useRouter();
  const pathname = usePathname();

  const isGeneral = pathname === "/ranking";

  const baseButtonClass =
    "px-4 py-2 rounded-xl font-medium transition";

  const activeClass = "bg-indigo-600 text-white";
  const inactiveClass = "bg-white text-slate-700 hover:bg-slate-50";

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {/* Geral */}
      <button
        onClick={() => router.push("/ranking")}
        className={`${baseButtonClass} ${
          isGeneral ? activeClass : inactiveClass
        }`}
      >
        🏆 Geral
      </button>

      {/* Capítulos */}
      {chapters.map((chapter) => {
        const isActive = pathname === `/ranking/quiz/${chapter.id}`;

        return (
          <button
            key={chapter.id}
            onClick={() => router.push(`/ranking/quiz/${chapter.id}`)}
            className={`${baseButtonClass} ${
              !chapter.unlocked
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : isActive
                ? activeClass
                : inactiveClass
            }`}
            disabled={!chapter.unlocked}
          >
            {chapter.unlocked
              ? `📖 Cap. ${chapter.id}`
              : `🔒 Cap. ${chapter.id}`}
          </button>
        );
      })}
    </div>
  );
}