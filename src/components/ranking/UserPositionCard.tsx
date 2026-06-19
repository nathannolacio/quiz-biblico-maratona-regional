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

  const position = ranking.findIndex((u) => u.user_id === user.user_id) + 1;

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