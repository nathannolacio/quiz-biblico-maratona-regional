import { RankingUser } from "@/types/rankingUser";

type RankingPodiumProps = {
  ranking: RankingUser[];
};

function EmptySlot({ position }: { position: "first" | "second" | "third" }) {
  const icon =
    position === "first" ? "🥇" :
    position === "second" ? "🥈" :
    "🥉";

  const title =
    position === "first"
      ? "1º lugar em aberto"
      : position === "second"
      ? "2º lugar em aberto"
      : "3º lugar em aberto";

  return (
    <div className="flex flex-col items-center justify-center h-full text-slate-400">
      <div className="text-4xl mb-2 opacity-70">
        {icon}
      </div>

      <p className="text-sm font-semibold text-slate-500">
        {title}
      </p>

      <p className="text-xs text-slate-400 mt-1">
        Aguardando participantes
      </p>
    </div>
  );
}

export default function RankingPodium({
  ranking,
}: RankingPodiumProps) {
  const sortedRanking = [...ranking].sort((a: RankingUser, b: RankingUser) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return (
      new Date(a.created_at ?? 0).getTime() -
      new Date(b.created_at ?? 0).getTime()
    );
  });

  function getUser(index: number) {
    return sortedRanking[index];
  }

  const first = getUser(0);
  const second = getUser(1);
  const third = getUser(2);

  const mobileSlots = [
    sortedRanking[0],
    sortedRanking[1],
    sortedRanking[2],
  ];

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col gap-4 mb-8 md:hidden">
        {mobileSlots.map((user, index) => {
          const position = index + 1;

          return (
            <div
              key={user?.user_id ?? position}
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
                    {user?.name ?? "Aguardando participantes"}
                  </p>

                  <p className="text-sm text-slate-500">
                    #{position}
                  </p>
                </div>
              </div>

              <span className="font-bold text-indigo-600">
                {user?.score ?? 0} pts
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-4 mb-8 items-end">
        <div className="bg-white rounded-2xl shadow-md p-4 text-center h-40 flex flex-col justify-center">
          {second ? (
            <>
              <span className="text-3xl mb-2">🥈</span>

              <h2 className="font-semibold text-slate-800">
                {second.name}
              </h2>

              <p className="text-indigo-600 font-bold">
                {second.score} pts
              </p>
            </>
          ) : (
            <EmptySlot position="second" />
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center h-52 border-2 border-yellow-400 flex flex-col justify-center">
          {first ? (
            <>
              <span className="text-5xl mb-2">👑</span>

              <h2 className="font-bold text-lg text-slate-800">
                {first.name}
              </h2>

              <p className="text-indigo-600 font-bold text-xl">
                {first.score} pts
              </p>
            </>
          ) : (
            <EmptySlot position="first" />
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 text-center h-40 flex flex-col justify-center">
          {third ? (
            <>
              <span className="text-3xl mb-2">🥉</span>

              <h2 className="font-semibold text-slate-800">
                {third.name}
              </h2>

              <p className="text-indigo-600 font-bold">
                {third.score} pts
              </p>
            </>
          ) : (
            <EmptySlot position="third" />
          )}
        </div>
      </div>
    </>
  );
}