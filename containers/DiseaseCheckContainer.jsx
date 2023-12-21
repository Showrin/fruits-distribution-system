import { useState } from "react";
import DiseaseCheckForm from "@/components/molecules/DiseaseCheckForm";
import routes from "@/utils/routes";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import axios from "axios";

const DiseaseCheckContainer = () => {
  const [result, setResult] = useState(null);
  const muiTheme = useTheme();

  const onSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();

    formData.append("image", values.image);

    axios
      .post(routes.checkDisease.predict, formData)
      .then((res) => {
        setResult(res.data);
      })
      .catch(() => {})
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Grid container={true}>
      <Grid
        item={true}
        sx={{
          margin: "auto",
        }}
      >
        <DiseaseCheckForm onSubmit={onSubmit} />
        {!!result && (
          <Box
            sx={{
              borderStyle: "dashed",
              borderColor: muiTheme.palette.grey[400],
              borderRadius: `${muiTheme.shape.borderRadius.toFixed()}px`,
              marginTop: "32px",
              padding: "8px 16px",
            }}
          >
            <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
              {result}
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default DiseaseCheckContainer;
