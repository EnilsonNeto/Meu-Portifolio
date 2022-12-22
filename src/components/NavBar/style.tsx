import styled from "styled-components";

export const Container = styled.main `

* {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav {
    background: #0c0011;
    color: white;
    height: 20vh;
}

h1 {
    display: flex;
    align-items: center;
   

    padding: 15px;
    font-weight: 600;
    margin-left: 15px;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
}

ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    
    gap: 50px;
    margin-right: 25px;


}

a {
    text-decoration: none;
    color: white;
}

`;