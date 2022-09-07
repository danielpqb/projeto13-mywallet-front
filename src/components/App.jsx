import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles"
import UserContext from '../Context/UserContext'

import background from '../assets/img/background.jpg'

import Home from "./Screens/Home";
import Portfolio from "./Screens/Portfolio";
import CV from "./Screens/CV";

export default function App() {
  return (
    <Container img={background}>
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cv" element={<CV />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  & {
    /* background-image: ${({ img }) => (`url(${img})`)}; */
    background-color: rgba(15, 15, 15, 0.99);
    
    flex-direction: column;
  }
`