import styled from "styled-components";

export const Container = styled.main`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    /* width: 80%; */
}

.Fundo {
    background: linear-gradient(transparent,#000);
}

h1 {
    display: flex;
    justify-content: center;

    font-size: 10rem;
}

.nav1 nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.ulOne {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 350px;
}

.onePart h2 {
    font-size: 4rem;
    color: var(--purple-light);
}


.ul2 p {
    text-align: justify;
    padding-top: 15px;
    margin-left: 50px;
    font-size: 1.2rem;
}

.ul2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-right: 10px;
    gap: 25px;
}  

img {
    width: 115px;
    margin-left: 15px;
    margin-right: 20px;
}


`;