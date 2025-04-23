import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/Loginpage/Loginpage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Cart from "./pages/Cart-pizza/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
