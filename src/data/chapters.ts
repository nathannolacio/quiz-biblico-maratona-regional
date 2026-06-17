import { Question } from "@/types/question";
import { ephesiansChapter1 } from "./chapters/ephesians-chapter-1";
import { ephesiansChapter2 } from "./chapters/ephesians-chapter-2";
import { ephesiansChapter3 } from "./chapters/ephesians-chapter-3";
import { ephesiansChapter4 } from "./chapters/ephesians-chapter-4";
import { ephesiansChapter5 } from "./chapters/ephesians-chapter-5";
import { ephesiansChapter6 } from "./chapters/ephesians-chapter-6";

export type Chapter = {
  id: number;
  title: string;
  questions: Question[];
};

export const chapters: Chapter[] = [
    {
        id: 1,
        title: "Capítulo 1",
        questions: ephesiansChapter1,
    },
    {
        id: 2,
        title: "Capítulo 2",
        questions: ephesiansChapter2,
    },
    {
        id: 3,
        title: "Capítulo 3",
        questions: ephesiansChapter3,
    },
    {
        id: 4,
        title: "Capítulo 4",
        questions: ephesiansChapter4,
    },
    {
        id: 5,
        title: "Capítulo 5",
        questions: ephesiansChapter5,
    },
    {
        id: 6,
        title: "Capítulo 6",
        questions: ephesiansChapter6,
    },
];