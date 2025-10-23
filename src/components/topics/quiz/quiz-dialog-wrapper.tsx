"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import QuizDialog from "./quiz-dialog";
import { QuizQuestion } from "@/types";

interface QuizDialogWrapperProps {
  questions: QuizQuestion[];
  trigger: React.ReactNode;
}

const QuizDialogWrapper = ({ questions, trigger }: QuizDialogWrapperProps) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl  max-h-[90vh] overflow-y-auto [&>button]:hidden bg-indigo-600 p-4 sm:p-6">
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <QuizDialog quizQuestions={questions} />
      </DialogContent>
    </Dialog>
  );
};

export default QuizDialogWrapper;
