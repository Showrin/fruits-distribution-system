import Head from "next/head";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>FDS: Fruit Delivery System</title>
        <meta name="description" content="A supply ecosystem for fruits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">Home</Container>
    </>
  );
}
