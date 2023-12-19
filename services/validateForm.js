export const validateLoginForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please, provide your email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Please, provide password.";
  }

  console.log(errors);

  return errors;
};

export const validateSignupForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please, provide your email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password1) {
    errors.password1 = "Please, provide password.";
  }

  if (!values.password2) {
    errors.password2 = "Please, confirm your password.";
  }

  console.log(errors);

  return errors;
};
