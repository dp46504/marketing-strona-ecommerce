import { Button, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import roomba1 from "../../res/roomba1.png";
import roomba2 from "../../res/roomba2.png";
import roomba3 from "../../res/roomba3.png";
import classes from "./ProductPage.module.css";

export const ProductPage = () => {
  const { id } = useParams();
  const idInt: number = id as unknown as number;
  const images = [roomba1, roomba2, roomba3];
  const titles = ["Roomba j7", "Roomba j8", "Roomba j9"];
  const prices = [275, 300, 199];
  const promos = [false, true, false];

  const nav = useNavigate();

  const descriptions = [
    "The Roomba robot vacuum uses iRobot OS Technology and PrecisionVision Navigation to recognize and avoid common objects in its way like cords, pet waste, socks and shoes. Picking up before you clean is now a thing of the past.",
    "iRobot OS powers your Roomba to clean the way you want it to. It avoids objects in its way, allows you to schedule multiple cleanings per day by continuously learning and adapting to your home; it also empties its bin so you don’t have to.",
    "The Roomba takes vacuuming off your mind with personalized cleaning suggestions powered by the unique intelligencce of iRobot OS. Learns your habits and your routines.",
  ];
  return (
    <Grid className={classes.container} container xs={9}>
      {/* Item Photo */}
      <Grid container xs={6}>
        <img className={classes.image} src={images[idInt]} alt="Product" />
      </Grid>

      {/* Item description with info */}
      <Grid container xs={6}>
        <div className={classes.infoContainer}>
          {/* Product Title */}
          <Typography
            color="primary"
            fontWeight={800}
            fontFamily="Josefin Sans"
            variant="h3"
          >
            {titles[idInt]}
          </Typography>

          {/* Product subtitle */}
          <Typography
            color="primary"
            fontWeight={800}
            fontFamily="Josefin Sans"
            variant="subtitle2"
          >
            One of our best vaccum cleaners
          </Typography>

          {/* Product description */}
          <Typography
            color="primary"
            fontWeight={800}
            fontFamily="Josefin Sans"
            className={classes.description}
          >
            {descriptions[idInt]}
          </Typography>

          {/* Product price */}
          <Grid container xs={12}>
            <Grid item xs={6}>
              <Typography
                className={classes.priceInfo}
                color="primary"
                fontWeight={800}
                fontFamily="Josefin Sans"
                variant="h3"
              >
                {promos[idInt] ? (
                  <div className={classes.priceFrom}>{prices[idInt] + 99}$</div>
                ) : (
                  ""
                )}
                {prices[idInt]}$
              </Typography>
            </Grid>

            {/* Product Buy now button */}
            <Grid item xs={6}>
              <div className={classes.priceButton} onClick={() => nav(`cart`)}>
                Buy now!
                {promos[idInt] ? (
                  <>
                    <br></br>
                    99$ in pocket
                  </>
                ) : (
                  ""
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
