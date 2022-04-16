import { Route, Routes } from "react-router-dom";
import "./App.css";
import BreakFast from "./Pages/Home/BreakFast/BreakFast";
import Dinner from "./Pages/Home/Dinner/Dinner";
import FoodItems from "./Pages/Home/FoodContainer/FoodContainer";
import FoodDetail from "./Pages/Home/FoodItem/FoodDetails/FoodDetails";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Login from "./Pages/Register/Login/Login";
import SignUp from "./Pages/Register/SignUp/SignUp";
import NavBar from "./Pages/Shared/NavBar/NavBar";
import FoodItem from "./Pages/Home/FoodItem/FoodItem"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Lunch></Lunch>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
        <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        <Route path="/fooddetail/:fooddetailId" element={<FoodDetail></FoodDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
