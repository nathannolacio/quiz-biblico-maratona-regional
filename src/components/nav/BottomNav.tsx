"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    function isActive(path: string) {
        return pathname === path;
    }

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 shadow-sm md:hidden">
      <div className="h-full flex items-center justify-around">

        <Link
          href="/"
          className={`flex flex-col items-center text-sm transition-colors ${
            isActive("/")
                ? "text-indigo-600"
                : "text-gray-500"
            }`}
        >
          <span>🏠</span>
          <span>Início</span>
        </Link>

        <Link
          href="/chapters"
          className={`flex flex-col items-center text-sm transition-colors ${
            isActive("/chapters")
                ? "text-indigo-600"
                : "text-gray-500"
            }`}
        >
          <span>📚</span>
          <span>Capítulos</span>
        </Link>

        <Link
          href="/ranking"
          className={`flex flex-col items-center text-sm transition-colors ${
            isActive("/ranking")
                ? "text-indigo-600"
                : "text-gray-500"
            }`}
        >
          <span>🏆</span>
          <span>Ranking</span>
        </Link>

      </div>
    </nav>
  );
}