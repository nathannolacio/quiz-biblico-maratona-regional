type RawRankingUser = {
  user_id: string;
  name: string;
  role?: string;
  total_score: number;
  created_at: string;
};

export async function getGeneralRanking() {
  const response = await fetch("/api/ranking");

  if (!response.ok) {
    const errorData = await response.json();
    console.log("Ranking API error:", errorData)
    throw new Error(errorData.error || "Erro ao buscar ranking");
  }

  const data = await response.json();

  return {
    students: data.students.map((u: RawRankingUser) => ({
      user_id: u.user_id,
      name: u.name,
      score: u.total_score,
    })),
    leaders: data.leaders.map((u: RawRankingUser) => ({
      user_id: u.user_id,
      name: u.name,
      score: u.total_score,
    })),
  }
}

export async function getRankingByQuiz(quizId: string) {
  const response = await fetch("/api/ranking/quiz/" + quizId);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao buscar ranking por quiz");
  }

  const data: RawRankingUser[] = await response.json();

  const students = data.filter((u: RawRankingUser) => u.role === "student");
  const leaders = data.filter((u: RawRankingUser) => u.role === "leader");

  return {
    students: students.map((u) => ({
      user_id: u.user_id,
      name: u.name,
      score: u.total_score,
      created_at: u.created_at,
    })),
    leaders: leaders.map((u) => ({
      user_id: u.user_id,
      name: u.name,
      score: u.total_score,
      created_at: u.created_at,
    })),
  };
}

export async function getRanking(quizId?: string) {
  if (quizId) {
    return await getRankingByQuiz(quizId);
  }

  return await getGeneralRanking();
}