import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { KeystoreJson } from "./Keystore";
import { PrivateKey } from "./PrivateKey";
import { Phrase } from "./Phrase";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

theme.typography.body2 = {
  fontSize: "9px",
  lineHeight: "1.35",
  fontWeight: "600",
  "@media (min-width:600px)": {
    fontSize: "13px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1xpx",
  },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: "0" }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  // #212121
  root: {
    height: "100%",
    backgroundColor: "#272c34",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "white",
  },
  import: {
    textAlign: "left",
    margin: "4rem 0 4rem",
    color: "white",
    fontSize: "20px",
    fontWeight: "700",
    padding: "0",
  },
}));

export default function ImportForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={10} sm={5} md={5} style={{ height: "110vh" }}>
        <Grid>
          <Typography variant="h6" className={classes.import}>
            <Link to="/apps" className={classes.import}>
              Import Wallet
            </Link>
          </Typography>
        </Grid>
        <Grid style={{ margin: "0 auto" }}>
          <AppBar
            position="static"
            style={{ margin: "0 auto", backgroundColor: "black" }}
          >
            <Tabs
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#ffffff",
                },
              }}
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab
                label={
                  <ThemeProvider theme={theme}>
                    <Typography variant="body2">Phrase</Typography>
                  </ThemeProvider>
                }
                href="/drafts"
                {...a11yProps(0)}
              />
              <LinkTab
                label={
                  <ThemeProvider theme={theme}>
                    <Typography variant="body2">Keystore JSON</Typography>
                  </ThemeProvider>
                }
                href="/trash"
                {...a11yProps(1)}
              />
              <LinkTab
                label={
                  <ThemeProvider theme={theme}>
                    <Typography variant="body2">Private Key</Typography>
                  </ThemeProvider>
                }
                href="/spam"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div>
              <Phrase />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <KeystoreJson />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div>
              <PrivateKey />
            </div>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
