import { Comment } from "@/types";
import AvatarImage from "../AvatarImage";
import { getInitials } from "@/lib/utils";

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <article className="py-6 first:pt-0 border-b border-gray-200 last:border-0">
      <div className="flex items-start gap-4">
        <AvatarImage
          src={comment.avatar}
          fallback={getInitials(comment.name)}
          size={40}
          alt={comment.name}
        />
        <div className="flex-1 min-w-0">
          <div className=" mb-1 space-y-1">
            <h3 className="font-semibold text-gray-900">{comment.name}</h3>
            <span className="text-sm text-gray-500">{comment.timestamp}</span>
          </div>
          <p className="text-gray-500 leading-relaxed">{comment.text}</p>
        </div>
      </div>
    </article>
  );
};

export default CommentCard;
