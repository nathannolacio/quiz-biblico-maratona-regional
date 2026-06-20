"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { revisions } from "@/data/revisao/revisions";
import RevisaoChapter from "@/components/revisao/RevisaoChapter";

export default function RevisaoChapterPage() {
  const { id } = useParams();
  const chapterId = Number(Array.isArray(id) ? id[0] : id);

  const chapter = useMemo(() => {
    return revisions.find((r) => r.id === chapterId);
  }, [chapterId]);

  if (!chapter) {
    return (
      <main className="p-6 text-center">
        Capítulo não encontrado
      </main>
    );
  }

  return (
    <RevisaoChapter chapter={chapter} />
  );
}