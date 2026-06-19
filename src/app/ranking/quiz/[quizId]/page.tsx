import Ranking from "@/components/ranking/Ranking";
import { chapters } from "@/data/quiz";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: Promise<{
    quizId: string;
  }>;
};

export default async function RankingQuizPage({ params }: PageProps) {
  const { quizId } = await params;

  const selectedChapter = chapters.find(
    (c) => String(c.id) === quizId
  );

  if (!selectedChapter) {
    notFound();
  }

  if (!selectedChapter.unlocked) {
    redirect("/ranking");
  }

  return <Ranking quizId={quizId} />;
}