import { RankingUser } from "@/types/rankingUser"; 

type UserPositionCardProps = {
  user: RankingUser | null;
};

export default function UserPositionCard({
  user,
}: UserPositionCardProps) {
  if (!user) {
    return null;
  }

  return (
    <div className="bg-indigo-600 text-white rounded-2xl p-5 shadow-md mb-8">
      <p className="text-indigo-100 text-sm">
        Sua colocação atual
      </p>

      <div className="flex items-center justify-between mt-2">
        <span className="text-3xl font-bold">
          #{user.position}
        </span>

        <span className="text-xl font-semibold">
          {user.score} pts
        </span>
      </div>
    </div>
  );
}