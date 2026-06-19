export async function getChaptersStatus() {
  const res = await fetch("/api/chapters", {
    credentials: "include",
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data.data;
}