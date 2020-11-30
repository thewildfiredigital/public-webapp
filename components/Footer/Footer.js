/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";
import { container, primaryColor, dangerColor } from "assets/jss/nextjs-material-kit.js";

const styles = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    // marginTop: '4vh',
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  }
}
const useStyles = makeStyles(styles);


export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {/* Twitter */}
            {/* <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-twitter"
                title="Follow us on twitter"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <a
                  href="https://www.twitter.com/"
                  className={classes.block}
                  target="_blank"
                >
                  <i className={classes.socialIcons + " fab fa-twitter"} />
                </a>
              </Tooltip>
            </ListItem> */}

            {/* Facebook */}
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-facebook"
                title="Follow us on facebook"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <a
                  href="https://www.facebook.com/thewildfiredigitalindia/"
                  className={classes.block}
                  target="_blank"
                >
                  <i className={classes.socialIcons + " fab fa-facebook"} />
                </a>
              </Tooltip>
            </ListItem>

            {/* Instagram */}
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow us on instagram"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <a
                  href="https://www.instagram.com/thewildfiredigital/"
                  className={classes.block}
                  target="_blank"
                >
                  <i className={classes.socialIcons + " fab fa-instagram"} />
                </a>
              </Tooltip>
            </ListItem>

            {/* LinkedIn */}
            <ListItem className={classes.inlineBlock}>
              <Tooltip
                id="instagram-linkedin"
                title="Follow us on linkedin"
                placement={"top"}
                classes={{ tooltip: classes.tooltip }}
              >
                <a
                  href="https://www.linkedin.com/company/thewildfiredigital/"
                  className={classes.block}
                  target="_blank"
                >
                  <i className={classes.socialIcons + " fab fa-linkedin"} />
                </a>
              </Tooltip>
            </ListItem>

          </List>
        </div>
        <div className={classes.right}>
          {" "} &copy; {1900 + new Date().getYear()} {" "}
          <a
            href="/landing"
            className={aClasses}
            target="_blank"
          >
            The Wildfire Digital.
          </a>
          {" "} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
