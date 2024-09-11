import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StatsPage from "./pages/StatsPage";
import FilterResultsPage from "./pages/FilterResultsPage";
import PageBase from "./pages/PageBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="/deliveries/monthly" element={<StatsPage />} />
          <Route path="/filter-results" element={<FilterResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
