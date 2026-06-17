import { use } from "react";
import Result from "@/components/result/Result";

export default function ResultPage({ params }: { params: Promise<{ resultId: string }> }) {
  const { resultId } = use(params);

  return <Result resultId={resultId} />;
}