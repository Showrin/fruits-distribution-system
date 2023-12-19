import AppBarContainer from "@/containers/AppBarContainer";
import { Box, Container } from "@mui/material";

const General = (props) => {
  const { children } = props;

  return (
    <Box>
      <AppBarContainer />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default General;
