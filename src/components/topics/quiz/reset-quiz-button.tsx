"use client";

import { Button } from "@/components/ui/button";
import { useQuiz } from "@/contexts/quiz-context";

import { RotateCcw } from "lucide-react";

export const ResetQuizButton = () => {
  const { dispatch } = useQuiz();
  const handleRetake = () => {
    dispatch({ type: "RESET_QUIZ" });
  };
  return (
    <Button
      onClick={handleRetake}
      className="w-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md flex items-center justify-center gap-2"
    >
      <RotateCcw className="w-5 h-5" />
      Retake Quiz
    </Button>
  );
};
