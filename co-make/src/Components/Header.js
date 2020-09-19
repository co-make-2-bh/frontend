import React from "react";
import styled from "styled-components";

////////////////////////////
//      HEADER STYLE      //
////////////////////////////

const HeaderStyle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

///////////////////////////
//      HEADER CODE      //
///////////////////////////

function Header() {
  return (
    <HeaderStyle>
      <h1>Logo</h1>
      <nav>Nav</nav>
    </HeaderStyle>
  );
}

export default Header;
