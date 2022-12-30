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
    justify-content: center;
    gap: 45%;
}
.onePart {

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2%;
    }

    .ulOne {
        gap: 100px;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0;
    }

    img {
        width: 35%;
        margin-bottom: 3%;
    }

    @media (max-width: 1024px){
        h1 {
            font-size: 6rem;
        }
        .ulOne{
            gap: 25%;
        }
        .ulOne h2 {
            font-size: 3.4rem;
        }
        .newFlex {
            padding-bottom: 10%;
            width: 50%;
            margin: 0;
        }
        img {
            width: 25%;
        }
        ul .ul2 {
          
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

        @media (max-width: 576px){
            .Fundo {
                width: 100vw;
            }
            
            h1 {
                font-size: 3.5rem;
                margin-bottom: 2%;
            }
            .newFlex {
                margin: 0;
                padding: 0;
            }
            img {
                width: 18vw;
                margin: 0;
                padding: 0;
            }

            }

        }
    }
}

`;