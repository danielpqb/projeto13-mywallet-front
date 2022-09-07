import React from "react";
import styled from "styled-components";

export default function InputBox({ name, placeholder }) {
  const [text, setText] = React.useState("");

  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  & {
    background: #ffffff;
    border-radius: 5px;

    height: 60px;

    margin: 10px 0px;
  }

  input {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    padding: 10px;

    color: #000000;
  }
`;
