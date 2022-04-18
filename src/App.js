import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header/Header";

import Home from "./Components/Home";

import Blogs from "./Components/Blogs";
import About from "./Components/About";
import Login from "./Components/UserManegment/Login";
import Signup from "./Components/UserManegment/Signup";
import NotFound404 from "./Components/NotFound404";
import Checkout from "./Components/Checkout";
import { Route, Routes } from "react-router-dom";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer";
import ResetPass from "./Components/UserManegment/ResetPass";
import Carousel from "./Components/Header/Carousel/Carousel";
import RequireAuth from "./Components/Header/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Home />}></Route>
        <Route path="/services" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/resetPass" element={<ResetPass />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
