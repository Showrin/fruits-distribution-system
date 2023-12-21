import FieldsContainer from "@/containers/FieldsContainer";
import { Typography } from "@mui/material";

const fields = () => {
  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Fields
      </Typography>
      <FieldsContainer />
    </>
  );
};

export default fields;
