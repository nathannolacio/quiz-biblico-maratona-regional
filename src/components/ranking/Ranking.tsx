"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";
import RankingHeader from "./RankingHeader";
import RankingFilter from "./RankingFilter";
import UserPositionCard from "./UserPositionCard";
import RankingPodium from "./RankingPodium";
import RankingList from "./RankingList";
import { useEffect, useState } from "react";
import { RankingUser } from "@/types/rankingUser";
import { getGeneralRanking } from "@/services/ranking.client";
import { GeneralRankingResponse } from "@/types/generalRankingResponse";
import RankingSkeleton from "./RankingSkeleton";
import { getMe } from "@/services/user.client";

export default function Ranking() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [ranking, setRanking] = useState<RankingUser[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const chapter = searchParams.get("chapter") ?? undefined;

  const isChapterView = !!chapter;

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
        const data = await getGeneralRanking();

        const rankingUsers: RankingUser[] = data.map(
          (user: GeneralRankingResponse, index: number) => ({
            user_id: user.user_id,
            position: index + 1,
            name: user.name,
            score: user.total_score,
          })
        );

        setRanking(rankingUsers);
      } catch (error) {
        console.error(error);
        setError("Não foi possível carregar o ranking no momento.");
      } finally {
        setLoading(false);
      }
    }

    loadRanking();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">

        <RankingHeader chapter={chapter} />

        <RankingFilter chapter={chapter} />

        {isChapterView && (
          <div className="mb-4 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-xl">
            📊 O ranking por capítulo ainda não está disponível.
            Exibindo o ranking geral como padrão.
          </div>
        )}

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
            <UserPositionCard user={currentUserData} />

            <RankingPodium ranking={ranking} />

            <RankingList
              ranking={ranking}
              currentUserId={currentUserId}
            />
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