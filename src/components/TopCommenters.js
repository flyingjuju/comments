import React, { userState, useEffect } from "react";
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
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const TopCommenters = ({ comments }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [topCommenters, setTopCommenters] = userState([]);

  // const updateCommenter = (comments) => {
  let commenters = {};
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    commenters[comment.name] = commenters[comment.name] + 1 || 1;
  }

  let topCommenters = Object.entries(commenters)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  console.log("here>>>>", topCommenters);
  //   setTopCommenters (
  //     // Object.keys(commenters).sort((a,b)=>commenters[b]-commenters[a]).slice(0,3)
  //     Object.entries(commenters).sort((a,b)=>b[1]-a[1]).slice(0,3)
  //     )
  // }

  // useEffect(()=>{
  //   updateCommenter(comments)
  // },[comments])

  // useEffect(()=>{
  //   dispatch(comments)
  // },[dispatch])

  return (
    <List className={classes.root}>
      {topCommenters.length > 0 &&
        topCommenters.map((commenter) => (
          <ListItem alignItems="flex-start" key={commenter.id}>
            <ListItemAvatar>
              <Avatar alt={commenter[0]} src="/static/images/avatar" />
            </ListItemAvatar>
            <ListItemText
              // primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {commenter[0]}
                  </Typography>
                  {commenter[1]}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
    </List>
  );
};

export default TopCommenters;
