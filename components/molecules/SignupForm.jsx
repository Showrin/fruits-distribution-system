import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import FdsButton from "../atoms/FdsButton";
import { validateSignupForm } from "@/services/validateForm";

const SignupForm = (props) => {
  const { onSubmit } = props;

  return (
    <Box
      sx={{
        ".MuiTextField-root": {
          display: "flex",
          width: "100%",
          marginBottom: "16px",
        },
        ".MuiFormHelperText-root": {
          marginLeft: 0,
        },
      }}
    >
      <Typography
        component="h5"
        variant="h5"
        gutterBottom={true}
        sx={{
          marginBottom: "24px",
        }}
      >
        Sign Up
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password1: "",
          password2: "",
        }}
        validate={validateSignupForm}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password1"
            />
            <Field
              component={TextField}
              type="password"
              label="Confirm Password"
              name="password2"
            />
            <FdsButton
              variant="contained"
              color="primary"
              onClick={submitForm}
              isLoading={isSubmitting}
            >
              Submit
            </FdsButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
