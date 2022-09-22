import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>Simple and Tasty Recipes</h1>
      <p>
        Search recipes for your favorite desserts, appetizers, main dish
        recipes, and more. Find an array of easy recipes as well as home cooking
        tips, kitchen design insights and diet and nutrition information.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
