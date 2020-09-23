import styled from "styled-components";
import { colorObj } from './GlobalStyle'



////////////////////////////
//      HEADER STYLE      //
////////////////////////////

export const HeaderStyle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  padding: 1% 2%;
  height: 55px;
  background-image: linear-gradient(${colorObj.darkBlue}, ghostwhite);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: ghostwhite;
`;

export const ImageStyle = styled.img`
  height: 50px;
`;

/////////////////////////////
//      LISTING STYLE      //
/////////////////////////////
export const ListingStyle = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${colorObj.darkBlue};
  `;

export const StyledH1 = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 48px;
    padding-top: 2%;
    color: ${colorObj.darkBlue};
    text-align: center;
  `;

////////////////////////////
//      CARD STYLE      //
////////////////////////////

export const CardStyle = styled.div`
  width: 500px;
  height: 600px;
  padding: 40px;
  margin-bottom: 2%;
  background-color: ${colorObj.darkBlue};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;
  text-align: center;

`;
export const TextItem = styled.div`
  ${"" /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; */}
`;

///////////////////////////
//      LOGIN FORM     //
///////////////////////////

export const FormStyle = styled.form`
  margin-top: 55px;
`

export const ErrorStyle = styled.div`
  margin-top: 20px;
`




///////////////////////////
//      FOOTER STYLE     //
///////////////////////////

export const FooterStyle = styled.div`
  height: 50px;
  padding: 1% 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #21333e;
`;
