import React from "react";
import CustomLink from "../../../CustomLink/CustomLink";
const FoodItems = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <CustomLink className="fs-5 fs-bold" to="/breakfast">
          Breakfast
        </CustomLink>
        <CustomLink className="fs-5 fs-bold mx-5" to="/lunch">
          Lunch
        </CustomLink>
        <CustomLink className="fs-5 fs-bold" to="/dinner">
          Dinner
        </CustomLink>
      </div>
    </div>
  );
};

export default FoodItems;
