import styled from "styled-components";

export const Container = styled.main`

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




nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* gap: 70px; */
    height: 12vh;
}

button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 25px;
    position: absolute;
    right: 10px;
    top: 10px;
    display: none;
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

a,button:hover {
    filter: brightness(20);
    color: #744a91;
    transition: 0.8s;
}


@media (max-width: 1200px) {

    h1 {
        font-size: 2rem;
    }

    ul {
        margin-right: 95px;
        font-size: 0.9rem;
    }
}
@media (max-width: 1080px) {

    h1 {
        font-size: 1.4rem;
    }
}

@media (max-width: 768px) {
   
    h1 {
        font-size: 1.2rem;
        margin-right: 50px;
        margin-left: 50px;
        padding: 15px;
    }
    ul {
        margin-right: 15px;
        gap: 70px;
    }
}


`;