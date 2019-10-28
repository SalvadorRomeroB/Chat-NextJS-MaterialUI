import { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: "white",
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: "#F46E9B"
    }
  },
  space: {
    margin: 2
  },
  redBonis: {
    background: "#f48fb1"
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#f48fb1",
    borderRadius: 15
  }
});

const inputSend = () => {
  const classes = useStyles();

  const [message, setMessage] = useState("");
  const [name, setName] = useState("Chava");

  const sendMessage = () => {
    if (message != "") {
      axios({
        method: "post",
        url: "http://167.71.154.9/messages",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: name,
          text: message
        }
      });
      setMessage("");
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              },
              className: classes.input
            }}
            className={classes.space}
            placeholder="Enter message..."
            fullWidth
            margin="normal"
            variant="outlined"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter") sendMessage();
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Fab
            className={classes.redBonis}
            aria-label="add"
            onClick={sendMessage}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};
export default inputSend;
