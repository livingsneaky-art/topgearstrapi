import { Box, Container, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 6, mt: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Top Gear Philippines
            </Typography>
            <Typography variant="body2">
              Your ultimate source for automotive news, reviews, and features in the Philippines.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/vehicles" color="inherit">Vehicles</Link>
              <Link href="/news" color="inherit">News</Link>
              <Link href="/reviews" color="inherit">Reviews</Link>
              <Link href="/features" color="inherit">Features</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="https://facebook.com" color="inherit" target="_blank">Facebook</Link>
              <Link href="https://twitter.com" color="inherit" target="_blank">Twitter</Link>
              <Link href="https://instagram.com" color="inherit" target="_blank">Instagram</Link>
              <Link href="https://youtube.com" color="inherit" target="_blank">YouTube</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
