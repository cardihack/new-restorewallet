import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

// core components
import styles from "./headerStyle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import brandLogo from "assets/img/Firmware-logo.svg";

const useStyles = makeStyles(styles);
const number = 0;
export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  return (
    <AppBar
      position="static"
      elevation={number}
      style={{ background: "transparent" }}
    >
      <Toolbar className={classes.toolbar}>
        <List className={classes.list}>
          {!isMobile ? (
            <ListItem
              className={classes.listItem}
              style={{ justifyContent: "center" }}
            >
              <a href="/#" color="transparent" className={classes.navLink}>
                Github
              </a>
              <a href="/" color="transparent" className={classes.navLink}>
                Docs
              </a>
            </ListItem>
          ) : (
            <Link href="#" color="transparent" className={classes.navLink}>
              Github
            </Link>
          )}

          <div
            className={classes.listItem}
            style={{
              flex: "1 1",
              marginTop: "20px",
              marginBottom: "20px",
              marginRight: "-15px",
            }}
          >
            <Link to="/" color="transparent">
              <img
                src={brandLogo}
                alt="wallet firmware"
                className={classes.ImageTitle}
              />
            </Link>
          </div>

          {!isMobile ? (
            <ListItem
              className={classes.listItem}
              style={{ justifyContent: "center" }}
            >
              <Link
                to="/wallet"
                color="transparent"
                className={classes.navLink}
              >
                Wallets
              </Link>
              <Link
                to="/wallet"
                color="transparent"
                className={classes.navLink}
              >
                Apps
              </Link>
            </ListItem>
          ) : (
            <Link to="/wallet" color="transparent" className={classes.navLink}>
              Wallets
            </Link>
          )}
        </List>
        <div style={{ display: "block", position: "absolute", right: "-14px" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu color="primary" />
            </IconButton>
          )}
        </div>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              <List className={classes.listNav}>
                <ListItem className={classes.listItemNav}>
                  <Link to="/" color="transparent" className={classes.navLink}>
                    Home
                  </Link>
                </ListItem>
                <ListItem className={classes.listItemNav}>
                  <Link
                    to="/wallet"
                    color="transparent"
                    className={classes.navLink}
                  >
                    Wallets
                  </Link>
                </ListItem>
                <ListItem className={classes.listItemNav}>
                  <Link
                    to="/wallet"
                    color="transparent"
                    className={classes.navLink}
                  >
                    Apps
                  </Link>
                </ListItem>
                <ListItem className={classes.listItemNav}>
                  <a
                    href="https://github.com/"
                    color="transparent"
                    className={classes.navLink}
                  >
                    Github
                  </a>
                </ListItem>
                <ListItem className={classes.listItemNav}>
                  <a href="/" color="transparent" className={classes.navLink}>
                    Docs
                  </a>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
