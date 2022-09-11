import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputBox from "../Common/InputBox";
import Logo from "../Common/Logo";
import SubmitButton from "../Common/SubmitButton";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.get("http://localhost:5000/", form);

    navigate("/balance");
  }

  return (
    <Container>
      <Logo />

      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
        />
        <InputBox
          name="password"
          placeholder="Senha"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          value={form.password}
        />

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
