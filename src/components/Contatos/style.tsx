import styled from "styled-components";

export const Container = styled.main`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
}

h1 {
        display: flex;
        justify-content: center;
        font-size: 10rem;
        padding-top: 5%;
    }

.Fundo{
        background: linear-gradient(#000,transparent);
    }

.contacts {
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-top: 3%;
}

a:hover {
    transition: 0.5s;
    transform: translateY(-35px);
    transform: translate(-16px, -5px) rotate(-16deg) scale(1);
    border-bottom: 3px solid var(--purple-dark);
}

@media (max-width: 1024px) {
    h1 {
            font-size: 6rem;
        }
    @media (max-width: 768px) {
        h1 {
            font-size: 4rem;
        }
        img {
            width: 60%;
        }
        .contacts {
            gap: 0;
        }
        a:hover {
            border: none;
        }
    @media (max-width: 576px) {
        .Fundo {
            width: 100vw;
        }
        h1{
            font-size: 4rem;
        }
        .contacts {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        a {
            padding-left: 5%;
        }


        }

    }
}




`;