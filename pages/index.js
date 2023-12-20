import Head from "next/head";
import { Container, Typography } from "@mui/material";
import FruitsContainer from "@/containers/FruitsContainer";

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
        <Typography variant="h4" sx={{ marginBottom: "24px" }}>
          Fruits
        </Typography>
        <FruitsContainer />
      </Container>
    </>
  );
}
