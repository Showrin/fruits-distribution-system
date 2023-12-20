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
import DatePicker from "react-datepicker";
import UserContext from "@/contexts/UserContext";

import "react-datepicker/dist/react-datepicker.css";

const ItemCard = (props) => {
  const {
    name,
    image,
    description,
    price,
    quantity,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    selectedQuantity,
    onBookingButtonClick,
    onAddItem,
    onRemoveItem,
  } = props;
  const muiTheme = useTheme();
  const { user } = useContext(UserContext);

  return (
    <Paper
      component={Stack}
      sx={{
        padding: "16px",
        boxShadow: muiTheme.shadows[1],
        border: `thin solid ${muiTheme.palette.divider}`,
        overflow: "hidden",
        height: "100%",
      }}
    >
      {!!image && (
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
      )}
      <Typography
        component={Stack}
        direction="row"
        alignItems="center"
        sx={{
          fontWeight: 600,
          fontSize: "18px",
          marginTop: "16px",
          flexWrap: "wrap",
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
          marginBottom: "16px",
        }}
      >
        {description}
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          marginTop: "auto",
          marginBottom: "20px",
          fontWeight: 600,
        }}
      >
        {price} BDT{" "}
        <Typography variant="h6" component="span">
          per unit
        </Typography>
      </Typography>
      {(!!onStartDateChange || !!onEndDateChange) && (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            width: "100%",
            marginBottom: "12px",
            ".react-datepicker-wrapper": {
              flexGrow: 1,
              input: {
                width: "100%",
                fontSize: "14px",
                padding: "4px 8px",
              },
            },
          }}
        >
          {onStartDateChange && (
            <DatePicker
              placeholderText="Start Date"
              selected={startDate}
              onChange={onStartDateChange}
              dateFormat="yyyy-MM-dd"
            />
          )}
          {onEndDateChange && (
            <DatePicker
              placeholderText="End Date"
              selected={endDate}
              onChange={onEndDateChange}
              dateFormat="yyyy-MM-dd"
            />
          )}
        </Stack>
      )}
      <Stack
        direction="row"
        alignItems="center"
        sx={{
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
              Book {selectedQuantity} Items
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
