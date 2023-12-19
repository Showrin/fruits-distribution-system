import { Grid, Typography } from "@mui/material";
import LoginForm from "@/components/molecules/LoginForm";
import axios from "axios";
import routes from "@/utils/routes";
import Link from "next/link";
import FdsButton from "@/components/atoms/FdsButton";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "@/contexts/UserContext";

const LoginContainer = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post(routes.users.login, {
        username: values.email,
        password: values.password,
      })
      .then((res) => {
        setUser({ username: values.email });
        router.push("/");
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
        <LoginForm onSubmit={onSubmit} />
        <br />
        <Typography>
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <FdsButton LinkComponent="a">Create an account</FdsButton>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
