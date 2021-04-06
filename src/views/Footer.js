import { Grid, List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import DiscordLogo from "assets/img/Discord.svg";
import githubLogo from "assets/img/github.svg";
import TelegramLogo from "assets/img/Telegram.svg";
import twitterLogo from "assets/img/twitter.svg";

const useStyles = makeStyles((theme) => ({
  gridList: {
    display: "flex",
    margin: "0 auto",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  listItem: {
    display: "flex",
    "@media (max-width:400px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  ppp: {
    paddingLeft: ".5rem",
  },
  footerLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    fontSize: "14px",
    fontWeight: 500,
    color: "#5878bc",
    lineHeight: "20px",
    textDecoration: "none",
    paddingLeft: ".5rem",
  },
}));

export const Footer = () => {
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
          alignItems: "center",
        }}
        container
        spacing={2}
      >
        <Grid className={classes.gridList}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <a href="/" className={classes.footerLink}>
                <img src={DiscordLogo} alt="Discord Logo" height="20" />
                <p className={classes.ppp}>Discord</p>
              </a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a href="/" className={classes.footerLink}>
                <img src={TelegramLogo} alt="Telegram Logo" height="20" />
                <p className={classes.ppp}>Telegram</p>
              </a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a href="/" className={classes.footerLink}>
                <img src={twitterLogo} alt="twitter Logo" height="20" />
                <p className={classes.ppp}>twitter</p>
              </a>
            </ListItem>
            <ListItem className={classes.listItem}>
              <a href="/" className={classes.footerLink}>
                <img src={githubLogo} alt="github Logo" height="20" />
                <p className={classes.ppp}>Github</p>
              </a>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
