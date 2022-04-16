import React from "react";
import CustomLink from "../../../CustomLink/CustomLink";

const FoodItems = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center">
        <CustomLink className="fs-5 fs-bold" to="/home/breakfast">Breakfast</CustomLink>
        <CustomLink className="fs-5 fs-bold mx-5" to="/home/lunch">Lunch</CustomLink>
        <CustomLink className="fs-5 fs-bold" to="/home/dinner">Dinner</CustomLink>
      </div>
    </div>
  );
};

export default FoodItems;
