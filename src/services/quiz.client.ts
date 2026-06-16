export async function saveQuizResult(data: {
  chapter: string;
  score: number;
  total: number;
}) {
  const res = await fetch("/api/quiz/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error || "Failed to save result");
  }

  return json;
}