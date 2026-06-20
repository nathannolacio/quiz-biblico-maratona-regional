import Link from "next/link";
import { Quiz } from "@/data/quiz";

type ChapterCardProps = {
  chapter: Quiz;
  answered: boolean;
};

export default function ChapterCard({
  chapter,
  answered,
}: ChapterCardProps) {
  const locked = !chapter.unlocked;

  return (
    <Link
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
      <div className="flex flex-col min-w-0">
        <h2 className="font-semibold text-slate-800 break-words">
          {chapter.title}
        </h2>

        <p className="text-sm text-slate-500">
          {chapter.questions.length} questões
        </p>
      </div>

      <div className="shrink-0">
        {locked ? (
          <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap bg-slate-200 text-slate-600">
            🔒 Em breve
          </span>
        ) : answered ? (
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
}