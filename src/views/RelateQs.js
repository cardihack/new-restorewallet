import { Grid, makeStyles, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import React from "react";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "32px",
    fontWeight: "300",
    color: "#2e4358",
  },
  subTittle: {
    fontSize: "26px",
    fontWeight: "300",
    color: "#2e4358",
  },
}));

export const RelateQs = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        item
        xs={12}
        sm={7}
        md={7}
        style={{
          width: "100%",
          margin: "0 auto",
          padding: "2rem 0",
          alignItems: "center",
        }}
        container
        spacing={8}
      >
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.title}>
              Frequently Asked Question
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              style={{
                textAlign: "left",
                margin: "2rem auto 1rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.subTittle}>
                  How do I install Wallet Connect?
                </Typography>
              </ThemeProvider>
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
                Wallet Connect is not an app, but a protocol supported by many
                different decentralised applications and wallets. Install any of
                mobile wallets supporting Wallet Connect protocol. Wallet
                Connect wallets are available for Android and iPhone.
              </Typography>
            </Grid>
            <Grid
              style={{
                textAlign: "left",
                margin: "2rem auto 1rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.subTittle}>
                  Is there a token?
                </Typography>
              </ThemeProvider>
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
                There is no token. Wallet Connect protocol does not run on a
                blockchain and there are no fees.
              </Typography>
            </Grid>
            <Grid
              style={{
                textAlign: "left",
                margin: "2rem auto 1rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.subTittle}>
                  How can I help Wallet Connect project?
                </Typography>
              </ThemeProvider>
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
                Wallet Connect project is developed by open source developers of
                various Wallet and Dapp projects. Please contact us on Discord
                or Telegram if you want to help the project.
              </Typography>
            </Grid>
            <Grid
              style={{
                textAlign: "left",
                margin: "2rem auto 1rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.subTittle}>
                  How can I build a wallet supporting Wallet Connect?
                </Typography>
              </ThemeProvider>
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
                There are libraries for React-Native(Javascript), Android (Java)
                and Swift (iOS) available. Read more about it in our
                documentation.
              </Typography>
            </Grid>
            <Grid
              style={{
                textAlign: "left",
                margin: "2rem auto 1rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.subTittle}>
                  How can I add Wallet Connect support to Dapp I developed?
                </Typography>
              </ThemeProvider>
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
                You can support various wallets either using Web3Modal library
                or add a support for Wallet Connect provider directly.
              </Typography>
            </Grid>
            <Grid
              style={{
                textAlign: "left",
                margin: "2rem auto 1rem",
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h6" className={classes.subTittle}>
                  How web frontend and mobile wallets communicate?
                </Typography>
              </ThemeProvider>
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
                Communication happens over a bridge server that relays messages
                without access to their content. The contents are encrypted
                using the session data shared by the QR code or deep link
                between the dapp and the wallet. Read more about it in our
                documentation. Wallet Connect Association runs a public bridge
                server, but you can also roll your own.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
