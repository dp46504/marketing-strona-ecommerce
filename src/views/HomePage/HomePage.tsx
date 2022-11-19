import { Grid, Typography } from "@mui/material";
import roombaImage from "../../res/roomba.png";
import roombaImageUseCase1 from "../../res/useCase1.png";
import roombaImageUseCase2 from "../../res/useCase2.png";
import roombaImage2 from "../../res/roomba_with_station.png";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Grid container className={classes.container}>
      {/* First row */}
      <Grid container className={classes.row}>
        {/* First Title */}
        <Grid item xs={12}>
          <Typography
            fontFamily="Carter One"
            sx={{
              marginTop: "2rem",
              letterSpacing: "0.07rem",
            }}
            fontWeight={650}
            variant="h3"
            color="primary"
          >
            Are you ready to save some time?{" "}
            <Link to="/products" className={classes.word_anim}>
              Yes
            </Link>{" "}
            or No
          </Typography>
        </Grid>

        {/* First Row */}
        <Grid
          container
          xs={12}
          sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
        >
          <Grid item xs={3}>
            <img src={roombaImage} className={classes.image} alt="Roomba" />
          </Grid>

          <Grid item xs={9} className={classes.first_row_text}>
            <Typography
              fontFamily="system-ui"
              variant="h5"
              color="primary"
              sx={{
                padding: "3rem",
                letterSpacing: "0.15rem",
                lineHeight: "3rem",
              }}
            >
              A simple request to your voice assistant** or via the iRobot Home
              App enables Roomba® robots to clean messes for you, as soon as
              they happen.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container xs={12} className={classes.row}>
        <Grid item xs={8} className={classes.first_row_text}>
          <Typography
            fontFamily="system-ui"
            variant="h5"
            color="primary"
            sx={{
              padding: "3rem",
              letterSpacing: "0.15rem",
              lineHeight: "3rem",
            }}
          >
            Presents you with a photo of obstacles encountered in the iRobot
            Home App so you know about hazards in your home. Remembers how you
            want your robot to react to the obstacle in the future.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            src={roombaImageUseCase1}
            className={classes.image_use_case}
            alt="Roomba"
          />
        </Grid>
      </Grid>

      {/* Third Row */}
      <Grid container xs={12} className={classes.row}>
        <Grid item xs={4}>
          <img
            src={roombaImageUseCase2}
            className={classes.image_use_case}
            alt="Roomba"
          />
        </Grid>

        <Grid item xs={8} className={classes.first_row_text}>
          <Typography
            fontFamily="system-ui"
            variant="h5"
            color="primary"
            sx={{
              padding: "3rem",
              letterSpacing: "0.15rem",
              lineHeight: "3rem",
            }}
          >
            Uses PrecisionVision Navigation to react to your home in real time
            and avoid obstacles like pet waste and charging cords.
          </Typography>
        </Grid>
      </Grid>

      {/* Last row */}
      <Grid container className={classes.row}>
        {/* Last title */}
        <Grid item xs={12}>
          <Typography
            fontFamily="Carter One"
            sx={{
              marginTop: "5rem",
              letterSpacing: "0.07rem",
            }}
            fontWeight={650}
            variant="h3"
            color="primary"
          >
            Get your{" "}
            <Link to="/products" className={classes.word_anim}>
              Roomba
            </Link>{" "}
            today!
          </Typography>
        </Grid>

        <Grid container xs={12} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={9} className={classes.first_row_text}>
            <Typography
              fontFamily="system-ui"
              variant="h5"
              color="primary"
              sx={{
                padding: "3rem",
                letterSpacing: "0.15rem",
                lineHeight: "3rem",
              }}
            >
              Roomba® j7 or j7+ robot vacuums avoid hazards like charging cords
              when it first spots them using PrecisionVision Navigation and
              sends you a photo so you can tell it to avoid or clean around the
              obstacle in the future.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img src={roombaImage2} className={classes.image} alt="Roomba" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
