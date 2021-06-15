import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import succulent1 from "../img/succulent1.jpg";
import succulent2 from "../img/succulent2.jpg";
import succulent3 from "../img/succulent3.jpg";
import succulent4 from "../img/succulent4.jpg";
import succulent5 from "../img/succulent5.jpg";
import succulent6 from "../img/succulent6.jpg";
// import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

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

  type ProductProps = {
    image?: string;
    name: string;
    price: number;
    sold: number;
    selfLink: string;
  };

  const products: ProductProps[] = [
    {
      image: succulent1,
      name: "Zebra Plant",
      price: 1,
      sold: 22,
      selfLink: "/succulents-site/productPageSucculent",
    },
    {
      image: succulent2,
      name: "Graptosedum",
      price: 2,
      sold: 35,
      selfLink: "/succulents-site/other",
    },
    {
      image: succulent3,
      name: "Sedum clavatum",
      price: 3,
      sold: 17,
      selfLink: "/succulents-site/productPageSucculent",
    },
    { image: succulent4, name: "Agave", price: 4, sold: 5, selfLink: "/succulents-site/productPageSucculent", },
    {
      image: succulent5,
      name: "Haworthiopsis",
      price: 5,
      sold: 13,
      selfLink: "/succulents-site/productPageSucculent",
    },
    {
      image: succulent6,
      name: "Haworthia turgida",
      price: 6,
      sold: 8,
      selfLink: "/succulents-site/productPageSucculent",
    },
  ];

  // function FormRow(products: ProductProps[]) {
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
            <NavLink to={product.selfLink+'/'}>
            {/* <NavLink to={product.selfLink}> */}
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
            </NavLink>
          </Grid>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container item xs={12} style={{ justifyContent: "space-between" }}>
        <FormRow />
      </Grid>
    </div>
  );
}
