import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import careIcon from "../assets/care-icon.png";
////////////////////////////
//      HEADER STYLE      //
////////////////////////////

const HeaderStyle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  padding: 1% 2%;
  height: 25px;
  background-image: linear-gradient(#21333e, ghostwhite);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: ghostwhite;
`;

const ImageStyle = styled.img`
  height: 50px;
`;

///////////////////////////
//      HEADER CODE      //
///////////////////////////

function Header() {
  return (
    <HeaderStyle>
      <NavLink to="/listings">
        <ImageStyle src={careIcon} alt="" />
      </NavLink>

      <nav>Nav</nav>
    </HeaderStyle>
  );
}

export default Header;
