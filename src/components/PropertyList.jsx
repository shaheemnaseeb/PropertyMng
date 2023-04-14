import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import IconImage from "../logo192.png";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import PropertyService from "./service/PropertyService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexGrow: "1",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  icon: {
    height: 0,
    paddingTop: "56.25%",
  },
  media: {
    width: 150,
    height: 150,
    objectFit: "contain",
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginBottom: theme.spacing(2),
  },
}));

export default function CardList() {
  const classes = useStyles();
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    PropertyService.listProperty()
      .then((response) => {
        console.log(response);
        setCardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        className={classes.addButton}
      >
        Add Room
      </Button>
      <Grid container spacing={2}>
        {cardData.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.id}>
            <Card className={classes.card}>
              <div className={classes.header}>
                <Typography className={classes.title}>{data.name}</Typography>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </div>
              <CardContent className={classes.cardContent}>
                <div>
                  <CardMedia
                    className={classes.media}
                    image={data.image ? data.image : IconImage}
                    title="Icon"
                  />
                  <Typography>Address: {data.address}</Typography>
                  <Typography>
                    CreatedAt: {new Date(data.createdAt).toLocaleString()}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
