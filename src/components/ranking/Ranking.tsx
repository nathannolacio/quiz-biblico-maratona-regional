"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";
import RankingHeader from "./RankingHeader";
import RankingFilter from "./RankingFilter";
import UserPositionCard from "./UserPositionCard";
import RankingPodium from "./RankingPodium";
import RankingList from "./RankingList";
import { rankings } from "@/data/ranking.mock";

export default function Ranking() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const chapter = searchParams.get("chapter") ?? undefined;

 const ranking =
  chapter &&
  rankings[chapter as keyof typeof rankings]
    ? rankings[chapter as keyof typeof rankings]
    : rankings.general;

  const currentUser = "Nathan";

  const currentUserData =
    ranking.find((user) => user.name === currentUser) ?? null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">

        <RankingHeader
          chapter={chapter}
        />

        <RankingFilter 
          chapter={chapter}
        />

        <UserPositionCard 
          user={currentUserData}
        />

        <RankingPodium 
          ranking={ranking}
        />
        
        <RankingList 
          ranking={ranking}
          currentUser={currentUser}
        />

        <div className="mt-8 flex justify-center">
          <Button onClick={() => router.push("/")}>
            Voltar ao início
          </Button>
        </div>
      </div>
    </main>
  );
}