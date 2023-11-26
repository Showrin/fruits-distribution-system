import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";

export const APP_STATIC_ELEMENTS = {
  NAME: "FDS",
  LOGO: (props) => <GrassOutlinedIcon {...props} />,
  BASE_URL: "/",
  NAV_PAGES: [
    { title: "Home", href: "/" },
    { title: "Fruits", href: "/fruits" },
    { title: "Fields", href: "/fields" },
    { title: "Check Disease", href: "/check-disease" },
  ],
  NAV_PROFILE_AVATAR: {
    TOOLTIP: {
      TITLE: "See Options",
    },
    MENU: {
      ITEMS: [
        {
          title: "Logout",
          onClick: () => {},
        },
      ],
    },
  },
};
