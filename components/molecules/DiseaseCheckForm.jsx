import PropTypes from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { SimpleFileUpload } from "formik-mui";
import FdsButton from "../atoms/FdsButton";
import PreviewImageBox from "./PreviewImageBox";

const IMAGE_INPUT_ID = "image-field";

const DiseaseCheckForm = (props) => {
  const { onSubmit } = props;

  return (
    <Box>
      <Formik
        initialValues={{
          image: null,
        }}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Form>
            <PreviewImageBox id={IMAGE_INPUT_ID} image={values.image} />
            <Field
              component={SimpleFileUpload}
              InputProps={{
                id: IMAGE_INPUT_ID,
              }}
              FormControlProps={{
                sx: {
                  display: "none",
                },
              }}
              name="image"
              type="file"
              label="Upload Image"
            />
            <FdsButton
              variant="contained"
              color="primary"
              onClick={submitForm}
              isLoading={isSubmitting}
              disabled={!values.image}
              fullWidth={true}
              sx={{ marginTop: "16px" }}
            >
              Check Image
            </FdsButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

DiseaseCheckForm.propTypes = {
  isLoggingIn: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default DiseaseCheckForm;
