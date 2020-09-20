import React from "react";
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
  width: 50px;
  height: 50px;
`;

const LogoStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
///////////////////////////
//      HEADER CODE      //
///////////////////////////

function Header() {
  return (
    <HeaderStyle>
      <LogoStyle>
        <ImageStyle src={careIcon} alt="" />
        <h1>Co-Make</h1>
      </LogoStyle>
      <nav>Nav</nav>
    </HeaderStyle>
  );
}

export default Header;
