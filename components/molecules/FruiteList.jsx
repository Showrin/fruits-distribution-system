import { Grid } from "@mui/material";
import React from "react";
import ItemCard from "./ItemCard";
import FruitItemContainer from "@/containers/FruitItemContainer";

const FruiteList = (props) => {
  const { fruits } = props;

  return (
    <Grid container={true} spacing={2}>
      {fruits.map((fruit) => (
        <Grid key={fruit.id} item={true} xs={12} sm={6} md={3}>
          <FruitItemContainer
            id={fruit.id}
            name={fruit.fruitName}
            image={fruit.image}
            description={fruit.description}
            price={fruit.price}
            quantity={fruit.quantity}
            seller={fruit.seller}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FruiteList;
