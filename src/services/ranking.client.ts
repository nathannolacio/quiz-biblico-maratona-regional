export async function getGeneralRanking() {
  const response = await fetch("/api/ranking");

  if (!response.ok) {
    throw new Error("Erro ao buscar ranking");
  }

  return response.json();
}