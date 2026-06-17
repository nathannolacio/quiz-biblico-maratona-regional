import Quiz from "@/components/quiz/Quiz";
import { chapters } from "@/data/chapters";
import { notFound } from "next/navigation";

type QuizPageProps = {
    params: Promise<{
        chapterId: string
    }>;
};

export default async function QuizPage({
    params,
}: QuizPageProps) {
    const { chapterId } = await params;

    const chapter = chapters.find(
        (chapter) => chapter.id === Number(chapterId)
    )

    if (!chapter) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Quiz 
                chapter={chapterId}
                questions={chapter.questions}
                title={chapter.title}
            />
        </main>     
    )
}