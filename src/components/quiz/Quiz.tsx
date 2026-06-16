"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { getMe } from "@/services/user.client";
import { ephesiansChapter1 } from "@/data/ephesians-chapter-1";
import { useRouter } from "next/navigation";
import { saveQuizResult } from "@/services/quiz.client";

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [answered, setAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const router = useRouter();

    const chapter = "1";
    const questions = ephesiansChapter1;
    const question = questions[current];

    useEffect(() => {
        async function loadUser() {
            const data = await getMe();

            if (data?.user?.name) {
                setPlayerName(data.user.name);
            } else {
                setPlayerName("Jogador")
            }
        }

        loadUser();
    }, []);

    function handleSelect(index: number) {
    if (answered) return;

    setSelected(index);
    setAnswered(true);

    const correct = index === question.correct;
    setIsCorrect(correct);

    if (correct) {
        setScore((s) => s + 1);
    }
    }

    function handleNext() {
    const next = current + 1;

    if (next >= questions.length) {
      saveQuizResult({
        chapter,
        score,
        total: questions.length
      })
      .then(() => {
        router.push("/result")
      })
      .catch(() => {
        router.push("/result")
      })
    
        return;
    }

      setCurrent(next);
      setSelected(null);
      setAnswered(false);''
    }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

        {/* HEADER */}
        <h1 className="text-center text-3xl font-bold text-indigo-600 mb-6">
          📖 Quiz Bíblico - Efésios
        </h1>

        <div className="flex justify-between items-center mb-3 text-sm font-medium text-gray-600">

        {/* PLAYER */}
        <div>
            👤 <span className="text-indigo-600 font-semibold">
                {playerName}
            </span>
        </div>

        {/* CHAPTER */}
        <div className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
            Efésios {chapter}
        </div>

        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div
                className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-700 transition-all duration-500 ease-out"
                style={{
                width: `${((current + 1) / questions.length) * 100}%`,
                }}
            />
        </div>

        {/* PROGRESSO */}
        <div className="text-sm text-gray-500 mb-4">
          Pergunta {current + 1} de {questions.length}
        </div>

        {/* PERGUNTA */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
          {question.question}
        </h2>

        {/* RESPOSTAS */}
        <div className="grid gap-3">
          {question.answers.map((answer, index) => {
            const isSelected = selected === index;

            let style =
              "p-4 rounded-xl text-left text-base transition duration-200";

            if (!answered) {
              style +=
                " bg-gray-100 hover:bg-gray-200 hover:-translate-y-1 cursor-pointer";
            } else {
              if (index === question.correct) {
                style += " bg-green-500 text-white";
              } else if (isSelected && index !== question.correct) {
                style += " bg-red-500 text-white";
              } else {
                style += " bg-gray-100 opacity-60";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={answered}
                className={style}
              >
                {answer}
              </button>
            );
          })}
        </div>

        {/* FEEDBACK */}
        {answered && (
          <div className="mt-6 p-4 rounded-xl bg-gray-50 border-l-4 border-indigo-500">
            <p className={`font-semibold mb-2 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                {isCorrect ? "✔ Resposta correta" : "✘ Resposta incorreta"}
            </p>
            <p className="text-gray-700 text-sm">
              {question.explanation}
            </p>
          </div>
        )}

        {/* BOTÃO PRÓXIMA */}
        <div className="mt-6 flex justify-end">
            <Button
                onClick={handleNext}
                disabled={!answered}
            >
                Próxima pergunta
            </Button>
        </div>
        
      </div>
    </div>
  );
}