import { Box, Container } from "@mui/material";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ConnectionStatus from "../components/status/ConnectionStatus";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <ConnectionStatus />
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
