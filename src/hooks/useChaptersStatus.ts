import { useEffect, useState } from "react";
import { getChaptersStatus } from "@/services/getChaptersStatus";

type QuizResult = {
  quiz_id: string;
};

export function useChaptersStatus() {
  const [answered, setAnswered] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getChaptersStatus();

      if (data) {
        const answeredIds = data.map((item: QuizResult) =>
          Number(item.quiz_id)
        );

        setAnswered(new Set(answeredIds));
      }

      setLoading(false);
    }

    load();
  }, []);

  return {
    answered,
    loading,
  };
}