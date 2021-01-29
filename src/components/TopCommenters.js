import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    backgroundColor: theme.palette.background.primary,
  },
  inline: {
    display: "inline",
  },
  block: {
    display: "block",
  },
}));

const TopCommenters = ({ comments }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let commenters = {};
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    commenters[comment.name] = commenters[comment.name] + 1 || 1;
  }

  let topCommenters = Object.entries(commenters)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  console.log("here>>>>", topCommenters);

  return (
    <List className={classes.root}>
      {topCommenters.length > 0 &&
        topCommenters.map((commenter, i) => (
          <ListItem alignItems="flex-start" key={i}>
            <ListItemAvatar>
              <Avatar alt={commenter[0]} src="/static/images/avatar" />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="body1"
                  className={classes.block}
                  color="textPrimary"
                >
                  {commenter[0]}
                </Typography>
              }
              secondary={
                <Typography
                  component="p"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {commenter[1]}
                </Typography>
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default TopCommenters;
