import DiseaseCheckContainer from "@/containers/DiseaseCheckContainer";
import { Typography } from "@mui/material";

const checkDisease = () => {
  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Check Disease
      </Typography>
      <DiseaseCheckContainer />
    </>
  );
};

export default checkDisease;
