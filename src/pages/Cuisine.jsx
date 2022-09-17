import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Cuisine = () => {
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    // console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 4rem;
  margin: 5rem 0rem;
  justify-content: center;
`;

const Card = styled.div`
  margin: auto;
  /* justify-content: center; */

  img {
    width: 20rem;
    border-radius: 2rem;
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 10px 10px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;

    justify-content: center;
    padding: 1rem 2rem;
  }
`;
export default Cuisine;
