import React from "react";
import styled from "styled-components";

///////////////////////////
//      FOOTER STYLE     //
///////////////////////////

const FooterStyle = styled.div`
  height: 50px;
  padding: 1% 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #57abe0;
`;

//////////////////////////
//      FOOTER CODE     //
//////////////////////////
function Footer() {
  return (
    <FooterStyle>
      <h4>Hi I am the footer</h4>
    </FooterStyle>
  );
}

export default Footer;
