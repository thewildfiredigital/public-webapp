import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import baseStyles from "../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { fade } from '@material-ui/core/styles/colorManipulator';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { container, title } from "assets/jss/nextjs-material-kit.js";
import Collapse from '@material-ui/core/Collapse';
import { Instagram } from "@material-ui/icons";

const styles = {
    ...baseStyles,
    mainRaised: {
        margin: "-60px 0px -40px",
        borderRadius: "6px",
        boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    container: {
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        height: '100%',
        position: 'relative',
        '&:hover': {
            '& $hero': {
                zIndex: 1,
                transition: 'all 1s ease',
                color: 'inherit',
                // display: 'block',
                // visibility: 'visible',
                height: '100%',
            },
        },
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        textDecoration: "none",
        margin: "0"
    },
    cardImage: {
        width: '100%', 
        opacity: 1,
        borderRadius: "5px",
    },
    cardImageContainer: {
        // margin: '10px',
        overflow: "hidden",
        backgroundRepeat: 'round',
        boxShadow: '0 8px 16px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        borderRadius: "5px",
        height: '100%',
        width: '100%',
    },
    hero: {
        // visibility: 'hidden',
        // display: 'none',
        zIndex: -1,
        top: 0,
        left: 0,
        height: '0%',
        width: '100%',
        position: 'absolute',
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        color: '#1c1c1e',
        transition: 'all 1s ease',
    },
    icon: {
        verticalAlign: 'middle',
        marginRight: '2px'
    }
}

export default function InstagramPost({post}) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const [show, setShow] = useState(false)

    let content = (
        <>
            <div className={classes.container}
                onMouseEnter={() => {setShow(true)}}
                onMouseLeave={() => {setShow(false)}}
            >
                <div className={classes.cardImageContainer}>
                    <img
                        src={post.image}
                        alt="Post Image"
                        className={classes.cardImage}
                    />
                </div>
                {/* <GridContainer
                    justify="center"
                    // style={{position: 'absolute'}}
                >
                    <GridItem xs={12} sm={12} md={12}>
                        <div className={classes.cardImageContainer}>
                            <img
                                src={post.image}
                                alt="Post Image"
                                className={classes.cardImage}
                            />
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={10} md={6}>
                        <h3 className={classes.title} style={{  mixBlendMode: 'soft-light'}}>{post.title}</h3>
                    </GridItem> 
                </GridContainer> */}

                {/* Collapse */}
                <div className={classes.hero}>
                    <GridContainer
                        justify="center"
                        align="center"
                        alignItems="center"
                        style={{height: '90%', visiblity: 'inherit'}}
                    >
                        <GridItem  xs={12} sm={12} md={8}>
                            <h3><Instagram className={classes.icon} /> Instagram</h3>
                            <h5>See what's new on our handle!</h5>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </>
    )
    return (
        <>
            {content}
        </>
    )
}