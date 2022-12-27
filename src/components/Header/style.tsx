import styled from "styled-components";

export const Container = styled.main`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.configure {
  display: inline-block;
  position: relative;
}

.configure h3 {
  position: absolute;
  top: 40%;
  right: 49%;
  font-size: 40px;
  color: white;
  font-weight: 500;
}

.configure h2 {
  position: absolute;
  top: 44%;
  right: 45%;
  font-size: 4rem;
  color: #00ccff;
  font-weight: 500;
}

.configure p {
  position: absolute;
  top: 52%;
  right: 47%;
  font-size: 1.4rem;
  color: white;
  font-weight: 500;
}



img {
  display: flex;
  width: 78%;
  align-items: center;
  margin: 0 auto;

  filter: brightness(0.5);
}

`;