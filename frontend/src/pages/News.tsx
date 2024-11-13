import { Box, Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "../components/news/ArticleCard";
import { ArticleService } from "../services/article.service";
import SEO from "../components/seo/SEO";

const News = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: ArticleService.getArticles
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading articles</Typography>;

  return (
    <>
      <SEO
        title="Automotive News"
        description="Latest automotive news, reviews, and features from Top Gear Philippines"
        keywords="automotive news, car news, vehicle reviews, Philippines"
      />
      <Container>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Latest News
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Stay up to date with the latest automotive news and reviews.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {articles?.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default News;
