import React from "react";
import useFoodItems from "../../hooks/FoodItems/useFoodItems";
import FoodItems from "../FoodContainer/FoodContainer";
import FoodItem from "../FoodItem/FoodItem";
import Header from "../Header/Header";
import Home from "../Home/Home";

const BreakFast = () => {
  const [foodItems, setFoodItems] = useFoodItems();
  return (
    <>
    <Home></Home>
      <div className="container">
        <div className="row my-5">
          {foodItems.slice(0, 6).map((item) => (
            <FoodItem key={item.id} item={item}></FoodItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default BreakFast;
