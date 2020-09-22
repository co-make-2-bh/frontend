import styled from "styled-components";



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
  background-image: linear-gradient(#21333e, ghostwhite);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: ghostwhite;
`;

export const ImageStyle = styled.img`
  height: 50px;
`;

////////////////////////////
//      CARD STYLE      //
////////////////////////////

export const CardStyle = styled.div`
  width: 500px;
  height: 600px;
  padding: 40px;
  margin-bottom: 2%;
  background-color: #228283;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: #21333e;
`;
export const TextItem = styled.div`
  ${"" /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; */}
`;

/////////////////////////////
//      LISTING STYLE      //
/////////////////////////////
export const ListingStyle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #21333e;
`;

export const StyledH1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 48px;
  padding-top: 2%;
  color: #21333e;
  text-align: center;
`;


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
