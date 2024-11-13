import { Box, Typography, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ArticleService } from "../../services/article.service";
import ArticleCard from "./ArticleCard";

interface ArticleRecommendationsProps {
  currentArticleId: string;
}

const ArticleRecommendations = ({ currentArticleId }: ArticleRecommendationsProps) => {
  const { data: article } = useQuery({
    queryKey: ["article", currentArticleId],
    queryFn: () => ArticleService.getArticle(currentArticleId)
  });

  if (!article?.recommendations?.length) return null;

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" gutterBottom>
        Recommended Articles
      </Typography>
      <Grid container spacing={3}>
        {article.recommendations.slice(0, 3).map((recommendedArticle) => (
          <Grid item xs={12} sm={6} md={4} key={recommendedArticle.id}>
            <ArticleCard article={recommendedArticle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleRecommendations;
