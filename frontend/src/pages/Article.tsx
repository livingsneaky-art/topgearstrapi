import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArticleService } from "../services/article.service";
import SEO from "../components/seo/SEO";
import Comments from "../components/ugc/Comments";
import LeadGenerationForm from "../components/lead-gen/LeadGenerationForm";
import ArticleRecommendations from "../components/news/ArticleRecommendations";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: article, isLoading, error } = useQuery({
    queryKey: ["article", id],
    queryFn: () => ArticleService.getArticle(id!)
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading article</Typography>;
  if (!article) return null;

  return (
    <>
      <SEO
        title={article.seo.title || article.title}
        description={article.seo.description || article.summary}
        keywords={article.seo.keywords}
        image={article.featuredImage.url}
      />
      <Container>
        <Box sx={{ mb: 4 }}>
          <Typography variant="overline" color="text.secondary">
            {article.category}
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            {article.title}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              By {article.author.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {format(new Date(article.publishedDate), "MMMM d, yyyy")}
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <img
              src={article.featuredImage.url}
              alt={article.featuredImage.alt}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </Box>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {article.content}
          </Typography>
          
          <LeadGenerationForm />
          <Comments articleId={id!} />
          <ArticleRecommendations currentArticleId={id!} />
        </Box>
      </Container>
    </>
  );
};

export default Article;
