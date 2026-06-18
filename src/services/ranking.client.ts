export async function getGeneralRanking() {
  const response = await fetch("/api/ranking");

  if (!response.ok) {
    const errorData = await response.json();
    console.log("Ranking API error:", errorData)
    throw new Error(errorData.error || "Erro ao buscar ranking");
  }

  return response.json();
}