import { ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "./theme";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import News from "./pages/News";
import Article from "./pages/Article";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="news" element={<News />} />
            <Route path="article/:id" element={<Article />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
