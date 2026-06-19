import { formatDateTime } from "@/helpers/formatDateTime";
import { RankingUser } from "@/types/rankingUser";

type RankingRowProps = {
  user: RankingUser;
  position: number;
  isCurrentUser: boolean;
};

export default function RankingRow({
  user,
  position,
  isCurrentUser,
}: RankingRowProps) {
  const nameColor = isCurrentUser
    ? "text-indigo-700"
    : "text-slate-800";

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-6 py-4 transition-colors ${
        isCurrentUser
          ? "bg-indigo-50"
          : "hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <span className="font-bold text-slate-500 w-8 shrink-0">
          #{position}
        </span>

        <div className="min-w-0">
          <p className={`font-medium truncate ${nameColor}`}>
            {user.name}
          </p>

          {user.created_at && (
            <p className="text-xs text-slate-500">
              Concluído em {formatDateTime(user.created_at)}
            </p>
          )}
        </div>

        {isCurrentUser && (
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full shrink-0">
            Você
          </span>
        )}
      </div>

      <span className="font-bold text-indigo-600 shrink-0 ml-4">
        {user.score} pts
      </span>
    </div>
  );
}