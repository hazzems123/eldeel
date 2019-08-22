import * as React from "react";
import { Button } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import Hambutton from "./Hambutton";
import Searchbutton from "./Searchbutton";
import Line from "./Line";
import Favorites from "./Favorites";
import Shoppingbag from "./Shoppingbag";
import SearchMenu from "./SearchMenu";
import BelowCategories from "./BelowCategories";
import Hamburger from "./HamburgerMenu";

import "./styles.css";

const Mainbar = () => {
  return (
    <div>
      <Navbar className="Navbar" expand="lg">
        <div className="topHalf">
          <Hamburger />
          <SearchMenu />
          <p className="fashLyst">Fashlyst</p>
          <Form inline className="ml-auto ">
            <Shoppingbag data="" />
            <Favorites data="" />
            <p className="login">Login</p>
          </Form>
        </div>
        <Line />
        <div className="belowHalf">
          <BelowCategories />
        </div>
      </Navbar>
    </div>
  );
};
export default Mainbar;
