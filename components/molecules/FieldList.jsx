import { Grid } from "@mui/material";
import React from "react";
import FieldItemContainer from "@/containers/FieldItemContainer";

const FieldList = (props) => {
  const { fields } = props;

  return (
    <Grid container={true} spacing={2}>
      {fields.map((field) => (
        <Grid key={field.id} item={true} xs={12} sm={6} md={3}>
          <FieldItemContainer
            id={field.id}
            name={field.title}
            description={field.land_usage}
            price={field.lease_rate}
            quantity={field.size_in_acres}
            seller={field.owner}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FieldList;
