import "./App.css";
import Home from "./Page/Home";
import Product from "./Page/Product";
import About from "./Page/About";
import ContactUs from "./Page/ContactUs";
import SignUp from "./Page/SignUp";
import WishList from "./Page/WishList";
import AddToCard from "./Page/AddToCard";
import ProductsInfo from "./Page/ProductsInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginBox from "./Commponent/LoginBox";
import { useState } from "react";

function App() {
  const [getusername, setGetusername] = useState("");
  const getvalueuserdata = (e) => {
    setGetusername(e);
  };
  let user = getusername;
  return (
    <>
      {!user ? (
        <>
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
            }}
          >
            <LoginBox getvalueuserdata={getvalueuserdata} />
          </h1>
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="/AddToCard" element={<AddToCard />} />
            <Route path="/:id" element={<ProductsInfo />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
