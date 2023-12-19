import { useContext } from "react";
import FdsButton from "@/components/atoms/FdsButton";
import SignupForm from "@/components/molecules/SignupForm";
import UserContext from "@/contexts/UserContext";
import routes from "@/utils/routes";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const SignupContainer = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const onSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();

    formData.append("username", values.email);
    formData.append("password1", values.password1);
    formData.append("password2", values.password2);

    axios
      .post(routes.users.signup, formData)
      .then(() => {
        setUser({ username: values.email });
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Grid container={true}>
      <Grid
        item={true}
        sm={12}
        md={6}
        sx={{
          margin: "auto",
        }}
      >
        <SignupForm onSubmit={onSubmit} />
        <br />
        <Typography>
          Already have an account?{" "}
          <Link href="/login">
            <FdsButton LinkComponent="a">Log in</FdsButton>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignupContainer;
