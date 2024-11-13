import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Article } from "../../types/article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="200"
        image={article.featuredImage.url}
        alt={article.featuredImage.alt}
      />
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          {article.category}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {article.summary}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="caption" color="text.secondary">
              By {article.author.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • {format(new Date(article.publishedDate), "MMM d, yyyy")}
            </Typography>
          </Box>
          <Button component={Link} to={`/article/${article.id}`} size="small" color="primary">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
