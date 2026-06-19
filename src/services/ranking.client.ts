type RawUser = {
  user_id: string;
  name: string;
  total_score: number;
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
    students: data.students.map((u: RawUser) => ({
      user_id: u.user_id,
      name: u.name,
      score: u.total_score,
    })),
    leaders: data.leaders.map((u: RawUser) => ({
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

  const data = await response.json();

  return {
    students: data.map((u: RawUser) => ({
      user_id: u.user_id,
      name: u.name,
      score: u.total_score,
    })),
    leaders: [],
  };
}

export async function getRanking(quizId?: string) {
  if (quizId) {
    return await getRankingByQuiz(quizId);
  }

  return await getGeneralRanking();
}