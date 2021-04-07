import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import WalletsLogo from "Wallets.json";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {},
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
  image: {
    width: "80%",
    "@media (max-width:400px)": {
      width: "50%",
    },
  },
}));

export const WalletApps = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0rem auto",
          }}
        >
          <div style={{ margin: "2rem auto" }}>
            <Grid item xs={12} style={{ margin: "0rem" }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Wallets</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={11} style={{ margin: "2rem auto 0rem"}}>
              <ThemeProvider theme={theme}>
                <Typography variant="subtitle1">
                  Multiple iOS and Android wallets support the Wallet connect
                  protocol. Simply scan a QR code from your desktop computer
                  screen to start securely using a dApp with your mobile wallet.
                  Interaction between mobile apps and mobile browsers are
                  supported via mobile deep linking.
                </Typography>
              </ThemeProvider>
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sm={9}
          style={{
            width: "100%",
            margin: "0 auto",
            padding: "2rem 0",
            alignItems: "center",
          }}
          container
          spacing={5}
        >
          {WalletsLogo ? (
            WalletsLogo.map(({ id, name, src }) => (
              <Grid item xs={4} md={3} sm={3} key={id}>
                <Link to="/wallets" className={classes.footerLink}>
                  <img
                    src={src}
                    alt="gitcoin-Grants-Logo"
                    className={classes.image}
                  />
                  <p className={classes.ppp}>{name}</p>
                </Link>
              </Grid>
            ))
          ) : (
            <h6>Loading....</h6>
          )}
        </Grid>
        <Grid>
          <Grid item xs={12} style={{ margin: "2rem" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="body1">
                Open a pull request on <a href="/">Github</a> to add
                your wallet here.
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
