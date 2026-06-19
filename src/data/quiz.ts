import { Question } from "@/types/question";
import { ephesiansChapter1 } from "./chapters/ephesians-chapter-1";
import { ephesiansChapter2 } from "./chapters/ephesians-chapter-2";
import { ephesiansChapter3 } from "./chapters/ephesians-chapter-3";
import { ephesiansChapter4 } from "./chapters/ephesians-chapter-4";
import { ephesiansChapter5 } from "./chapters/ephesians-chapter-5";
import { ephesiansChapter6 } from "./chapters/ephesians-chapter-6";
import { chapterRelease } from "@/config/chapterRelease";
import { ephesiansAll } from "./chapters/ephesians-all";

export type Quiz = {
  id: number;
  title: string;
  questions: Question[];
  unlocked: boolean;
};

export const chapters: Quiz[] = [
    {
        id: 1,
        title: "Capítulo 1",
        questions: ephesiansChapter1,
        unlocked: chapterRelease[1],
    },
    {
        id: 2,
        title: "Capítulo 2",
        questions: ephesiansChapter2,
        unlocked: chapterRelease[2]
    },
    {
        id: 3,
        title: "Capítulo 3",
        questions: ephesiansChapter3,
        unlocked: chapterRelease[3]
    },
    {
        id: 4,
        title: "Capítulo 4",
        questions: ephesiansChapter4,
        unlocked: chapterRelease[4]
    },
    {
        id: 5,
        title: "Capítulo 5",
        questions: ephesiansChapter5,
        unlocked: chapterRelease[5]
    },
    {
        id: 6,
        title: "Capítulo 6",
        questions: ephesiansChapter6,
        unlocked: chapterRelease[6]
    },
    {
        id: 7,
        title: "Geral | Todos os capítulos",
        questions: ephesiansAll,
        unlocked: chapterRelease[7]
    }
];