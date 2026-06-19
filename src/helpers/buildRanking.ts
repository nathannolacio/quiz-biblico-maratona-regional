import { RankingUser } from "@/types/rankingUser";

export function buildRanking(users: RankingUser[]) {
  return users
    .slice()
    .sort((a, b) => b.score - a.score)
    .map((user, index) => ({
      ...user,
      position: index + 1,
    }));
}