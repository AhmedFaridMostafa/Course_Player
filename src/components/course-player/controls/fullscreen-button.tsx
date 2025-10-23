import { Expand } from "lucide-react";

interface FullscreenButtonProps {
  onClick: () => void;
}

export const FullscreenButton = ({ onClick }: FullscreenButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      aria-label="Fullscreen"
    >
      <Expand className="w-5 h-5" />
    </button>
  );
};
