import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import roombaImage from "../res/roomba.png";

export const ProductsPage = () => {
  return (
    <>
      <Grid container>
        {/* Page Title */}
        <Grid item xs={12}>
          <Typography
            sx={{
              letterSpacing: "0.2rem",
            }}
            fontWeight={650}
            variant="h1"
            color="primary"
          >
            Vacuums
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{
              height: 350,
              width: 350,
            }}
            alt="The house from the offer."
            src={roombaImage}
          />
        </Grid>
      </Grid>
    </>
  );
};
