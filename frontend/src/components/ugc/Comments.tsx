import { useState } from "react";
import { Box, Typography, TextField, Button, Avatar, Paper } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArticleService } from "../../services/article.service";
import { Comment } from "../../types/article";

interface CommentsProps {
  articleId: string;
}

const Comments = ({ articleId }: CommentsProps) => {
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const { data: comments, isLoading } = useQuery({
    queryKey: ["comments", articleId],
    queryFn: () => ArticleService.getComments(articleId)
  });

  const addCommentMutation = useMutation({
    mutationFn: (newComment: Partial<Comment>) => ArticleService.addComment(newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", articleId] });
      setComment("");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    addCommentMutation.mutate({ content: comment, articleId });
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Comments</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" disabled={!comment.trim()}>
          Post Comment
        </Button>
      </Box>
      {isLoading ? (
        <Typography>Loading comments...</Typography>
      ) : (
        comments?.map((comment: Comment) => (
          <Paper key={comment.id} sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
              <Avatar src={comment.author.avatar}>{comment.author.name[0]}</Avatar>
              <Box>
                <Typography variant="subtitle2">{comment.author.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {format(new Date(comment.createdAt), "MMM d, yyyy")}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2">{comment.content}</Typography>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default Comments;
