import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
    :root {
        --background1: 230048;
        --purple-dark: #390353;
        --purple-light: #A200E5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button{
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
    }
    h1 , h2, h3, h4, h5, h6, strong, p {
        font-weight: 600;
    }




`;