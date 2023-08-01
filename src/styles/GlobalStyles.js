import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    background-color: ${COLORS.bgColor};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  li{
    text-decoration: none;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
/* 
  @font-face {
    font-family: "Cygre Semibold";
    src: url("/Fonts/Package 1 - Cygre Default Full (.ttf)/Cygre-SemiBold.ttf");
  } */

`;

export { GlobalStyles };
