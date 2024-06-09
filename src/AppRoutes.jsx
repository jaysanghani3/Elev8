import { Route, Routes } from "react-router-dom"
import ProductsCategories from "./pages/Products/ProductsCategories"
import { Homepage, ProductCategoryView, Downloads, Contactus, Aboutus } from "./pages"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductsCategories />} />
      <Route path="/products/:categoryId" element={<ProductCategoryView />} />
      <Route path="/downloads" element={<Downloads/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
};

export default AppRoutes;
