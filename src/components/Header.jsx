import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>Simple and Tasty Recipes</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
        perferendis praesentium quos!
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
  /* margin-bottom: 5rem; */
  padding: 0rem 2rem 2rem 2rem;
  text-align: center;

  h1 {
    letter-spacing: 0.5rem;
  }

  p {
    padding: 1rem 4rem;
    font-size: 1.2rem;
  }
`;

export default Header;
