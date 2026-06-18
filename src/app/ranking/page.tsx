import Ranking from "@/components/ranking/Ranking";
import { chapters } from "@/data/quiz";
import { notFound, redirect } from "next/navigation";

type RankingPageProps = {
  searchParams: Promise<{
    chapter?: string;
  }>;
};

export default async function RankingPage({
  searchParams,
}: RankingPageProps) {
  const { chapter } = await searchParams;

  if (chapter) {
    const selectedChapter = chapters.find(
      (item) => item.id === Number(chapter)
    );

    if (!selectedChapter) {
      notFound();
    }

    if (!selectedChapter.unlocked) {
      redirect("/ranking");
    }
  }

  return <Ranking />;
}