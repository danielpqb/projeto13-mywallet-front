import styled from "styled-components";

export default function SubmitButton({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.button`
  & {
    background: #a328d6;
    height: 50px;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;

    color: #ffffff;
  }
`;
