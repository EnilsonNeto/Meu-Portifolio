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

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap:  700px;
    margin-bottom: 35px;
}

.onePart h2 {
    font-size: 4rem;
    margin-left: 400px;
    color: var(--purple-light);
}


.onePart p {
    text-align: justify;
    margin-left: 45px;
    padding-top: 5px;
    
    font-size: 1.2rem;
}



`;