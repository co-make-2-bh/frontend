import React from "react";
// import styled from "styled-components";

import { FooterStyle } from '../styles/EverythingElseStyles'

///////////////////////////
//      FOOTER STYLE     //
///////////////////////////

// const FooterStyle = styled.div`
//   height: 50px;
//   padding: 1% 0;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   background-color: #21333e;
// `; (to be deleted)

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
