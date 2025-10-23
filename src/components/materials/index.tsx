import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CourseInfoItem from "./course-info-item";

interface CourseInfoProps {
  instructor: string;
  duration: string;
  lessons: number;
  enrolled: number;
  language: string;
}
const CourseMaterials = ({
  instructor,
  duration,
  lessons,
  enrolled,
  language,
}: CourseInfoProps) => {
  const courseMaterials = [
    {
      label: "instructor",
      value: instructor,
    },
    {
      label: "duration",
      value: duration,
    },
    {
      label: "lessons",
      value: lessons,
    },
    {
      label: "enrolled",
      value: `${enrolled} students`,
    },
    {
      label: "language",
      value: language,
    },
  ];

  return (
    <section id="materials" className="course-materials">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Course Materials:
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-between">
          <div className="space-y-0">
            {courseMaterials.map((item, index) => (
              <CourseInfoItem
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
          <div className="space-y-0 hidden md:block">
            {courseMaterials.map((item, index) => (
              <CourseInfoItem
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CourseMaterials;
