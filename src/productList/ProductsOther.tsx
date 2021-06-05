import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import other1 from "../img/other1.jpg";
import other2 from "../img/other2.jpg";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "0px 5% 60px 5%",
    },
  })
);

export default function ProductsSucculents() {
  const classes = useStyles();

  const products = [
    { image: other1, name: "soil", price: "1", sold: "22" },
    { image: other2, name: "shovel", price: "2", sold: "35" }
  ];

  function FormRow() {
    return (
      <React.Fragment>
        {products.map((product, index) => (
          <Grid
            key={index}
            item
            xs={6}
            style={{ flexBasis: "48%", marginBottom: "20px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="190"
                image={product.image}
                title="Contemplative Reptile"
              />
              <CardContent style={{ padding: 0 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{
                    margin: "5px 0px 0px 0px",
                    fontSize: "18px",
                    color: "#242424",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{
                    fontSize: "16px",
                    color: "#242424",
                  }}
                >
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container item xs={12} style={{ justifyContent: "space-between" }}>
        <FormRow />
      </Grid>
    </div>
  );
}
