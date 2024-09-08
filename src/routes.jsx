import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StatsPage from "./pages/StatsPage";
import FilterResultsPage from "./pages/FilterResultsPage";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/deliveries/monthly" element={<StatsPage />}></Route>
        <Route path="/filter-results" element={<FilterResultsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

