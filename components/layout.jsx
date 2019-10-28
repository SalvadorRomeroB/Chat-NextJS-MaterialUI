import React from "react";
import Head from "next/head";
import InputSend from "../components/inputSend";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#333",
    borderRadius: 15,
    color: "white",
    maxHeight: 600
  },
  input: {
    background: "#121212",
    borderRadius: 15
  },
  title: {
    color: "#f48fb1",
    margin: 15
  }
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> MyChat</title>
      </Head>

      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Container maxWidth="md" className={classes.root}>
            <Typography className={classes.title} variant="h2" align="center">
              MyChat
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              {props.children}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md" className={classes.input}>
            <InputSend />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
