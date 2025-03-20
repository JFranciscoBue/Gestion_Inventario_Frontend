import Products from "./views/Products";
import Profile from "./components/profile/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
