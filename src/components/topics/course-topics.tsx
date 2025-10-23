import { TopicProps } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Lesson from "./lesson";

import PdfDialog from "./pdf/pdf-dialog";
import QuizDialogWrapper from "./quiz/quiz-dialog-wrapper";

const CourseTopics = ({
  topics,
  className,
}: {
  topics: readonly TopicProps[];
  className?: string;
}) => {
  return (
    <Accordion className={className} type="multiple" defaultValue={["topic-1"]}>
      {topics.map((topic) => (
        <AccordionItem
          key={topic.id}
          value={topic.id}
          className="border! rounded-lg mb-3"
        >
          <AccordionTrigger className="px-4 hover:no-underline">
            <span className="text-lg font-semibold text-gray-900">
              {topic.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-0 pb-0 ">
            <div className="divide-y">
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
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default CourseTopics;
