import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ProductData } from "../ProductData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "0px 5% 60px 5%",
    },
  })
);

type Params = {
  categoryName: string;
};

export default function ProductList() {
  const classes = useStyles();

  function FormRow() {
    const { categoryName } = useParams<Params>();
    var selectedProduct: any[] = [];

    ProductData.forEach((product) => {
      if (product.category === categoryName) {
        selectedProduct.push(
          <Grid
            key={product.id}
            item
            xs={6}
            style={{ flexBasis: "48%", marginBottom: "20px" }}
          >
            <NavLink to={`/succulents-site/${categoryName}/${product.id}`}>
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
                    SEK {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </NavLink>
          </Grid>
        );
      }
    });

    return <React.Fragment>{selectedProduct}</React.Fragment>;
  }

  return (
    <div className={classes.root}>
      <Grid container item xs={12} style={{ justifyContent: "space-between" }}>
        <FormRow />
      </Grid>
    </div>
  );
}
