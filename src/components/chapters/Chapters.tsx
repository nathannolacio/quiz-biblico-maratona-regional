import Button from "../ui/Button";
import { chapters } from "@/data/chapters";
import Link from "next/link";

export default function Chapters() {
    return (    
        <main className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-slate-100 p-6">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                📖 Escolha o capítulo
                </h1>

                <p className="text-center text-gray-600 mb-8">
                Selecione o capítulo bíblico que você deseja responder.
                </p>

                <div className="grid gap-4">
                {chapters.map((chapter) => (
                    <Link
                        key={chapter.id}
                        href={`/quiz/${chapter.id}`}
                        className="p-4 rounded-xl bg-gray-100 hover:bg-indigo-100 hover:text-indigo-700 transition text-left font-medium"
                        >
                            <h2 className="font-semibold">
                                {chapter.title}
                            </h2>

                            <p className="text-sm text-slate-500">
                                {chapter.questions.length} questões
                            </p>
                    </Link>
                ))}
                </div>

                <div className="mt-8 flex justify-center">
                <Button variant="secondary" href="/">
                    Voltar
                </Button>
                </div>

            </div>
        </main>
    );
}