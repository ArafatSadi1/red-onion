import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import banner from "../../../images/bannerbackground.png";

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const getInputText = event =>{
        const text = event.target.value;
        setSearchText(text);
    }
  return (
    <div className="mb-5">
      <Card.Img src={banner} alt="Card image" />
      <Card.ImgOverlay style={{height: 500}} className="d-flex justify-content-center mt-5">
        <div className="mt-5 pt-5">
          <h2 className="text-center">Best food waiting for your belly</h2>
          <InputGroup onBlur={getInputText} className="mb-3 w-100 mx-auto rounded-pill">
            <FormControl
              placeholder="Search your food"
            />
            <Button variant="outline-danger" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
      </Card.ImgOverlay>
    </div>
  );
};

export default Header;
