import FdsAppBar from "@/components/molecules/FdsAppBar";
import { Box } from "@mui/material";
import React from "react";

const General = (props) => {
  const { children } = props;

  return (
    <Box>
      <FdsAppBar />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default General;
