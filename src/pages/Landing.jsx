import React from "react";
import { Logo } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../assets/main.svg";

const Landing = () => {
  return (
    <Wrapper className="main">
      <nav>
        <Logo />
      </nav>
      <section>
        <div className="hero">
          <h2>Job Search Here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            expedita. Ea voluptatem quam obcaecati fugit eius. Dolores
            recusandae est hic?
          </p>
          <Link className="link" to="/register">
            Login/Register
          </Link>
        </div>
        <div className="logo">
          <img src={img} alt="job search" />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    height: 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding-left: 2em; */
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
  }
  section {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    gap: 5em;
    height: calc(100vh - 5rem);
    align-items: center;
    padding-bottom: 3em;
  }
  img {
    width: 100%;
    display: block;
    max-width: 600px;
    /* margin: 1rem auto; */
    @media (max-width: 992px) {
      display: none;
    }
  }
  h2 {
    font-size: var(--font-big);
    color: var(--bold-font);
  }
  p {
    font-size: var(--font-regular);
    line-height: 1.6;
    color: var(--main-font);
    margin: 1em 0;
  }
  .link {
    display: inline-block;
    text-decoration: none;
    font-size: var(--font-regular);
    padding: 0.6em 1.2em;
    color: whitesmoke;
    background-color: var(--bold-font);
    border: none;
    border-radius: 5px;
  }
`;

export default Landing;
