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
    font-size: 2.2rem;
   

    padding: 10px;
    font-weight: 600;
    margin-left: 80px;
    cursor: default;
}

@media (max-width: 870px) {
    h1{
        font-size: 1.2rem;
    }
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* gap: 70px; */
    height: 12vh;
}

ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    
    gap:100px;
    margin-right: 130px;


}

a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}

a:hover {
    filter: brightness(20);
    color: #744a91;
    transition: 0.8s;
}






`;