import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
import FruitsContainer from "@/containers/FruitsContainer";
import FieldsContainer from "@/containers/FieldsContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>FDS: Fruit Delivery System</title>
        <meta name="description" content="A supply ecosystem for fruits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <Grid container={true} spacing={6}>
          <Grid item={true} xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" sx={{ marginBottom: "24px" }}>
              Fruits
            </Typography>
            <FruitsContainer />
          </Grid>
          <Grid item={true} xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" sx={{ marginBottom: "24px" }}>
              Fields
            </Typography>
            <FieldsContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
