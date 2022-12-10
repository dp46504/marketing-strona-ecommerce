import { Grid, Typography } from "@mui/material";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../res/logo.svg";

export const NavBar = () => {
  return (
    <Grid container className={classes.navbar_container}>
      <Grid item className={classes.navbar_logo}>
        <Link to="/">
          <Logo style={{ color: "red" }} />
        </Link>
        {/* <Typography>LOGO</Typography> */}
      </Grid>

      <Grid item className={classes.navbar_item}>
        <Link to="/products" className={classes.navbar_link}>
          <Typography variant="h6" fontWeight={700} color="primary">
            Products
          </Typography>
        </Link>
      </Grid>

      <Grid item className={classes.navbar_item}>
        <Link to="/contact" className={classes.navbar_link}>
          <Typography variant="h6" fontWeight={700} color="primary">
            Contact
          </Typography>
        </Link>
      </Grid>

      <Grid item className={classes.navbar_item}>
        <Link to="/about" className={classes.navbar_link}>
          <Typography variant="h6" fontWeight={700} color="primary">
            About us
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
