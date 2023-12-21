import FruitsContainer from "@/containers/FruitsContainer";
import { Typography } from "@mui/material";

const fruits = () => {
  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Fruits
      </Typography>
      <FruitsContainer />
    </>
  );
};

export default fruits;
