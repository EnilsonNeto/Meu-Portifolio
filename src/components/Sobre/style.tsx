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
    margin-left: 8%;
    font-size: 1.2rem;
    width: 50%;
    height: 50%;
}

.ul2 {
    display: flex;
    align-items: center;
    gap: 65px;
}  

img {
    width: 115px;
    margin-left: 15px;
    margin-right: 20px;
}

.newFlex {
    width: 60%;
    display: flex;
    justify-content: right;
    margin-right: 2%;
}

@media (max-width: 1440px) {
    
    h1{
        font-size: 8rem;
    }
    .newFlex {
        display: flexbox;
        width: 40%;
        margin-left: 15%;
        margin-bottom: 15%;
        margin-top: 5%;
    }

    .ulOne {
        gap: 100px;
    }

    p{
        margin-bottom: 15%;
    }

    img {
        width: 35%;
        margin-bottom: 3%;
    }

    @media (max-width: 1024px){
        h1 {
            font-size: 6rem;
        }
        .ulOne h2 {
            font-size: 3.4rem;
        }
        .newFlex {
            padding-bottom: 30%;
        }
        img {
            width: 37%;
        }
        ul .ul2 {
            width: 70%;
            justify-content: space-around;
            height: 50%;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 4rem;
            }
            .ulOne h2 {
                font-size: 2rem;
            }
            .ul2 p{
                font-size: 1rem;
            }
           .newFlex {
            margin-left: 15px;
           }
        }
    }
}

`;