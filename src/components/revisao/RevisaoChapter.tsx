"use client";

import { useMemo, useRef, useState } from "react";
import type { RevisionChapter } from "@/data/revisao/revisions";

type RevisaoChapterProps = {
  chapter: RevisionChapter;
};

export default function RevisaoChapter({ chapter }: RevisaoChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const total = chapter.topics.length;

  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;

    const newIndex = Math.round(scrollLeft / width);
    setIndex(newIndex);
  };

  const scrollToIndex = (i: number) => {
    const el = containerRef.current?.children[i] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", inline: "center" });
    setIndex(i);
  };

  return (
    <main className="min-h-screen bg-indigo-50/45 px-4 py-6 pb-24">
      <div className="mx-auto max-w-md">

        {/* HEADER */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            {chapter.title}
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            {index + 1}/{total} • {chapter.estimatedTime}
          </p>

          <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-indigo-500 transition-all"
              style={{
                width: `${((index + 1) / total) * 100}%`,
              }}
            />
          </div>
        </header>

        {/* CARROSSEL */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {chapter.topics.map((topic) => (
            <div
              key={topic.id}
              className="min-w-full snap-center px-1"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <span>{topic.icon}</span>
                  {topic.title}
                </h2>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {topic.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-5 flex justify-center gap-2">
          {chapter.topics.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-indigo-600 scale-110"
                  : "bg-slate-300"
              }`}
            />
          ))}
        </div>

      </div>
    </main>
  );
}