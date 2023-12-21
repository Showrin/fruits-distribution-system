import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Stack, useTheme } from "@mui/material";

const PreviewImageBox = (props) => {
  const { image, id } = props;
  const [previewImage, setPreviewImage] = useState(null);
  const muiTheme = useTheme();

  useEffect(() => {
    if (!!image) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        setPreviewImage(event.target.result);
      };

      fileReader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <Box
      component="label"
      sx={{
        display: "flex",
        height: "300px",
        width: "300px",
        backgroundColor: muiTheme.palette.grey[200],
        borderRadius: `${muiTheme.shape.borderRadius.toFixed()}px`,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        ":hover": {
          ".Overlay": {
            opacity: 0.5,
          },
        },
      }}
      htmlFor={id}
    >
      <AddIcon sx={{ fontSize: "72px", color: muiTheme.palette.grey[400] }} />
      {/* eslint-disable-next-line */}
      <img
        src={previewImage}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        className="Overlay"
        component={Stack}
        direction="row"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          background: muiTheme.palette.grey[900],
          opacity: 0,
          pointerEvents: "none",
          transition: `opacity 0.15s ${muiTheme.transitions.easing.easeInOut}`,
        }}
      >
        <AddIcon sx={{ fontSize: "72px", color: muiTheme.palette.grey[400] }} />
      </Box>
    </Box>
  );
};

export default PreviewImageBox;
