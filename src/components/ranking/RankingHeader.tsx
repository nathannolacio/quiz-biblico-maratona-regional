type Props = {
  chapter?: string;
};

export default function RankingHeader({
  chapter,
}: Props) {
  const isGeneral = !chapter;

  const title = isGeneral
    ? "🏆 Ranking Geral"
    : `📖 Capítulo ${chapter}`;

  const description = isGeneral
    ? "Soma da pontuação de todos os quizzes realizados."
    : `Pontuação referente apenas ao Quiz do Capítulo ${chapter}.`;

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