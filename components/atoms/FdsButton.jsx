import PropTypes from "prop-types";
import { forwardRef } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { noop } from "@/utils/noop";

const FdsButton = forwardRef((props, ref) => {
  const { isLoading, endIcon, sx, onClick, ...otherProps } = props;

  return (
    <Button
      ref={ref}
      endIcon={
        isLoading ? (
          <CircularProgress size={16} sx={{ color: "#ffffff" }} />
        ) : (
          endIcon
        )
      }
      sx={{
        textTransform: "capitalize",
        ...sx,
      }}
      onClick={isLoading ? noop : onClick}
      {...otherProps}
    />
  );
});

FdsButton.propTypes = {
  endIcon: PropTypes.any,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

FdsButton.defaultProps = {
  endIcon: null,
  isLoading: false,
  onClick: noop,
  sx: {},
};

FdsButton.displayName = "FdsButton";

export default FdsButton;
