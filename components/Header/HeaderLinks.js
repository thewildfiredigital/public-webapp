/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Timeline, Assignment, CheckBoxOutlineBlank } from "@material-ui/icons";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import MoodIcon from '@material-ui/icons/Mood';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();    

  return (
    <List className={classes.list}>

      {/* Home */}
      <ListItem className={classes.listItem}>
        <Link href="/landing">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            {/* <Apps className={classes.icons} />  */}
            {' '} Home
          </Button>
        </Link>
      </ListItem> 

      {/* Login */}
      {/* <ListItem className={classes.listItem}>
          <Link href="/login">
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              Login
            </Button>
          </Link>
      </ListItem> */}

      {/* Our Work */}
      {/* <ListItem className={classes.listItem}>
        <Link href="/work">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Timeline className={classes.icons} /> 
            {' '} Our Work
          </Button>
        </Link>
      </ListItem> */}

      {/* About */}
      <ListItem className={classes.listItem}>
        <Link href="/about">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            {/* <Apps className={classes.icons} />  */}
            {' '} About
          </Button>
        </Link>
      </ListItem>

      {/* Blog */}
      {/* <ListItem className={classes.listItem}>
        <Link href="/blog">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Assignment className={classes.icons} /> 
            {' '} Blog
          </Button>
        </Link>
      </ListItem> */}

      {/* Contact */}
      <ListItem className={classes.listItem}>
        <Link href="/contact">
          <Button
            target="_blank"
            // className={classes.navLink}
            color="primary"
            round
          >
              {/* <MoodIcon className={classes.icons} />  */}
              {/* {' '} Contact */}
              Get in touch
          </Button>
        </Link>
      </ListItem>

      {/* Twitter */}
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}

      {/* Facebook */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/thewildfiredigitalindia/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>

      {/* Instagram */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/thewildfiredigital/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      {/* LinkedIn */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-linkedin"
          title="Follow us on linkedin"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/company/thewildfiredigital/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
