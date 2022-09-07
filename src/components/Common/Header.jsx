import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>Olá, Fulano</h1>
      <ion-icon name="exit-outline"></ion-icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 70px;
    justify-content: space-between;
  }

  h1 {
    min-width: fit-content;
    font-weight: 700;
    font-size: 26px;

    padding: 20px 0px;
  }

  ion-icon {
    font-size: 30px;
  }
`;
