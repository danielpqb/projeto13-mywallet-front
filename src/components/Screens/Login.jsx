import { Link } from "react-router-dom";
import styled from "styled-components";
import InputBox from "../Common/InputBox";
import Logo from "../Common/Logo";
import SubmitButton from "../Common/SubmitButton";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Logo />

      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox name="email" placeholder="Email" />
        <InputBox name="password" placeholder="Senha" />

        <SubmitButton>Entrar</SubmitButton>
      </RegisterForm>

      <Link to={"/register"}>Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;

    padding: 20px;

    font-weight: 700;
    font-size: 15px;

    color: #ffffff;
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
