import styled from "styled-components";

export const Container = styled.main`
    
    * {
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

    
    .apresentation p {
        display: flex;
        justify-content: center;
        margin-bottom: 5%;
        margin-top: 1%;
    }
    
    .compounds {
        display: grid;
        grid-template-columns: 60% 60% 60%;
        width: 40%;
        margin-left:5%;
        margin-right:5%;
        gap: 200px;
        /* height: 40%; */
    }

    .compounds img {
        width: 80%;
        margin-left: 15%;
    }

    img{
        border: 1px solid;
        width: 100%;
    }

    .compounds p {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-left: 10%;
    }


    .compounds h4 {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 1%;
        margin-left: 10%;
        text-align: center;
    }

    img:hover {
        border: 10px solid var(--purple-light);
        transition: 0.5s;
        transform: scale(1);
    }
    
    @media (max-width: 1440px) {
        .compounds {
            grid-template-columns: 60% 60% ;
            margin-left: 18%;
        }
        @media (max-width: 768px) {
        .compounds {
            margin-left: 12%;
        }  
          
        h1{
            font-size: 4rem;
        }
        .compounds h4 {
            font-size: 1rem;
        }
        .compounds p {
            font-size: 0.6rem;
        }
    }
}   
`;