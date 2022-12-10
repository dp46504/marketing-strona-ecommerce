import { Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="start"
      width={0.8}
    >
      {/* Address Title */}
      <Grid item marginBottom={3}>
        <Typography fontWeight="bold" variant="h4" color="primary">
          Address
        </Typography>
      </Grid>

      {/* Address details */}
      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          Żołnierska 49
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          71-210, Szczecin
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          Poland
        </Typography>
      </Grid>

      {/* Open hours */}
      <Grid item marginBottom={3} marginTop={7}>
        <Typography fontWeight="bold" variant="h4" color="primary">
          Open
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          Mon - Fri : 11.00 - 21:00
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          Sat : 8.00 - 15:00
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          Sun : Closed
        </Typography>
      </Grid>

      {/* Contact */}
      <Grid item marginBottom={3} marginTop={7}>
        <Typography fontWeight="bold" variant="h4" color="primary">
          Contact
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          Telephone : 12 345 67 89
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="primary" letterSpacing={1.8}>
          E-mail : i-robot@gmail.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
