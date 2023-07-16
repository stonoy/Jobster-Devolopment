import React from "react";
import img from "../assets/not-found.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Error = () => {
  return (
    <Wrapper className="main-error">
      <img src={img} />
      <h3>Url Does Not Exist</h3>
      <Link to="/landing">Back Home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  img {
    width: 90%;
    height: 80%;
  }
  h3 {
    margin: 1em 0;
  }
`;

export default Error;
