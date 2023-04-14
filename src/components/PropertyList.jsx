import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import IconImage from "../logo192.png";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  icon: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  media: {
    width: 150,
    height: 150,
    objectFit: "contain",
    marginRight: theme.spacing(2),
  },
}));

const cardData = [
  {
    title: "Card 1",
    description: "This is card 1 description",
    image: IconImage,
  },
  {
    title: "Card 2",
    description: "This is card 2 description",
    image: IconImage,
  },
  {
    title: "Card 3",
    description: "This is card 3 description",
    image: IconImage,
  },
];

export default function CardList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {cardData.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.title}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <div className={classes.header}>
                    <Typography className={classes.title}>
                      {data.title}
                    </Typography>
                    <IconButton>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <Typography>{data.description}</Typography>
                </div>
                <CardMedia
                  className={classes.media}
                  image={data.image}
                  title="Icon"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}