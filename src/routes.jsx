import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
