import styled from "styled-components";

export const Container = styled.main`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.configure {
  display: flex;
  justify-content: center;
  width: 99vw;
  align-items: center;
  /* padding-top: 7%; */
}


img {
  width: 85vw;
  margin: 0 auto;
}



        @media (max-width: 576px) {
      
          img {
          display: block;
          align-items: center;
          justify-content: center;
          width: 100vw;
          margin-top: 8%;
         }
         .configure {
         padding-top: 7%;
         }

         @media (min-width: 320px){
          
          .configure {
          padding-top: 7%;
          }
          img {
            width: 100vw;
          }

         }

      }
`;