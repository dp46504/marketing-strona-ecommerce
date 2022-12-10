import { Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./ContactPage.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactPage = () => {
  return (
    <Grid container gap={1} justifyContent="space-around">
      {/* Left side */}
      <Grid item xs={5}>
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
      </Grid>

      {/* Right side */}
      <Grid item xs={5}>
        <Grid container direction="column" marginTop={3}>
          {/* Social Title */}
          <Grid item marginBottom={3}>
            <Typography fontWeight="bold" variant="h4" color="primary">
              Socials
            </Typography>
          </Grid>

          {/* Socials Icons */}
          <Grid container gap={2}>
            {/* Facebook */}
            <Grid item>
              <FacebookIcon color="primary" fontSize="large" />
            </Grid>
            {/* Instagram */}
            <Grid item>
              <InstagramIcon color="primary" fontSize="large" />
            </Grid>
            {/* Whatsapp */}
            <Grid item>
              <WhatsAppIcon color="primary" fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
