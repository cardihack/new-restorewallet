import {
  container,
  transition,
  boxShadow,
  drawerWidth,
} from "assets/jss/material-kit-react.js";

const headerStyle = (theme) => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
  },
  absolute: {
    position: "absolute",
    zIndex: "1100",
  },
  fixed: {
    position: "fixed",
    zIndex: "1100",
  },
  flex: {
    flex: 1,
  },
  appResponsive: {
    margin: "4rem 10px",
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    ...container,
    display: "flex",
    alignItems: "center",
  },
  listItem: {
    color: "#5878bc",
    alignItems: "center",
    padding: "0",
    margin: "0",
  },
  ImageTitle: {
    width: "120px",
    maxWidth: "120px",
    minWidth: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },

  listItemNav: {
    fontSize: "18px",
    color: "#5878bc",
    fontWeight: 500,
    textAlign: "center",
    float: "left",
    position: "relative",
    display: "inline",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: "#5878bc",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "18px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.9375rem",
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  navLinkActive: {
    color: "#000",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  marginRight5: {
    marginRight: "5px",
  },
});

export default headerStyle;
