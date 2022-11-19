import { Grid, Typography } from "@mui/material";
import { RackItem } from "../../components/RackItem/RackItem";
import roomba1 from "../../res/roomba1.png";
import roomba2 from "../../res/roomba2.png";
import roomba3 from "../../res/roomba3.png";
import classes from "./ProductsPage.module.css";

export const ProductsPage = () => {
  return (
    <>
      <Grid container>
        {/* Page Title */}
        <Grid item xs={12}>
          <Typography
            fontFamily="Carter One"
            sx={{
              marginTop: "2rem",
              letterSpacing: "0.07rem",
            }}
            fontWeight={650}
            variant="h2"
            color="primary"
          >
            Vacuums
          </Typography>
        </Grid>

        <Grid item xs={12}></Grid>
        <div className={classes.rack}>
          <RackItem
            title="Roomba j7"
            price={275}
            image={roomba1}
            id={0}
            promo={false}
          />
          <RackItem
            title="Roomba j8"
            price={399}
            image={roomba2}
            id={1}
            promo
          />
          <RackItem
            title="Roomba j9"
            price={199}
            image={roomba3}
            id={2}
            promo={false}
          />
        </div>

        {/* <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
            }}
            alt="The house from the offer."
            src={roombaImage}
          /> */}
      </Grid>
    </>
  );
};
