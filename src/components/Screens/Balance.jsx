import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";
import BalanceBox from "../Common/BalanceBox";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Balance() {
  const { userData } = useContext(UserContext);

  return (
    <Container>
      <Header>Olá, {userData.name}</Header>
      <BalanceBox />
      <Footer />
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
  }
`;
