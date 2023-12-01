import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { APP_STATIC_ELEMENTS } from "@/utils/appConfigs";
import Link from "next/link";
import { useRouter } from "next/router";

function FdsAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    mr: 1,
                    "&, :hover": {
                      background:
                        router.asPath === page.href
                          ? "rgba(255, 255, 255, 0.2)"
                          : "transparent",
                    },
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
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
              {APP_STATIC_ELEMENTS.NAV_PROFILE_AVATAR.MENU.ITEMS.map((item) => (
                <MenuItem key={item.title} onClick={item.onClick}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FdsAppBar;
