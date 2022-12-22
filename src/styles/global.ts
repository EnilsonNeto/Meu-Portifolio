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

    html {
        
        @media (max-width: 180px) {
            font-size: 93.75%; //15px
        }
       
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body, input, textarea, button{
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
    }
    h1 , h2, h3, h4, h5, h6, strong, p {
        font-weight: 600;
    }




`;