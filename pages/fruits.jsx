import FruitsContainer from "@/containers/FruitsContainer";
import { Container, Typography } from "@mui/material";

const fruits = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Fruits
      </Typography>
      <FruitsContainer />
    </Container>
  );
};

export default fruits;
