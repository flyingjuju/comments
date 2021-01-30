import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    backgroundColor: theme.palette.background.primary,
  },
  avatar: {
    backgroundColor: "#7986cb",
    fontWeight: "700",
  },
  inline: {
    display: "inline",
  },
  block: {
    display: "block",
  },
  count: {
    display: "inline",
    border: "1px solid grey",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    letterSpacing: "2.5px",
    padding: theme.spacing(0.5, 0.7),
    margin: theme.spacing(3),
  },
  subheader: {
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "600",
  },
}));

// calculate top commenters by creating commenters object and setting commenter name as the key and freqrency as the value.
const TopCommenters = ({ comments }) => {
  const classes = useStyles();

  let commenters = {};
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    commenters[comment.name] = commenters[comment.name] + 1 || 1;
  }

  let topCommenters = Object.entries(commenters)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // console.log("here>>>>", topCommenters);
  return (
    <List
      className={classes.root}
      subheader={
        <Typography variant="h6" className={classes.subheader}>
          Top Commenters
        </Typography>
      }
    >
      {topCommenters.length > 0 &&
        topCommenters.map((commenter, i) => (
          <ListItem alignItems="flex-start" key={i}>
            <ListItemAvatar>
              <Avatar alt={commenter[0]} className={classes.avatar}>
                {commenter[0].charAt(0)}
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {commenter[0]}
                </Typography>
              }
              secondary={
                <Typography
                  component="p"
                  variant="overline"
                  className={classes.count}
                  color="textPrimary"
                >
                  {/* handle plural*/}
                  {commenter[1] === 1
                    ? `${commenter[1]} comment`
                    : `${commenter[1]} comments`}
                </Typography>
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default TopCommenters;
