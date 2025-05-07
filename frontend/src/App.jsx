import Navbar from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loginpage from "./pages/Loginpage/Loginpage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Cart from "./pages/Cart-pizza/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import { useContext } from "react";
import { UserContex } from "./context/UserContext";

function App() {
  const { token } = useContext(UserContex);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Registerpage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Loginpage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
