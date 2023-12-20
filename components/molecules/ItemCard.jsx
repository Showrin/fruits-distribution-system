import Image from "next/image";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import UserContext from "@/contexts/UserContext";

const ItemCard = (props) => {
  const {
    name,
    image,
    description,
    price,
    quantity,
    selectedQuantity,
    onBookingButtonClick,
    onAddItem,
    onRemoveItem,
  } = props;
  const muiTheme = useTheme();
  const { user } = useContext(UserContext);

  return (
    <Paper
      sx={{
        padding: "16px",
        boxShadow: muiTheme.shadows[1],
        border: `thin solid ${muiTheme.palette.divider}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "200px",
          borderRadius: "inherit",
          margin: "-16px -16px 0",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography
        component={Stack}
        direction="row"
        alignItems="center"
        sx={{
          fontWeight: 600,
          fontSize: "18px",
          marginTop: "16px",
        }}
      >
        {name}
        <Typography
          component="span"
          sx={{
            marginLeft: "4px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          ({quantity} in stock)
        </Typography>
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          marginTop: "4px",
        }}
      >
        {description}
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          marginTop: "16px",
          fontWeight: 600,
        }}
      >
        {price} BDT{" "}
        <Typography variant="h6" component="span">
          per unit
        </Typography>
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          marginTop: "20px",
          ".MuiIconButton-root": { borderRadius: "4px" },
        }}
        spacing={1}
      >
        {selectedQuantity > 0 && (
          <IconButton size="small" onClick={onAddItem} disabled={!user}>
            <AddIcon />
          </IconButton>
        )}
        <Tooltip
          title={!user ? "Please, login to book." : null}
          arrow={true}
          sx={{ width: "100%" }}
          placement="top"
        >
          <Box>
            <Button
              variant={selectedQuantity > 0 ? "contained" : "outlined"}
              fullWidth={true}
              onClick={onBookingButtonClick}
              disabled={!user}
            >
              Book {selectedQuantity} Fruits
            </Button>
          </Box>
        </Tooltip>
        {selectedQuantity > 0 && (
          <IconButton size="small" onClick={onRemoveItem} disabled={!user}>
            <RemoveIcon />
          </IconButton>
        )}
      </Stack>
    </Paper>
  );
};

export default ItemCard;
