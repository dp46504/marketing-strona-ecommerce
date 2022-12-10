import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import classes from "./AboutPage.module.css";
import boss from "../../res/boss.png";
import lego from "../../res/lego.png";
import dyson from "../../res/dyson.png";
import google from "../../res/google.png";
import amazon from "../../res/amazon.png";
import robotics from "../../res/robotics.png";
import phillips from "../../res/phillips.png";
import Opinion from "./Opinion";

const AboutPage = () => {
  return (
    <Grid
      container
      className={classes.container}
      sx={{ maxWidth: 0.9 }}
      gap={6}
    >
      {/* Title */}
      <Grid item>
        <Typography variant="h3" color="primary" fontWeight="bold">
          About us
        </Typography>
      </Grid>

      {/* Main text 1 */}
      <Grid item>
        <Typography variant="subtitle1" color="primary" letterSpacing={1.8}>
          We design and build innovative home robots, including the Roomba®
          robot vacuum and the Braava® family of mopping robots. But our
          technology isn&apos;t just about robots. It&apos;s about you-and
          finding better ways to help you get more done.
        </Typography>
      </Grid>

      {/* Main text 2 */}
      <Grid item>
        <Typography variant="subtitle1" color="primary" letterSpacing={1.8}>
          iRobot's products, including the award-winning Roomba® Vacuuming Robot
          and the Braava® family of mopping robots, have been welcomed into
          millions of homes around the world and are hard at work every day
          helping people to get more done.
        </Typography>
      </Grid>

      {/* Row with photo */}
      <Grid item>
        <Grid
          container
          gap={2}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {/* Photo */}
          <Grid item xs={4} sx={{ display: "grid", placeItems: "center" }}>
            <img src={boss} width="100%" alt="Boss" />
          </Grid>
          {/* Text to photo */}
          <Grid item xs={6}>
            <Typography
              textAlign="center"
              variant="subtitle1"
              color="primary"
              letterSpacing={1.8}
            >
              Colin M. Angle, a co-founder of iRobot, has served as chairman of
              the board since October 2008, as chief executive officer since
              June 1997, and prior to that, as our president since November
              1992. He has served as a director since October 1992. As a
              co-founder and chief executive officer, Colin provides a critical
              contribution to the board of directors with his detailed knowledge
              of the Company, our employees, our client base, our prospects, the
              strategic marketplace and our competitors. He holds a B.S. in
              Electrical Engineering and an M.S. in Computer Science, both from
              MIT.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Row with partners */}
      {/* We've worked with */}
      <Grid item xs={12} marginTop={10}>
        <Typography
          textAlign="center"
          variant="h3"
          color="primary"
          fontWeight="bold"
        >
          We worked with
        </Typography>
      </Grid>
      <Grid
        container
        marginTop={5}
        gap={8}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={1}>
          <img src={robotics} width="100%" alt="robotics" />
        </Grid>
        <Grid item xs={1}>
          <img src={phillips} width="100%" alt="phillips" />
        </Grid>
        <Grid item xs={1}>
          <img src={google} width="100%" alt="google" />
        </Grid>
        <Grid item xs={1}>
          <img src={dyson} width="100%" alt="dyson" />
        </Grid>
        <Grid item xs={1}>
          <img src={amazon} width="100%" alt="amazon" />
        </Grid>
        <Grid item xs={1}>
          <img src={lego} width="100%" alt="lego" />
        </Grid>
      </Grid>

      {/* Check our opinions */}
      <Grid item marginTop={10}>
        <Typography variant="h3" fontWeight="bold" color="primary">
          Check our opinions
        </Typography>
      </Grid>
      <Grid item marginTop={5}>
        {/* Opinions container */}
        <Grid container gap={7} justifyContent="center">
          <Opinion
            name="Bob"
            rating={4}
            text="I've got a 960, it works great. I upgraded to an i7 yesterday,
          but the 960 is a great model, I use it upstairs."
          />
          <Opinion
            name="Alice"
            rating={5}
            text="To each their own I suppose, obsessive edge cleaning is one of the best features of the S9, for my needs anyway, never occurred to me to want to disable it."
          />
          <Opinion
            name="Karen"
            rating={5}
            text="The S9 is still better (sucking wise) than the i7 and j7 - if you have carpet."
          />
          <Opinion
            name="Katie"
            rating={4}
            text="If you have pets, and carpet, the S9 wins hands down. Yes it's slower to clean, but it does such a better job. The house looks like it was vacuumed by an upright whereas after the J7, I have to check the history to make sure it actually ran."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
