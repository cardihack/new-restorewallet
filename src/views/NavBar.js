import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className={classes.root}>
      <Header
        brand="Wallet Connect"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
    </div>
  );
}
