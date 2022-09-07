import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import UserContext from "../Context/UserContext";

import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Balance from "./Screens/Balance";
import NewIncome from "./Screens/NewIncome";
import NewSpent from "./Screens/NewSpent";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/balance" element={<Balance />}></Route>
            <Route path="/new-income" element={<NewIncome />}></Route>
            <Route path="/new-spent" element={<NewSpent />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: #8c11be;

    flex-direction: column;
  }
`;
