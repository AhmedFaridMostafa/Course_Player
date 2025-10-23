import React, { useEffect, useState } from "react";

import { QuizQuestion } from "@/types";
import { useQuiz } from "@/contexts/quiz-context";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { calculateScore } from "@/lib/utils";

interface QuizCardTestProps {
  selectedOption: string;
  quizQuestions: QuizQuestion[];
}
const QuizCardTest = ({ selectedOption, quizQuestions }: QuizCardTestProps) => {
  const { state, dispatch } = useQuiz();
  const { currentQuestion } = state;
  const [api, setApi] = React.useState<CarouselApi>();
  const [isSelecting, setIsSelecting] = useState(false);

  // Listen to carousel manual scrolling (user drags/swipes)
  useEffect(() => {
    if (!api) return;
    // Only scroll if carousel is not already at the correct position
    if (api.selectedScrollSnap() !== currentQuestion) {
      api.scrollTo(currentQuestion);
    }
    const handleSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      // Only update if different to avoid infinite loop
      if (currentIndex !== currentQuestion) {
        dispatch({ type: "SET_CURRENT_QUESTION", payload: currentIndex });
      }
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, dispatch, currentQuestion]);

  const handleSelectAnswer = (questionIndex: number, answerId: string) => {
    if (isSelecting) return; // Prevent multiple selections

    setIsSelecting(true);

    // Select the answer
    dispatch({ type: "SELECT_ANSWER", payload: { questionIndex, answerId } });

    setTimeout(() => {
      const isLastQuestion = questionIndex === quizQuestions.length - 1;

      if (isLastQuestion) {
        // Calculate final score and submit
        const finalScore = calculateScore({
          quizQuestions,
          selectedAnswers: state.selectedAnswers,
        });
        dispatch({ type: "SUBMIT_QUIZ", payload: finalScore });
      } else {
        // Move to next question
        dispatch({ type: "GO_TO_NEXT_QUESTION" });
        if (api) {
          const nextIndex = questionIndex + 1;
          if (nextIndex < quizQuestions.length) {
            api.scrollTo(nextIndex);
          }
        }
      }

      setIsSelecting(false);
    }, 800);
  };

  return (
    <div className="mx-auto max-w-[390px]">
      <Carousel setApi={setApi} className="w-full max-w-[400px]">
        <CarouselContent>
          {quizQuestions.map((quiz, index) => (
            <CarouselItem key={quiz.question}>
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800 mb-3">
                      {index + 1}.
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {quiz.question}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 mb-6">
                    {quiz.options.map((option) => {
                      const isSelected = selectedOption === option.id;
                      return (
                        <Button
                          key={option.id}
                          onClick={() => handleSelectAnswer(index, option.id)}
                          className={`w-full min-h-12 p-2 rounded-lg text-left transition-all flex items-center justify-start gap-3 ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-600"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                          }`}
                          aria-pressed={isSelected}
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                              isSelected
                                ? "border-white bg-white"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-3 h-3 bg-indigo-600 rounded-sm" />
                            )}
                          </div>
                          <span className="font-medium text-sm">
                            {option.text}
                          </span>
                        </Button>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default QuizCardTest;
