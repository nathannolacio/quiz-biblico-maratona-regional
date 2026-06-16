import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Maratona Bíblica - Efésios</h1>

      <Link href="/quiz">
        Iniciar Quiz
      </Link>
    </main>
  );
}
