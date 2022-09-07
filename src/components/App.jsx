import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import UserContext from "../Context/UserContext";

import Login from "./Screens/Login";
import Register from "./Screens/Register";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/" element={<Register />}></Route>
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
