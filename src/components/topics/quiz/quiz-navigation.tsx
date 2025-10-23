"use client";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/quiz-context";

import { QuizQuestion } from "@/types";

interface QuizNavigationProps {
  quizQuestions: QuizQuestion[];
  currentQuestion: number;
}
const QuizNavigation = ({
  quizQuestions,
  currentQuestion,
}: QuizNavigationProps) => {
  const { dispatch } = useQuiz();

  const handleSetCurrentQuestion = (index: number) => {
    dispatch({ type: "SET_CURRENT_QUESTION", payload: index });
  };

  return (
    <div className="flex justify-center gap-2 mb-5 flex-wrap">
      {quizQuestions.map((_, index) => {
        const isCurrent = index === currentQuestion;
        return (
          <Button
            key={index}
            onClick={() => handleSetCurrentQuestion(index)}
            size="icon-lg"
            className={`rounded-full font-semibold transition-all text-sm border border-white hover:bg-white hover:text-indigo-600 ${
              isCurrent
                ? "bg-white text-indigo-600 shadow-md scale-105"
                : "bg-indigo-600 text-white"
            }`}
            aria-label={`Question ${index + 1}`}
            aria-current={isCurrent ? "step" : undefined}
          >
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default QuizNavigation;
