import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box component={RouterLink} to="/" sx={{ flexGrow: 0, mr: 4 }}>
            <img src="/logo.png" alt="Top Gear Philippines" height="40" />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/vehicles">
              Vehicles
            </Button>
            <Button color="inherit" component={RouterLink} to="/news">
              News
            </Button>
            <Button color="inherit" component={RouterLink} to="/reviews">
              Reviews
            </Button>
            <Button color="inherit" component={RouterLink} to="/features">
              Features
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
