import { data } from "@/lib/data";
import { notFound } from "next/navigation";

import Header from "@/components/header";
import CoursePlayer from "@/components/course-player";
import Curriculum from "@/components/curriculum";
import CourseMaterials from "@/components/materials";
import CourseTopics from "@/components/topics";
import Comments from "@/components/comments";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const courseData = data.find((course) => course.id === courseId);
  if (!courseData) notFound();
  return (
    <div className="courses">
      {/* Header */}
      <Header courseName={courseData.name} />

      <div className="container">
        {/* Course Player */}
        <CoursePlayer
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://picsum.photos/536/354"
        />

        {/* Course Curriculum */}
        <Curriculum
          leaderboard={courseData.leaderboard}
          progress={courseData.progress}
        />

        {/* Course Materials */}
        <CourseMaterials
          duration={courseData.duration}
          enrolled={courseData.enrolled}
          instructor={courseData.instructor}
          language={courseData.language}
          lessons={courseData.lessons}
        />

        {/* Course Topics */}
        <CourseTopics
          topics={courseData.topics}
          progress={courseData.progress}
        />

        {/* Comments */}
        <Comments comments={courseData.comments} />
      </div>
    </div>
  );
}
