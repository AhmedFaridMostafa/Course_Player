import { ChevronsLeftRightEllipsis } from "lucide-react";

interface WideButtonProps {
  wideVideo: boolean;
  onClick: () => void;
}

export const WideButton = ({ wideVideo, onClick }: WideButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="hidden lg:block p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      aria-label={wideVideo ? "Normal width" : "Wide width"}
    >
      <ChevronsLeftRightEllipsis className="w-5 h-5" />
    </button>
  );
};
