import PropTypes from "prop-types";
import { Box, LinearProgress, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import FdsButton from "../atoms/FdsButton";
import { validateLoginForm } from "@/services/validateForm";

const LoginForm = (props) => {
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
        Login
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validateLoginForm}
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
              name="password"
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

LoginForm.propTypes = {
  isLoggingIn: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default LoginForm;
