type Props = {
  quizId?: string;
};

export default function RankingHeader({
  quizId,
}: Props) {
  const isGeneral = !quizId;

  const title = isGeneral
    ? "🏆 Ranking Geral"
    : `📖 Capítulo ${quizId}`;

  const description = isGeneral
    ? "Soma da pontuação de todos os quizzes realizados."
    : `Pontuação referente apenas ao Quiz do Capítulo ${quizId}.`;

  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
        {title}
      </h1>

      <p className="text-slate-600 mt-2">
        {description}
      </p>
    </div>
  );
}