import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";
import InputBox from "../Common/InputBox";
import SubmitButton from "../Common/SubmitButton";

export default function NewSpent() {
  const { userData, setUserData } = useContext(UserContext);

  const [form, setForm] = useState({
    value: "",
    description: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:5000/transactions",
        { ...form, value: -parseFloat(form.value), date: Date.now() },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then(() => {
        axios
          .get("http://localhost:5000/transactions", {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          })
          .then((res) => {
            setUserData({
              ...userData,
              transactions: res.data.transactions,
            });
            navigate("/balance");
          });
      });
  }

  return (
    <Container>
      <Title>
        <h1>Nova saída</h1>
      </Title>
      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox
          name="value"
          placeholder="Valor"
          onChange={(e) => {
            const _value = (e.target.value.replaceAll(/\D/g, "") / 100).toFixed(
              2
            );
            setForm({ ...form, value: _value });
          }}
          value={form.value}
        />
        <InputBox
          name="description"
          placeholder="Descrição"
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
          value={form.description}
        />

        <SubmitButton>Salvar saída</SubmitButton>
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
