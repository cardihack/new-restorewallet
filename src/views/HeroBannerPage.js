import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import FirmwareBannerLogo from "assets/img/Firmware-banner.png";
import ethereumLogo from "assets/img/ethereum.png";
import consensyslabsLogo from "assets/img/consensys-labs.png";
import gitcoinGrantsLogo from "assets/img/gitcoin-grants.png";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Image01 from "assets/img/top-cont-01.png";
import Image02 from "assets/img/top-cont-02.png";
import Image03 from "assets/img/top-cont-03.jfif";
import Image04 from "assets/img/top-cont-04.png";
import Image05 from "assets/img/top-cont-05.jfif";
import Image06 from "assets/img/top-cont-06.jpg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme.typography.overline = {
  fontSize: "0.8rem",
  lineHeight: "1.35",
  fontWeight: "300",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    fontSize: "18px",
    lineHeight: "1.35",
    fontWeight: "300",
  },
  ppp: {
    paddingLeft: ".5rem",
  },
  footerLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    fontSize: "18px",
    fontWeight: 700,
    color: "#5878bc",
    lineHeight: "20px",
    textDecoration: "none",
  },
}));

export const HeroBannerPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div style={{ margin: "1rem auto" }}>
            <Grid item xs={12} style={{ margin: "2rem" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Wallet Connect</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} style={{ margin: "2rem" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="overline">
                  Open protocol for connecting Wallets to Dapps
                </Typography>
              </ThemeProvider>
            </Grid>
          </div>
          <Grid item xs={10} style={{ width: "100%", margin: "0 auto" }}>
            <div>
              <img
                src={FirmwareBannerLogo}
                alt="Firmware-Banner-Logo"
                width="100%"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            style={{ width: "100%", margin: "0 auto", padding: "4rem 0 0" }}
            container
            spacing={1}
          >
            <Grid item xs={12} md={6} sm={6} style={{ padding: "0 1rem" }}>
              <Grid className={classes.headline}>
                <Typography variant="h5" gutterBottom>
                  What is Wallet Connect?
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "1.40",
                  }}
                >
                  Wallet Connect is an open source protocol for connecting
                  decentralised applications to mobile wallets with QR code
                  scanning or deep linking. A user can interact securely with
                  any Dapp from their mobile phones thus making Wallet Connect a
                  safer choice compared to desktop or browser extension
                  wallets.?
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} sm={6} style={{ padding: "0 1rem" }}>
              <Grid className={classes.headline}>
                <Typography variant="h5" gutterBottom>
                  How does it work?
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "1.40",
                  }}
                >
                  Wallet Connect connects web applications to supported mobile
                  wallets. A Wallet Connect session is started by a scanning a
                  QR code (desktop) or by clicking an application deep link
                  (mobile).
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                margin: "0 auto",
                padding: "4rem 0 2rem",
              }}
              container
            >
              <Grid style={{ margin: "0 auto", width: "100%" }}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 300, color: "#2e4358" }}
                >
                  Top Project Funders
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ width: "100%", margin: "0 auto", padding: "1rem 0" }}
              container
              spacing={5}
            >
              <Grid item xs={4} md={4} sm={4}>
                <img
                  style={{ filter: "grayscale(100%)" }}
                  src={ethereumLogo}
                  alt="ethereum-Logo"
                  width="100%"
                />
              </Grid>
              <Grid item xs={4} md={4} sm={4}>
                <img
                  style={{ filter: "grayscale(100%)" }}
                  src={consensyslabsLogo}
                  alt="consensys-labs-Logo"
                  width="100%"
                />
              </Grid>
              <Grid item xs={4} md={4} sm={4}>
                <img
                  style={{ filter: "grayscale(100%)" }}
                  src={gitcoinGrantsLogo}
                  alt="gitcoin-Grants-Logo"
                  width="100%"
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ width: "100%", margin: "0 auto", padding: "2rem 0" }}
              container
            >
              <Grid style={{ margin: "0 auto", width: "100%" }}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 300, color: "#2e4358" }}
                >
                  Top Code Contributors
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                margin: "0 auto",
                padding: "2rem 0",
                alignItems: "center",
              }}
              container
              spacing={5}
            >
              <Grid item xs={4} md={2} sm={2}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src={Image01}
                    alt="gitcoin-Grants-Logo"
                    width="100%"
                  />
                  <p className={classes.ppp}>Rainbow</p>
                </Link>
              </Grid>
              <Grid item xs={4} md={2} sm={2}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src={Image02}
                    alt="gitcoin-Grants-Logo"
                    width="100%"
                  />
                  <p className={classes.ppp}>Trust</p>
                </Link>
              </Grid>
              <Grid item xs={4} md={2} sm={2}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src={Image03}
                    alt="gitcoin-Grants-Logo"
                    width="100%"
                  />
                  <p className={classes.ppp}>Agent</p>
                </Link>
              </Grid>
              <Grid item xs={4} md={2} sm={2}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src={Image04}
                    alt="gitcoin-Grants-Logo"
                    width="100%"
                  />
                  <p className={classes.ppp}>Wallet</p>
                </Link>
              </Grid>
              <Grid item xs={4} md={2} sm={2}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src={Image05}
                    alt="gitcoin-Grants-Logo"
                    width="100%"
                  />
                  <p className={classes.ppp}>Wallet</p>
                </Link>
              </Grid>
              <Grid item xs={4} md={2} sm={2}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    style={{ filter: "grayscale(100%)" }}
                    src={Image06}
                    alt="gitcoin-Grants-Logo"
                    width="100%"
                  />
                  <p className={classes.ppp}>Coinomi</p>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
