"use client";

import Link from "next/link";
import { revisions } from "@/data/revisao/revisions";

export default function Revisao() {
  return (
    <main className="min-h-screen bg-indigo-50/45 px-4 py-6 pb-24">
      <div className="mx-auto max-w-md">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            ⚡ Revisão Relâmpago
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Revise os principais pontos de cada capítulo antes da maratona.
          </p>
        </header>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
              💡
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Como usar
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Leia os tópicos principais e marque cada etapa como concluída para
                acompanhar sua revisão.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 space-y-3">
          {revisions.map((revision) => (
            <Link
                key={revision.id}
                href={`/revisao/${revision.id}`}
                className="
                    group block rounded-2xl border border-slate-200
                    bg-white p-5 shadow-sm
                    transition-all duration-200
                    hover:border-indigo-300 hover:shadow-md
                "
                >
                <div className="flex items-start gap-4">

                    {/* ÍCONE */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100">
                    <span className="text-lg">📖</span>
                    </div>

                    {/* TEXTO */}
                    <div className="flex-1">
                    <h2 className="text-lg font-semibold text-slate-900">
                        {revision.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Revisão rápida para fixação dos principais pontos
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        ⏱ {revision.estimatedTime}
                        </span>

                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                        {revision.topics.length} tópicos
                        </span>
                    </div>
                    </div>

                    {/* CTA */}
                    <div className="text-indigo-600 font-medium group-hover:translate-x-1 transition">
                    →
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}