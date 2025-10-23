"use client";

import { useQuiz } from "@/contexts/quiz-context";
import { QuizQuestion } from "@/types";
import { calculateScore, formatTime } from "@/lib/utils";
import { Clock } from "lucide-react";
import { memo, useEffect } from "react";

const QuizTimer = memo(
  ({ quizQuestions }: { quizQuestions: QuizQuestion[] }) => {
    const { state, dispatch } = useQuiz();
    const { timeLeft, isSubmitted, selectedAnswers } = state;
    useEffect(() => {
      if (timeLeft === 0 && !isSubmitted) {
        // Calculate score based on current answers
        const finalScore = calculateScore({
          quizQuestions,
          selectedAnswers,
        });

        dispatch({ type: "SUBMIT_QUIZ", payload: finalScore });
      }
      const timer = setInterval(() => {
        dispatch({ type: "DECREMENT_TIME" });
      }, 1000);

      return () => clearInterval(timer);
    }, [dispatch, timeLeft, isSubmitted, quizQuestions, selectedAnswers]);

    return (
      <div className="flex-1 flex justify-center">
        <div className="bg-yellow-400 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
          <Clock className="w-4 h-4 text-gray-800" />
          <span className="font-bold text-gray-800 text-sm">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    );
  }
);

QuizTimer.displayName = "QuizTimer";
export default QuizTimer;
