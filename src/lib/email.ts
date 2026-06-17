import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email: string, code: string) {
  await resend.emails.send({
    from: "Quiz Bíblico <onboarding@nathannolacio.dev>",
    to: email,
    subject: "Seu código de acesso",
    html: `
      <h2>Acesse o Quiz Bíblico</h2>
      <p>Use este código para entrar no quiz:</p>
      <h1>${code}</h1>
      <p>Ele expira em alguns minutos.</p>
    `,
  });
}