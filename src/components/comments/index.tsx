import CommentCard from "./comment-card";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { Comment } from "@/types";

const Comments = ({ comments }: { comments: readonly Comment[] }) => {
  if (!comments.length) {
    return null;
  }

  return (
    <section
      id="comments"
      className="comments bg-white p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

      <div className="space-y-0">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
      {/* Add Comment Form */}

      <div className="space-y-2">
        <textarea
          placeholder="Write your comment..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-gray-200 "
        />
        <Button className="px-4 py-2 text-white rounded-lg transition-colors bg-green-500 focus:bg-green-300 hover:bg-green-300">
          Submit Review
          <MoveRight />
        </Button>
      </div>
    </section>
  );
};

export default Comments;
