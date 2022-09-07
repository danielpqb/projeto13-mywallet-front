import styled from "styled-components";

export default function Balance() {
  return (
    <Container>
      <h1>Olá, Fulano</h1>
      <div></div>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;

    flex-direction: column;
    justify-content: flex-start;

    padding: 20px;

    font-weight: 700;
    font-size: 15px;
  }

  h1 {
    font-weight: 700;
    font-size: 26px;
  }
`;
