import { createGlobalStyle } from "styled-components";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
export const colorObj = {
  lightBlue: '#cce3dd',
  midBlue: '#228283',  
  darkBlue: '#21333e',
}

const GlobalStyle = createGlobalStyle`

html, body, #root, #app{
  height: 100%;
  } 

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 background-color: #FFFFFF;

}

h4, label {
    ${"" /* border: 1px solid ghostwhite; */}
    display: inline-block;
    color: #FFFFFF;
    font-size: 12px;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 4px;
    text-align: center;
    padding: 0;
    margin: 0;
}


button {
  background-color:#cce3dd;
  color: #21333e;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  border: 1px solid #cce3dd;
  padding: 10px 12px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  margin-top: 10px;
}

h1{
  margin: 0;
  padding: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}`;

export default GlobalStyle;
