import { RankingUser } from "@/types/rankingUser";
import RankingRow from "./RankingRow";

type RankingListProps = {
  ranking: RankingUser[];
  currentUserId: string | null;
};

export default function RankingList({
  ranking,
  currentUserId,
}: RankingListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">
          Classificação Completa
        </h2>
      </div>

      <div className="divide-y divide-slate-100">
        {ranking.map((user, index) => (
          <RankingRow
            key={user.user_id}
            user={user}
            position={index + 1}
            isCurrentUser={user.user_id === currentUserId}
          />
        ))}
      </div>
    </div>
  );
}