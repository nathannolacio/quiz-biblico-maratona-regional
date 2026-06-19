import { RankingUser } from "@/types/rankingUser"; 

type UserPositionCardProps = {
  user: RankingUser | null;
  ranking: RankingUser[];
};

export default function UserPositionCard({
  user,
  ranking
}: UserPositionCardProps) {
  if (!user) {
    return null;
  }

  const sortedRanking = [...ranking].sort((a, b) => {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  return (
    new Date(a.created_at ?? 0).getTime() -
    new Date(b.created_at ?? 0).getTime()
  );
});

  const position = sortedRanking.findIndex((u) => u.user_id === user.user_id) + 1;

  return (
    <div className="bg-indigo-600 text-white rounded-2xl p-5 shadow-md mb-8">
      <p className="text-indigo-100 text-sm">
        Sua colocação atual
      </p>

      <div className="flex items-center justify-between mt-2">
        <span className="text-3xl font-bold">
          #{position}
        </span>

        <span className="text-xl font-semibold">
          {user.score} pts
        </span>
      </div>
    </div>
  );
}