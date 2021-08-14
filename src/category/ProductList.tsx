import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ProductData } from "../ProductData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // margin: "0px 5% 180px 5%",
      margin: "0px 0% 180px 0%",
    },
  })
);

type Params = {
  categoryName: string;
};

type sortProps = {
  sortState: { sort: string; name: string };
};

export default function ProductList({ sortState }: sortProps) {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:599px)");
  const isMediumScreen = useMediaQuery("(min-width:960px)");
  const isBigScreen = useMediaQuery("(max-width:1279px)");

  function FormRow({ sortState }: sortProps) {
    const { categoryName } = useParams<Params>();
    var selectedProduct: any[] = [];

    const [sortedProduct, setSortedProduct] = useState<any[]>([]);

    useEffect(() => {
      if (sortState.sort === "Best selling") {
        setSortedProduct(ProductData.sort((a, b) => b.sold - a.sold));
      } else if (sortState.sort === "Price, high to low") {
        setSortedProduct(ProductData.sort((a, b) => b.price - a.price));
      } else if (sortState.sort === "Price, low to high") {
        setSortedProduct(ProductData.sort((a, b) => a.price - b.price));
      } else {
        setSortedProduct(
          ProductData.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        );
      }
    }, [sortState.sort]);

    sortedProduct.forEach((product) => {
      if (product.category === categoryName) {
        selectedProduct.push(
          <Grid
            key={product.id}
            item
            xs={6}
            md={4}
            lg={3}
            style={
              isMobile
                ? { flexBasis: "48%", marginBottom: "20px" }
                : isMediumScreen
                ? { flexBasis: "22%", marginBottom: "20px", margin: "1.5%" }
                : isBigScreen
                ? { flexBasis: "31%", marginBottom: "20px", margin: "1.16%" }
                : { flexBasis: "80%", marginBottom: "20px", margin: "0%" }
            }
          >
            <NavLink to={`/product/${categoryName}/${product.id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={`${product.name}`}
                  height="280"
                  image={product.image}
                  title={`${product.name}`}
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
      <Grid
        container
        style={
          isMobile
            ? {
                justifyContent: "space-between",
                margin: "0px 5%",
                width: "auto",
              }
            : isMediumScreen
            ? {
                justifyContent: "start",
                margin: "0px 14px",
                width: "auto",
              }
            : isBigScreen
            ? {
                justifyContent: "start",
                margin: "0px 14px",
                width: "auto",
              }
            : {
                justifyContent: "start",
                margin: "0px 14px",
                width: "auto",
              }
        }
      >
        <FormRow sortState={sortState} />
      </Grid>
    </div>
  );
}
