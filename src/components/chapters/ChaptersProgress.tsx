type Props = {
  completed: number;
  total: number;
};

export default function ChaptersProgress({ completed, total }: Props) {
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="mb-6 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
      
      {/* TEXT */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-slate-600">
          📊 Progresso dos Quizzes
        </p>

        <p className="text-sm font-medium text-indigo-600">
          {completed} de {total}
        </p>
      </div>

      {/* BAR BACKGROUND */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        
        {/* BAR FILL */}
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* PERCENTAGE */}
      <p className="text-xs text-slate-400 mt-2">
        {Math.round(percentage)}% concluído
      </p>
    </div>
  );
}