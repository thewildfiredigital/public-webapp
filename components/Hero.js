import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { container, title } from "assets/jss/nextjs-material-kit.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';

const styles = {
    home: {
        // background: "#1c1c1e",
        background: "#191919",
        width: "100%",
        // marginTop: 70,
        paddingTop: 90,
        paddingBottom: 50
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        justifyContent: 'center',
        alignItems: "center"
    },
    subtitle: {
        letterSpacing: '2px'
    },
    typo: {
        position: "relative",
        width: "100%",
        color: "#FFFAF0",
    },
}
const useStyles = makeStyles(styles);

export default function Hero(props) {
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <>
            {/* Hero */}
            <div className={classes.home}>
                <GridContainer className={classes.root} align="center" justify="center" alignItems="center">
                    <GridItem xs={12} sm={12} md={12}>
                        {props.children}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <div className={classes.typo}>
                            <h4 className={classes.title} style={{color: primaryColor}}>
                                {props.title}
                            </h4>
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.typo}>
                            <h3 className={classes.subtitle}>
                                {props.subtitle}
                            </h3>
                            {/* <h1>{props.subtitle}</h1> */}
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </>
    )
}