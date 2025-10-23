import { TopicProps } from "@/types";
import Lesson from "./lesson";

import PdfDialog from "./pdf/pdf-dialog";
import QuizDialogWrapper from "./quiz/quiz-dialog-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const CourseTopicsDesktop = ({
  topics,
  className,
}: {
  topics: TopicProps[];
  className?: string;
}) => {
  return (
    <div className={className}>
      {topics.map((topic) => (
        <Card key={topic.id} className="border! rounded-lg mb-3">
          <CardHeader className="px-4 ">
            <CardTitle>{topic.timestamp}</CardTitle>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {topic.lessons.map((lesson, index) => {
              if (lesson.type === "quiz") {
                return (
                  <QuizDialogWrapper
                    key={`${topic.id}-lesson-${index}`}
                    questions={lesson.quizQuestions}
                    trigger={<Lesson lesson={lesson} />}
                  />
                );
              }
              if (lesson.type === "pdf") {
                return (
                  <PdfDialog
                    key={`${topic.id}-lesson-${index}`}
                    title={lesson.title}
                    trigger={<Lesson lesson={lesson} />}
                    pdfUrl={lesson.pdfUrl}
                  />
                );
              }
              return (
                <Lesson key={`${topic.id}-lesson-${index}`} lesson={lesson} />
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default CourseTopicsDesktop;
