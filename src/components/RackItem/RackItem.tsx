import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./RackItem.module.css";
import PercentIcon from "@mui/icons-material/Percent";

type propsType = {
  title: string;
  image: string;
  promo: boolean;
  price: number;
  id: number;
};

export const RackItem = ({
  title,
  image,
  id,
  price,
  promo = false,
}: propsType) => {
  // Number of seconds
  const [timer, setTimer] = useState(2300);

  const getTime = (time: number) => {
    const timeLeft = {
      hours: Math.floor((time * 60 * 60) % 24),
      minutes: Math.floor((time / 60) % 60),
      seconds: Math.floor(time % 60),
    };
    const minutes =
      timeLeft.minutes < 10
        ? "0" + String(timeLeft.minutes)
        : String(timeLeft.minutes);

    const seconds =
      timeLeft.seconds < 10
        ? "0" + String(timeLeft.seconds)
        : String(timeLeft.seconds);

    return minutes + ":" + seconds;
  };

  useEffect(() => {
    if (promo) {
      setInterval(() => {
        setTimer((prev) => {
          if (prev > 0) {
            return prev - 0.5;
          } else {
            return 0;
          }
        });
      }, 1000);
    }
  }, []);

  return (
    <div
      className={`${classes.cardContainer} ${
        promo ? classes.promoContainer : ""
      }`}
    >
      <Typography
        color="primary"
        fontWeight={800}
        fontFamily="Josefin Sans"
        variant="h5"
      >
        {title}
      </Typography>
      <Typography
        fontWeight={800}
        fontFamily="Josefin Sans"
        variant="h6"
        className={classes.cardPromoInfo}
      >
        {promo && <>{getTime(timer)}</>}
      </Typography>
      <img src={image} className={classes.cardImage} alt={title} />
      <Link to={`/products/${id}`} className={classes.cardButton}>
        <span className={`${promo ? classes.promoPrice : ""}`}>
          {price}$ {!promo ? <br></br> : null}
        </span>
        {promo && (
          <>
            <span> {price - 99}$</span>
            <br></br>
          </>
        )}
        Get Now!
      </Link>
    </div>
  );
};
