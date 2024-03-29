import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ErrorPage,
  AboutUs,
  Contact,
  Store,
  CartPage,
} from "./Pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="/AboutUs"
          element={<AboutUs />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/Contact"
          element={<Contact />}
          errorElement={<ErrorPage />}
        />
        <Route path="/Store" element={<Store />} errorElement={<ErrorPage />} />
        <Route
          path="/CartPage"
          element={<CartPage />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
