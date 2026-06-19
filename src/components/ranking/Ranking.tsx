"use client";

import Button from "../ui/Button";
import RankingHeader from "./RankingHeader";
import RankingFilter from "./RankingFilter";
import UserPositionCard from "./UserPositionCard";
import RankingPodium from "./RankingPodium";
import RankingList from "./RankingList";
import { useEffect, useState } from "react";
import { RankingUser } from "@/types/rankingUser";
import { getRanking } from "@/services/ranking.client";
import RankingSkeleton from "./RankingSkeleton";
import { getMe } from "@/services/user.client";
import { useRouter } from "next/navigation";
import { buildRanking } from "@/helpers/buildRanking";

type RankingProps = {
  quizId?: string;
};

export default function Ranking({
  quizId,
}: RankingProps) {
  const router = useRouter();

  const [ranking, setRanking] = useState<RankingUser[]>([]);
  const [leaders, setLeaders] = useState<RankingUser[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const currentUserData: RankingUser | null =
    currentUserId
      ? ranking.find((user) => user.user_id === currentUserId) ?? null
      : null;

  useEffect(() => {
    async function loadCurrentUser() {
      try {
        const data = await getMe();

        if (data?.user?.id) {
          setCurrentUserId(data.user.id);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadCurrentUser();
  }, []);

  useEffect(() => {
    async function loadRanking() {
      try {
        setLoading(true);

        const { students, leaders } = await getRanking(quizId);

        const rankingUsers = buildRanking(students);

        const leaderUsers = buildRanking(leaders);

        setRanking(rankingUsers);
        setLeaders(leaderUsers);
      } catch (error) {
        console.error(error);
        setError("Não foi possível carregar o ranking no momento.");
      } finally {
        setLoading(false);
      }
    }

    loadRanking();
  }, [quizId]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">

        <RankingHeader quizId={quizId} />

        <RankingFilter />

      <div className="mb-4 relative bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-3 rounded-xl text-sm">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-xl" />
        
        <p className="pl-2">
          ⚖️ Em caso de empate na pontuação, o critério de desempate é o tempo de conclusão.
          Quem finalizar o quiz primeiro fica à frente no ranking.
        </p>
      </div>

        {loading ? (
          <RankingSkeleton />
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <p className="text-red-600 font-medium">
              {error}
            </p>
            <p className="text-red-600 font-medium">
              Tente novamente mais tarde.
            </p>
          </div>
        ) : (
          <>
            <UserPositionCard 
              user={currentUserData}
              ranking={ranking}   
            />

            <RankingPodium 
              ranking={ranking} 
              
              />

            <RankingList
              ranking={ranking}
              currentUserId={currentUserId}
            />

            {leaders.length > 0 && (
              <div className="mt-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">👑</span>
                  <h2 className="text-lg font-bold text-slate-800">
                    Participação dos Líderes
                  </h2>
                </div>

                <p className="text-sm text-slate-500 mb-4">
                  Participam dos quizzes, mas não fazem parte da classificação oficial.
                </p>

                <div className="space-y-2">
                  {leaders.map((leader) => (
                    <div
                      key={leader.user_id}
                      className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                    >
                      <span className="font-medium text-slate-700">
                        {leader.name}
                      </span>

                      <span className="font-semibold text-indigo-600">
                        {leader.score} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="mt-8 flex justify-center">
          <Button onClick={() => router.push("/")}>
            Voltar ao início
          </Button>
        </div>
      </div>
    </main>
  );
}