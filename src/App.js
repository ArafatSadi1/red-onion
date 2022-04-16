import { Route, Routes } from "react-router-dom";
import "./App.css";
import FoodItems from "./Pages/Home/FoodItems/FoodItems";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Register/Login/Login";
import SignUp from "./Pages/Register/SignUp/SignUp";
import NavBar from "./Pages/Shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
