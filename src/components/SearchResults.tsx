import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ProductData } from "../data/ProductData";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "0px 0% 180px 0%",
    },
  })
);

type Params = {
  query: string;
};

export default function SearchResults() {
  var selectedCategory: any[] = [];

  const { query } = useParams<Params>();

  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:599px)");
  const isfrom959px = useMediaQuery("(min-width:960px)");
  const isto1279px = useMediaQuery("(max-width:1279px)");

  ProductData.forEach((product) => {
    var productName = product.name.toLowerCase();
    if (productName.includes(query.toLowerCase())) {
      selectedCategory.push(
        <Grid
          key={product.id}
          item
          xs={6}
          md={4}
          lg={3}
          style={
            isMobile
              ? { flexBasis: "48%", marginBottom: "20px" }
              : isfrom959px
              ? { flexBasis: "22%", margin: "1.5%" }
              : isto1279px
              ? { flexBasis: "31%", margin: "1.16%" }
              : { flexBasis: "80%", margin: "0%" }
          }
        >
          <NavLink to={`/product/${product.category}/${product.id}`}>
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

  return (
    <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
      <div className="search-results-text">
        {selectedCategory.length} RESULTS FOR '{query.toUpperCase()}'
      </div>
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
              : isfrom959px
              ? {
                  justifyContent: "start",
                  margin: "0px 14px",
                  width: "auto",
                }
              : isto1279px
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
          <React.Fragment>{selectedCategory}</React.Fragment>
        </Grid>
      </div>
    </div>
  );
}
