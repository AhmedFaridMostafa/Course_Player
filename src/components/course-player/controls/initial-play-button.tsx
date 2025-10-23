import { Play } from "lucide-react";

interface InitialPlayButtonProps {
  onClick: () => void;
}

export const InitialPlayButton = ({ onClick }: InitialPlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors duration-200"
      aria-label="Play video"
    >
      <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105">
        <Play
          className="text-red-400 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ml-1"
          strokeWidth={2.25}
          fill="oklch(70.4% 0.191 22.216)"
        />
      </div>
    </button>
  );
};
