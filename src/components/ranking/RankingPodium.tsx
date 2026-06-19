import { RankingUser } from "@/types/rankingUser";

type RankingPodiumProps = {
  ranking: RankingUser[];
};

export default function RankingPodium({
  ranking,
}: RankingPodiumProps) {
  if (ranking.length < 3) {
    return null;
  }

  const first = ranking[0];
  const second = ranking[1];
  const third = ranking[2];

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col gap-4 mb-8 md:hidden">
        {ranking.slice(0, 3).map((user, index) => {
          const position = index + 1;

          return (
            <div
              key={user.user_id}
              className={`bg-white rounded-2xl shadow-md p-4 flex items-center justify-between ${
                position === 1 ? "border-2 border-yellow-400" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {position === 1 && "🥇"}
                  {position === 2 && "🥈"}
                  {position === 3 && "🥉"}
                </span>

                <div>
                  <p className="font-semibold text-slate-800">
                    {user.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    #{position}
                  </p>
                </div>
              </div>

              <span className="font-bold text-indigo-600">
                {user.score} pts
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-4 mb-8 items-end">
        <div className="bg-white rounded-2xl shadow-md p-4 text-center h-40 flex flex-col justify-center">
          <span className="text-3xl mb-2">🥈</span>

          <h2 className="font-semibold text-slate-800">
            {second.name}
          </h2>

          <p className="text-indigo-600 font-bold">
            {second.score} pts
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center h-52 border-2 border-yellow-400 flex flex-col justify-center">
          <span className="text-5xl mb-2">👑</span>

          <h2 className="font-bold text-lg text-slate-800">
            {first.name}
          </h2>

          <p className="text-indigo-600 font-bold text-xl">
            {first.score} pts
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 text-center h-40 flex flex-col justify-center">
          <span className="text-3xl mb-2">🥉</span>

          <h2 className="font-semibold text-slate-800">
            {third.name}
          </h2>

          <p className="text-indigo-600 font-bold">
            {third.score} pts
          </p>
        </div>
      </div>
    </>
  );
}