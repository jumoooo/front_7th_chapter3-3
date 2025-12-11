/**
 * Comment List Widget UI
 * 
 * 댓글 목록 위젯 컴포넌트
 * 게시물의 댓글 목록을 표시하고 관리
 */

import { Edit2, Plus, ThumbsUp, Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useCommentStore } from "../../../entities/comment/model"
import { useCommentCreate } from "../../../features/comment-create/model"
import { useCommentEdit } from "../../../features/comment-edit/model"
import { useCommentDelete } from "../../../features/comment-delete/model"
import { likeComment as likeCommentAPI } from "../../../features/comment-like/api"
import { usePostStore } from "../../../entities/post/model"
import { highlightText } from "../../../shared/lib/text-utils"
import { useEffect } from "react"

interface CommentListProps {
  postId: number
}

/**
 * 댓글 목록 위젯
 */
export function CommentList({ postId }: CommentListProps) {
  const { comments, fetchComments, setComments } = useCommentStore()
  const { openAddCommentDialog } = useCommentCreate()
  const { openEditCommentDialog } = useCommentEdit()
  const { handleDeleteComment } = useCommentDelete()
  const { searchQuery } = usePostStore()

  const postComments = comments[postId] || []

  useEffect(() => {
    if (postId && !postComments.length) {
      fetchComments(postId)
    }
  }, [postId, fetchComments, postComments.length])

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <Button size="sm" onClick={() => openAddCommentDialog(postId)}>
          <Plus className="w-3 h-3 mr-1" />
          댓글 추가
        </Button>
      </div>
      <div className="space-y-1">
        {postComments.map((comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user?.username || "Unknown"}:</span>
              <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={async () => {
                  try {
                    const currentComment = comments[postId]?.find((c) => c.id === comment.id)
                    if (!currentComment) return
                    const updatedComment = await likeCommentAPI(comment.id, currentComment.likes)
                    setComments({
                      ...comments,
                      [postId]: comments[postId].map((c) =>
                        c.id === comment.id ? { ...c, likes: updatedComment.likes } : c,
                      ),
                    })
                  } catch (error) {
                    console.error("댓글 좋아요 오류:", error)
                  }
                }}
              >
                <ThumbsUp className="w-3 h-3" />
                <span className="ml-1 text-xs">{comment.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => openEditCommentDialog(comment)}>
                <Edit2 className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleDeleteComment(comment.id, postId)}>
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

