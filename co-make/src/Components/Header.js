import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyle, ImageStyle } from "../styles/EverythingElseStyles";
import careIcon from "../assets/care-icon.png";
import NavbarMenu from "./NavbarMenu";

function Header() {
  return (
    <HeaderStyle>
      <NavLink to="/listings">
        <ImageStyle src={careIcon} alt="" />
      </NavLink>
      <NavbarMenu />
    </HeaderStyle>
  );
}

export default Header;
