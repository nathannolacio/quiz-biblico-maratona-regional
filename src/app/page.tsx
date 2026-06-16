// app/result/page.js (Server Component)
import ResultClient from "@/components/result/Result";
import { Suspense } from "react";

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Carregando resultado...</div>}>
      <ResultClient />
    </Suspense>
  );
}