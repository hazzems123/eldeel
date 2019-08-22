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
import { Flex, Box } from "reflexbox";
import Media from "react-media";
import { useState } from "react";
import DropDownCategories from "./DropDownCategories/DropDownCategories";
import TimeLine from "./TimeLine/TimeLine";
import Card from "./Card/Card";
import "./styles.css";

const Minibar = props => {
  const [viewState, setviewState] = useState("");
  return (
    <div>
      <Navbar className="NavbarMini" expand="lg">
        <Hamburger />
        <p className="FashlystMini">Fashlyst</p>
        <Shoppingbag data="Mini" />
        <Favorites data="Mini" />
      </Navbar>

      <Media query="(min-width: 700px)">
        {matches =>
          matches ? (
            <div className="belowHalfMini">
              <BelowCategories />
            </div>
          ) : (
            <DropDownCategories hideTimeline={props.hideTimeline} />
          )
        }
      </Media>
    </div>
  );
};
export default Minibar;
