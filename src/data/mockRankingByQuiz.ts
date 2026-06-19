import { RankingUser } from "@/types/rankingUser";

export const mockRankingByQuiz: Record<string, RankingUser[]> = {
  "1": [
    {
      user_id: "1",
      name: "Nathan",
      score: 100,
    },
    {
      user_id: "2",
      name: "João",
      score: 90,
    },
    {
      user_id: "3",
      name: "Maria",
      score: 80,
    },
  ],

  "2": [
    {
      user_id: "2",
      name: "João",
      score: 95,
    },
    {
      user_id: "1",
      name: "Nathan",
      score: 85,
    },
    {
      user_id: "4",
      name: "Pedro",
      score: 70,
    },
  ],

  "3": [
    {
      user_id: "5",
      name: "Ana",
      score: 120,
    },
    {
      user_id: "1",
      name: "Nathan",
      score: 110,
    },
    {
      user_id: "3",
      name: "Maria",
      score: 95,
    },
  ],
};