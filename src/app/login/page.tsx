"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { sendOtp, verifyOtp } from "@/services/auth.client";
import { useToast } from "@/components/ui/Toast";

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const finalCode = code.join("");

  function handleChange(value: string, index: number) {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  async function handleSendOtp() {
    if (!email.trim()) {
      showToast("Digite um email válido", "error");
      return;
    }

    setLoading(true);

    try {
      await sendOtp(email);

      showToast("Código enviado para seu email", "success");
      setStep(2);
    } catch (err) {
      showToast("Erro ao enviar código", "error");
    }

    setLoading(false);
  }

  async function handleVerifyOtp() {
  if (finalCode.length < 6) {
    showToast("Digite o código completo", "error");
    return;
  }

  setLoading(true);

  try {
    await verifyOtp(email, finalCode);

    showToast("Login realizado com sucesso!", "success");

    router.push("/chapters");
  } catch (err: any) {
    showToast(err.message || "Código inválido", "error");

    setCode(Array(6).fill(""));
    inputsRef.current[0]?.focus();
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-slate-100 flex items-center justify-center p-6">

      <div className="flex flex-col gap-10 max-w-3xl w-full bg-white rounded-2xl p-8 shadow-lg">

        {/* HEADER */}
        <h1 className="text-center font-bold text-indigo-600 text-4xl">
          📖 Quiz Bíblico - Efésios
        </h1>

        <div className="space-y-3">
          <h2 className="text-center font-semibold text-gray-700 text-xl">
            Acesse sua conta
          </h2>

          <p className="text-center text-gray-600 leading-relaxed">
            {step === 1
              ? "Digite seu email para receber o código de acesso."
              : "Digite o código de 6 dígitos enviado para seu email."}
          </p>
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-6">

          {/* STEP 1 - EMAIL */}
          {step === 1 && (
            <>
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <Button
                variant="primary"
                onClick={handleSendOtp}
                disabled={loading}
              >
                Enviar código
              </Button>
            </>
          )}

          {/* STEP 2 - OTP */}
          {step === 2 && (
            <>
              <div className="flex justify-center gap-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-14 text-center text-xl font-bold border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ))}
              </div>

              <Button
                variant="primary"
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                Entrar no Quiz
              </Button>
            </>
          )}

        </div>

        {/* FOOTER */}
        <div className="flex justify-center">
          <Button variant="secondary" href="/">
            Voltar
          </Button>
        </div>

      </div>

    </main>
  );
}