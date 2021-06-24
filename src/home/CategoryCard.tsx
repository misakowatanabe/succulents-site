import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Succulents from "../img/categorySucculent.jpg";
import Pots from "../img/categoryPot.jpg";
import Other from "../img/categoryOther.jpg";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: "0% 5% 5% 5%",
  },
});

export default function CategoryCard1(props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <NavLink to={`/succulents-site/${props.text}`}>
          {props.text === "Succulents" && (
            <CardMedia
              component="img"
              alt="CategoryImage"
              height="220"
              image={Succulents}
            />
          )}
          {props.text === "Pots" && (
            <CardMedia
              component="img"
              alt="CategoryImage"
              height="220"
              image={Pots}
            />
          )}
          {props.text === "Other" && (
            <CardMedia
              component="img"
              alt="CategoryImage"
              height="220"
              image={Other}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.text}
            </Typography>
            {props.text === "Succulents" && (
              <Typography variant="body2" color="textSecondary" component="p">
                This is a sample text for succulents.
              </Typography>
            )}
            {props.text === "Pots" && (
              <Typography variant="body2" color="textSecondary" component="p">
                This is a sample text for pots.
              </Typography>
            )}
            {props.text === "Other" && (
              <Typography variant="body2" color="textSecondary" component="p">
                This is a sample text for other.
              </Typography>
            )}
          </CardContent>
        </NavLink>
      </CardActionArea>
    </Card>
  );
}
