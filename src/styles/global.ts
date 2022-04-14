import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --light-blue: #007FFF;
    --dark-blue: #17224D;
    --white: #F5FAFA;
    --light-green: #17E9E1;
    --logo-blue: #337AB7;
    --sub-text: #434343;
    --background: #CFD8DC;
    --black: #000000

    --font-maven: 'Maven Pro', sans-serif;
    --font-mulish: 'Mulish', sans-serif;
  } 

body, div, ul, button, h1, p, img, h2, h3, nav, a {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    text-decoration: none;
  input, select {
    outline: none;
  }
  button{
    cursor: pointer;
  }

}

body {
    overflow: auto;
    height: 100vh;
    display: block;
    background-color: var(--background);
}
#root {
    height: 100%;
  }

::-webkit-scrollbar {
  width: 12px;              
};

::-webkit-scrollbar-track {
  background-color: #F5FAFA;
  border-radius: 10px;
};

::-webkit-scrollbar-thumb {
  background-color: var(--light-blue);    
  border-radius: 10px;
};

`;

export default GlobalStyle;
