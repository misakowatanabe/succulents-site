import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import categoryImage from "../img/categoryPot.jpg";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: "0% 5% 5% 5%",
  },
});

export default function CategoryCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <NavLink to="/succulents-site/pots">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="220"
            image={categoryImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pots
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </NavLink>
      </CardActionArea>
    </Card>
  );
}
