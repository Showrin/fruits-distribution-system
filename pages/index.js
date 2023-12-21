import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import FruitsContainer from "@/containers/FruitsContainer";
import FieldsContainer from "@/containers/FieldsContainer";
import Image from "next/image";
import homeBg from "../public/images/home-bg.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>FDS: Fruit Delivery System</title>
        <meta name="description" content="A supply ecosystem for fruits." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "500px",
          position: "relative",
          left: "50%",
          top: "-40px",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src={homeBg}
          alt="fds-home-bg"
          fill={true}
          objectFit="cover"
          placeholder="blur"
        />
      </Box>
      <Grid container={true} spacing={6}>
        <Grid item={true} xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: "18px", lineHeight: 1.5 }}>
            Welcome to FDS, your gateway to a fresher and more sustainable way
            of nourishing your body and supporting local communities. Our
            seasonal food distribution system is built on the principle that
            nature&apos;s rhythm offers the finest and most nutritious bounty
            each season. By embracing the art of eating with the seasons, you
            not only indulge in flavors at their peak but also promote your
            well-being.
            <br />
            <br />
            At FDS, we curate and deliver a diverse array of seasonal delights
            to your doorstep, ensuring you experience the freshness and benefits
            of nature&apos;s rhythm in every bite. Join us in this journey
            towards better health, sustainability, and community connection -
            one delicious season at a time.
          </Typography>
        </Grid>
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
    </>
  );
}
