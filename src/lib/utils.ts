import { QuizQuestion } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export function getEncouragementMessage(percentage: number): {
  emoji: string;
  text: string;
} {
  if (percentage >= 90) {
    return {
      emoji: "🔥",
      text: `عظيم يا صديقي، أداؤك في الكورس ده أفضل من ${percentage}٪ من باقي الطلبة! `,
    };
  } else if (percentage >= 80) {
    return {
      emoji: "💪",
      text: `ممتاز! أنت أفضل من ${percentage}٪ من باقي الطلبة، كمل كده!`,
    };
  } else if (percentage >= 70) {
    return {
      emoji: "😎",
      text: `أداء جميل! استمر، وشوية مجهود كمان وهتكون في القمة!`,
    };
  } else if (percentage >= 60) {
    return {
      emoji: "💪",
      text: `عظيم يا صديقي.. أداءك في الكورس ده أفضل من ${percentage}٪ من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا `,
    };
  } else if (percentage >= 50) {
    return {
      emoji: "🚀",
      text: "كويس جدًا يا بطل! واضح إنك ماشي في الطريق الصح شوية مجهود كمان وهتوصّل للي أنت عايزه ",
    };
  } else {
    return {
      emoji: "🌱",
      text: "ما تقلقش يا صديقي كل بطل بدأ من الصفر! استمر، وصدقني المرة الجاية هتكسر الدنيا",
    };
  }
}

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

// Calculate score based on selected answers
export const calculateScore = ({
  quizQuestions,
  selectedAnswers,
}: {
  quizQuestions: QuizQuestion[];
  selectedAnswers: Record<number, string>;
}) => {
  return quizQuestions.reduce((score, question, index) => {
    const selectedAnswer = selectedAnswers[index];
    return selectedAnswer === question.correctAnswer ? score + 1 : score;
  }, 0);
};

export const ENCOURAGEMENTS: Record<
  "Beginner" | "Intermediate" | "Advanced",
  { emoji: string; text: string }[]
> = {
  Beginner: [
    {
      emoji: "🌱",
      text: "ما تقلقش! كل بطل بدأ من الصفر، كمل وهتشوف النتيجة قريب 💪",
    },
    {
      emoji: "🚀",
      text: "طريقك صح، شوية تركيز وهتوصل للهدف قريب جدًا 💫",
    },
    {
      emoji: "💫",
      text: "الخطوات الصغيرة بتعمل فرق كبير، استمر يا بطل 👊",
    },
  ],
  Intermediate: [
    {
      emoji: "💪",
      text: "كويس جدًا! أداءك أحسن من أغلب الطلبة، كمّل بقوة 🔥",
    },
    {
      emoji: "😎",
      text: "أداء جميل! شوية مجهود كمان وهتكون في القمة 🚀",
    },
    {
      emoji: "⚡",
      text: "أنت داخل في المود، ركّز أكتر وهتوصل بسرعة ⚡",
    },
  ],
  Advanced: [
    {
      emoji: "🔥",
      text: "عظيم يا صديقي! أداؤك من النخبة 💥",
    },
    {
      emoji: "💪",
      text: "ممتاز! إنت ضمن الأفضل، وبتقود الطريق 👏",
    },
    {
      emoji: "🏆",
      text: "إنت بتلهم غيرك – خليك على القمة زي ما إنت 🎯",
    },
  ],
};

export function getLevelFromScore(score: number): keyof typeof ENCOURAGEMENTS {
  if (score >= 80) return "Advanced";
  if (score >= 60) return "Intermediate";
  return "Beginner";
}

export function getEncouragementByLevel(level: keyof typeof ENCOURAGEMENTS): {
  emoji: string;
  text: string;
} {
  const messages = ENCOURAGEMENTS[level];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
