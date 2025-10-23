import { ChevronLeft } from "lucide-react";
import React from "react";

import { useQuiz } from "@/contexts/quiz-context";
import { QuizQuestion } from "@/types";
import { Button } from "@/components/ui/button";
import QuizTimer from "./quiz-timer";

const QuizHeader = ({
  currentQuestion,
  quizQuestions,
}: {
  currentQuestion: number;
  quizQuestions: QuizQuestion[];
}) => {
  const { dispatch } = useQuiz();

  const handlePreviousQuestion = () => {
    dispatch({ type: "GO_TO_PREVIOUS_QUESTION" });
  };
  return (
    <div className="flex items-center justify-between mb-5">
      <Button
        onClick={handlePreviousQuestion}
        size={"icon-lg"}
        className="w-9 h-9 absolute rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentQuestion === 0}
        aria-label="Previous question"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <QuizTimer quizQuestions={quizQuestions} />
    </div>
  );
};

export default QuizHeader;
