import React from "react";

interface ProgressIndicatorProps {
  progress: number;
  showPercentage?: boolean;
}

export default function ProgressIndicator({
  progress,
  showPercentage = true,
}: ProgressIndicatorProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-16 pb-8">
      <div className="relative">
        {/* Marker */}
        <div
          className="absolute  transform -translate-x-1/2 -translate-y-full top-0 transition-all duration-500 ease-out"
          style={{ left: `${clampedProgress}%` }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white border-4 border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <span className="main-text font-semibold text-sm">You</span>
            </div>
            <span className="border-b border-6 border-transparent border-t-gray-300 " />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${clampedProgress}%` }}
            role="progressbar"
            aria-valuenow={clampedProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progress: ${clampedProgress}%`}
          />
        </div>

        {/* Percentage */}
        {showPercentage && (
          <div
            className="absolute -bottom-8 transform -translate-x-1/2 transition-all duration-500 ease-out"
            style={{ left: `${clampedProgress}%` }}
          >
            <span className="main-text font-semibold">{clampedProgress}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
