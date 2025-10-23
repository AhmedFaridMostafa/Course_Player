import { BookOpen, Clock, Globe, User, Users } from "lucide-react";

interface CourseInfoItemProps {
  label: string;
  value: string | number;
}

const courseItems: Record<string, React.ReactNode> = {
  instructor: <User size={20} />,
  duration: <Clock size={20} />,
  lessons: <BookOpen size={20} />,
  enrolled: <Users size={20} />,
  language: <Globe size={20} />,
};

const CourseInfoItem = ({ label, value }: CourseInfoItemProps) => {
  const icon = courseItems[label];
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0 gap-4">
      <div className="flex items-center gap-3">
        <div className="text-gray-600">{icon}</div>
        <span className="text-gray-700 font-medium capitalize">{label}:</span>
      </div>
      <span className="text-gray-900">{value}</span>
    </div>
  );
};
export default CourseInfoItem;
