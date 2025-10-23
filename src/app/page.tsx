import Link from "next/link";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ITLegend Course Player
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern course player built with Next.js 15, featuring sticky video
          players, progress tracking, and interactive learning features.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Demo Course
          </h2>
          <p className="text-gray-600 mb-6">
            Experience the full course player functionality with our demo
            course.
          </p>

          <Link
            href={`/courses/${data[0].id}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Demo Course
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Sticky Player</h3>
            <p>YouTube-style mobile experience</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-gray-900 mb-2">
              Progress Tracking
            </h3>
            <p>Animated progress with motivation</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-gray-900 mb-2">
              Interactive Features
            </h3>
            <p>Comments, questions, leaderboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
