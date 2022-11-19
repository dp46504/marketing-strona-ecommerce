import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import roomba1 from "../../res/roomba1.png";
import roomba2 from "../../res/roomba2.png";
import roomba3 from "../../res/roomba3.png";
import visa from "../../res/visa.png";
import blik from "../../res/blik.png";
import venmo from "../../res/venmo.png";
import classes from "./CartPage.module.css";
import { useState } from "react";
import { style } from "@mui/system";

const CartPage = () => {
  const { id } = useParams();
  const idInt: number = id as unknown as number;
  const images = [roomba1, roomba2, roomba3];
  const titles = ["Roomba j7", "Roomba j8", "Roomba j9"];
  const prices = [275, 300, 199];
  const promos = [false, true, false];
  const [openModal, setOpenModal] = useState(false);
  const nav = useNavigate();

  return (
    <>
      <Modal open={openModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            borderRadius: "0.5rem",
            bgcolor: "primary.dark",
            color: "primary.light",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Finish Payment?
          </Typography>
          <br></br>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={5}>
              <Button
                color="success"
                fullWidth
                variant="contained"
                onClick={() => nav("/finish")}
              >
                Yes
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                color="error"
                fullWidth
                variant="contained"
                onClick={() => setOpenModal(false)}
              >
                No
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Grid className={classes.container} container xs={8}>
        <img className={classes.itemphoto} src={images[idInt]} alt="Product" />
        <Typography
          className={classes.itemname}
          color="primary"
          fontWeight={800}
          fontFamily="Josefin Sans"
          variant="h3"
        >
          {titles[idInt]}
        </Typography>
        <div className={classes.divider}></div>
        <div className={classes.shipmentContainer}>
          <Grid container xs={12} spacing={1} sx={{ placeItems: "center" }}>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                fullWidth
                variant="filled"
                id="Street"
                label="Street"
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                id="Zip"
                label="Zip-code"
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                id="City"
                label="City"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                id="Country"
                label="Country"
              ></TextField>
            </Grid>
          </Grid>
        </div>
        <div className={classes.divider2}></div>
        <div className={classes.priceContainer}>
          <Typography
            color="primary"
            fontWeight={800}
            fontFamily="Josefin Sans"
            variant="h5"
          >
            Total price: {prices[idInt] + 5}$<br></br>
            &emsp;- {prices[idInt]}$ <br></br>
            &emsp;- 5$ ( shipment )
          </Typography>
        </div>
        <div className={classes.paybuttonContainer}>
          {/* Buttons to pay */}
          {/* Visa */}
          <img
            onClick={() => setOpenModal(true)}
            src={visa}
            id="100"
            className={classes.paymentimages}
            alt="visa payment option"
          />
          {/* BLIK */}
          <img
            onClick={() => setOpenModal(true)}
            src={blik}
            id="200"
            className={classes.paymentimages}
            alt="blik payment option"
          />
          {/* external gate */}
          <img
            onClick={() => setOpenModal(true)}
            src={venmo}
            id="300"
            className={classes.paymentimages}
            alt="venmo payment option"
          />
        </div>
      </Grid>
    </>
  );
};

export default CartPage;
