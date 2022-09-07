import styled from "styled-components";
import InputBox from "../Common/InputBox";
import SubmitButton from "../Common/SubmitButton";

export default function NewIncome() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Title>
        <h1>Nova entrada</h1>
      </Title>
      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox name="value" placeholder="Valor" />
        <InputBox name="description" placeholder="Descrição" />

        <SubmitButton>Salvar entrada</SubmitButton>
      </RegisterForm>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

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

const RegisterForm = styled.form`
  & {
    flex-direction: column;

    width: 100%;
    height: 50%;

    text-align: center;
  }
`;

const Title = styled.div`
  & {
    justify-content: flex-start;

    margin-bottom: 20px;
  }
`;
