import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { fontSize } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  bubble: {
    padding: theme.spacing(1.5),
    background: "#D9D9E0",
    margin: 4
  },
  avatar: {
    margin: 8,
    fontSize: 12,
    backgroundColor: "#C03221"
  }
}));

const Messages = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  // Get request every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://167.71.154.9/messages")
        .then(res => res.data)
        .then(data => setMessages(data));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  console.log("GET");

  // 1 get request
  // useEffect(() => {
  //   axios
  //     .get("http://167.71.154.9/messages")
  //     .then(res => res.data)
  //     .then(data => setMessages(data));
  // }, []);

  return (
    <div>
      <div className="fixed">
        {messages.map(mes => (
          <div>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <Avatar className={classes.avatar}>
                  {mes.name.substring(0, 6)}
                </Avatar>
              </Grid>
              <Grid item xs={11}>
                <Paper className={classes.bubble}>{mes.text}</Paper>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>

      <style jsx>{`
        .fixed {
          overflow: auto;
          height: 450px;
        }
      `}</style>
    </div>
  );
};

export default Messages;
