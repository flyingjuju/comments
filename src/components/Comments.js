import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    backgroundColor: "#e91e63",
    fontWeight: "700",
  },
  inline: {
    display: "inline",
  },
  block: {
    display: "block",
  },
  subtitle: {
    fontWeight: "500",
  },
}));

const Comment = ({ comments }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <List className={classes.root}>
      {comments.map((comment) => (
        <ListItem alignItems="flex-start" key={comment.id}>
          <ListItemAvatar>
            <Avatar alt={comment.name} className={classes.avatar}>
              {comment.name.charAt(0)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                component="div"
                variant="h6"
                className={classes.subtitle}
                color="textPrimary"
              >
                {comment.name}
              </Typography>
              // comment.name
            }
            secondary={
              <Typography
                component="p"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                {comment.comment}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Comment;
