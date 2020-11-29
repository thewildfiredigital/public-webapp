import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { ArrowForward } from "@material-ui/icons";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import WorkCard from 'components/WorkCard';
import Button from "components/CustomButtons/Button.js";


export default function Works(props) {
    const useStyles = makeStyles(props.styles);
    const classes = useStyles();
    return (
        <div>
            <GridContainer align="center" justify="space-between" alignItems="center">
                {props.allWorks.slice(0, 5).map((thisWork, i) => {
                    let vals = [12,12,12,6,6];
                    if (i%7 === 0) {
                    vals = [12,12,12,6,6]
                    } else if (i%7 === 1) {
                    vals = [12,12,12,6,6]
                    } else if (i%7 === 2) {
                    vals = [12,12,12,12,12]
                    } else if (i%7 === 3) {
                    vals = [12,12,6,6,6]
                    } else if (i%7 === 4) {
                    vals = [12,12,6,6,6]
                    }
                    return (
                    <GridItem xs={vals[0]} sm={vals[1]} md={vals[2]} lg={vals[3]} xl={vals[4]} key={thisWork.id}>
                        <WorkCard work={thisWork} />
                    </GridItem>
                    )
                })}
                {/* <GridItem xs={6}>
                    <TrackVisibility once>
                    {({ isVisible }) => isVisible && 
                    <Grow in={true}>
                        <Paper className={classes.paper}>
                        {imageComponent}
                        </Paper>
                    </Grow>
                    }
                </TrackVisibility>
                </GridItem> */}
                <GridItem align="center">
                    <h2>more {" "}
                        <Button justIcon round color="rose">
                        <ArrowForward className={classes.icons} />
                        </Button>
                    </h2>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <img
                    style={{width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src='https://demos.creative-tim.com/material-kit-pro-react/static/media/cards-test.c1ff9b42.png'
                    alt="Card-img-cap"
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}