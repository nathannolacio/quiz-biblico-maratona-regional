import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/quiz">Quiz</Link>
        </li>

        <li>
          <Link href="/result">Resultado</Link>
        </li>

        <li>
          <Link href="/ranking">Ranking</Link>
        </li>
      </ul>
    </nav>
  );
}