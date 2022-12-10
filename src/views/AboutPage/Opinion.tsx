import { Card, Grid, Paper, Rating, Typography } from "@mui/material";
import classes from "./AboutPage.module.css";

interface OpinionProps {
  name: string;
  rating: number;
  text: string;
}

const Opinion = ({ name, rating, text }: OpinionProps) => {
  return (
    <Grid
      container
      direction="column"
      className={classes.opinionContainer}
      gap={2}
      maxWidth={0.3}
      alignItems="center"
      justifyContent="center"
    >
      {/* Name */}
      <Grid item>
        <Typography
          fontWeight="bold"
          textAlign="center"
          variant="body1"
          color="primary"
        >
          {name}
        </Typography>
      </Grid>

      {/* Rating */}
      <Grid item>
        <Rating name="read-only" value={rating} readOnly />
      </Grid>

      {/* Opinion */}
      <Grid item>
        <Typography variant="caption" color="primary">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Opinion;
