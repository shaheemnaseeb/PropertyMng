import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0),
      flexDirection: "column",
      alignItems: "flex-center",
    },
  },
  inputField: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2),
    },
  },
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2),
    },
  },
}));

export default function AddCardForm({ handleAddCard }) {
  const classes = useStyles();
  const [name, setTitle] = useState("");
  const [address, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCard({
      name,
      address,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              label="Name"
              required
              value={name}
              onChange={(event) => setTitle(event.target.value)}
              className={classes.inputField}
            />
            <TextField
              label="Address"
              required
              value={address}
              onChange={(event) => setDescription(event.target.value)}
              className={classes.inputField}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add Property
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}