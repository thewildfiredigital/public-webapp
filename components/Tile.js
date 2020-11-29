import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import baseStyles from "../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { fade } from '@material-ui/core/styles/colorManipulator';
import Quote from "components/Typography/Quote.js";
import Collapse from '@material-ui/core/Collapse';
import Button from "components/CustomButtons/Button.js";
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = {
    ...baseStyles,
    overlay: {
        height: "100%",
        width: "100%",
        color: 'white',
        opacity: 1,
        transition: 'all 0.3s',
        backgroundColor: '#FFFFFF',
        mixBlendMode: 'darken',
        "&:hover": {
          opacity: 1,
          backgroundColor: fade('#1c1c1e', 1),
          color: 'white',
          "& h5": {
              color: 'white'
          },
          "& h3": {
              color: 'white'
          },
        },
        "& h5": {
            color: '#888',
        },
        "& h3": {
            color: 'black',
        }
    },
    overlay_2: {
        height: "100%",
        width: "100%",
        color: 'black',
        opacity: 1,
        transition: 'all 0.3s',
        backgroundColor: '#1c1c1e',
        mixBlendMode: 'darken',
        "&:hover": {
          opacity: 1,
          backgroundColor: fade('#FFFFFF', 0.5),
          color: 'black',
          "& h5": {
              color: '#888'
          },
          "& h3": {
              color: 'black'
          },
        },
        "& h5": {
            color: 'white',
        },
        "& h3": {
            color: 'white',
        }
    },
    // card: {
    //   minWidth: "20rem", 
    //   height: '50vh',
    //   margin: '20px 10px',
    //   overflow: 'hidden',
    //   display: 'block',
    //   boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    //   transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    //   backgroundSize: 'cover', 
    //   backgroundPosition: 'center',
    //   "&:hover": {
    //     boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    //     transform: 'scale(1.05)'
    //   },
    // }
}

export default function Tile(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    let content = (
        <>
            {props.reverse && (
                <div className={classes.overlay_2}  style={props.nopadding ? {padding: "0px"} : {padding: "30px"} }>
                    {props.children}
                </div>
            )}
            {!props.reverse && (
                <div className={classes.overlay}  style={props.nopadding ? {padding: "0px"} : {padding: "30px"} }>
                    {props.children}
                </div>
            )}
        </>
    )
    return (
        <>
            {content}
        </>
    )
}