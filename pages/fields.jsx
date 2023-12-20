import FieldsContainer from "@/containers/FieldsContainer";
import { Container, Typography } from "@mui/material";

const fields = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Fields
      </Typography>
      <FieldsContainer />
    </Container>
  );
};

export default fields;
