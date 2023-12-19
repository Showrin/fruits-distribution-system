import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { APP_STATIC_ELEMENTS } from "@/utils/appConfigs";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "@emotion/react";
import FdsButton from "../atoms/FdsButton";
import UserContext from "@/contexts/UserContext";
import { CircularProgress } from "@mui/material";

function FdsAppBar(props) {
  const { onLogout, isLoggingOut } = props;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const muiTheme = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    if (!user) {
      setAnchorElUser(null);
    }
  }, [user]);

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ color: muiTheme.palette.primary.main }}>
          <Link href={APP_STATIC_ELEMENTS.BASE_URL}>
            <APP_STATIC_ELEMENTS.LOGO
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: "32px",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                mr: 4,
              }}
            >
              {APP_STATIC_ELEMENTS.NAME}
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {APP_STATIC_ELEMENTS.NAV_PAGES.map((page) => (
                <MenuItem
                  key={page.title}
                  selected={router.asPath === page.href}
                >
                  {
                    <Link href={page.href}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  }
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            style={{ margin: "0 auto" }}
            href={APP_STATIC_ELEMENTS.BASE_URL}
          >
            <APP_STATIC_ELEMENTS.LOGO
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                fontSize: "32px",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {APP_STATIC_ELEMENTS.NAME}
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {APP_STATIC_ELEMENTS.NAV_PAGES.map((page) => (
              <Link key={page.title} href={page.href}>
                <FdsButton
                  sx={{
                    my: 2,
                    display: "block",
                    mr: 1,
                    "&, :hover": {
                      background:
                        router.asPath === page.href
                          ? muiTheme.palette.primary.light
                          : "transparent",
                      color:
                        router.asPath === page.href
                          ? muiTheme.palette.primary.contrastText
                          : muiTheme.palette.primary.main,
                    },
                  }}
                >
                  {page.title}
                </FdsButton>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!user && (
              <FdsButton
                variant="outlined"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </FdsButton>
            )}
            {!!user && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.username}>
                    {`${user.username[0]}${user.username[1]}`.toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px", ".MuiList-root": { minWidth: "120px" } }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  setAnchorElUser(null);
                  onLogout();
                }}
              >
                <Typography textAlign="center">
                  Logout{" "}
                  {isLoggingOut && (
                    <CircularProgress
                      sx={{
                        height: "1em !important",
                        width: "1em !important",
                        marginLeft: "8px",
                      }}
                    />
                  )}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

FdsAppBar.propTypes = {
  isLoggingOut: PropTypes.bool,
  onLogout: PropTypes.func,
};
export default FdsAppBar;
