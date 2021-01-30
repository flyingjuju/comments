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
  subtitle: {
    fontWeight: "600",
  },
}));

const Comment = ({ comments }) => {
  const classes = useStyles();
  // console.log("comments at comment.js", comments);
  return (
    <List className={classes.root}>
      {comments &&
        comments.map((comment) => (
          <ListItem alignItems="flex-start" key={comment.id} divider>
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
              }
              secondary={
                <Typography
                  component="p"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {/* {comment.comment} */}
                  {comment.body}
                </Typography>
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default Comment;
