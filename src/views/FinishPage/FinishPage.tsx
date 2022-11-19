import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ReactComponent as Finished } from "../../res/finished.svg";
import classes from "./FinishPage.module.css";

const FinishPage = () => {
  return (
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        marginTop: "3rem",
        transform: "translate(-50%, -50%)",
        width: 400,
        borderRadius: "0.5rem",
        bgcolor: "primary.dark",
        color: "primary.light",
      }}
    >
      <Typography
        className={classes.text}
        color="primary"
        fontWeight={800}
        fontFamily="Josefin Sans"
        variant="h3"
        sx={{ marginBoottom: "1rem" }}
      >
        Thank you for your purchase.
      </Typography>
      <Finished width={400} height={400} />
    </Box>
  );
};

export default FinishPage;
