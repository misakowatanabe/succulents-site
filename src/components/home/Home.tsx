import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import mainImageBigger from "../../img/mainBiggerScreen.jpg";
import mainMobile from "../../img/mainMobile.jpg";
import MainButton from "./MainButton";
import Grid from "@material-ui/core/Grid";
import { CategoryData } from "../../data/CategoryData";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: "0% 5% 5% 5%",
  },
});

export default function Home() {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div
      className="home-background"
      style={isMobile ? { paddingBottom: "120px" } : { paddingBottom: "90px" }}
    >
      <div
        className="main-image"
        style={
          isMobile
            ? {
                backgroundImage: `url(${mainMobile})`,
                backgroundPosition: "center center",
              }
            : {
                backgroundImage: `url(${mainImageBigger})`,
                backgroundPosition: "center left",
              }
        }
      >
        <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
          <div
            className={
              isMobile ? "main-text_mobile" : "main-text_bigger-screen"
            }
          >
            A little friend
            <br />
            at home
            {!isMobile && (
              <div className="sub-text_bigger-screen"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sodales vehicula velit eu euismod.
              </div>
            )}
          </div>
          <MainButton />
        </div>
      </div>
      <div className="shop-by-category">Shop By Category</div>
      <Grid
        container
        style={{
          justifyContent: "start",
          maxWidth: "1280px",
          margin: "0px auto",
        }}
      >
        {CategoryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <NavLink to={`/product/${item.categoryName}`}>
                  <CardMedia
                    component="img"
                    alt="CategoryImage"
                    height="220"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.categoryName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </NavLink>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
