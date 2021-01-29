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
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.primary,
  },
  avatar: {},
  inline: {
    display: "inline",
    color: theme.palette.primary,
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
            primary={comment.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {/* {comment.name} */}
                </Typography>
                {comment.comment}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Comment;
