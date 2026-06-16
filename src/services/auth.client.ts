export async function sendOtp(email: string) {
  await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
}

export async function verifyOtp(email: string, code: string) {
  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Código inválido");
  }

  return data; // { success, user }
}