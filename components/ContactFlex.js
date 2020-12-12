import React from "react";
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';


const styles = {
    container: {
        backgroundColor: '#191919',
        paddingTop: '10vh',
        paddingBottom: '10vh',
    },
    text: {
        display: 'inline',
        color: 'white'
    }
};


export default function ContactFlex({text}) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    let textComponent = (
        <h3 className={classes.text}>
            Learn how you can 
            {' '} <h3 className={classes.text} style={{color: primaryColor  }}>elevate</h3> {' '}
            your business
        </h3> 
    )
    if (text) {
        textComponent = (
            <h3 className={classes.text}>
                {text}
            </h3> 
        )
    }

    return (
        <div className={classes.container}>
            <GridContainer align="center" justify="center" alignItems="center">
                <GridItem xs={12} sm={12} md={6}>
                    <GridContainer align="center" justify="center" alignItems="center">
                        <GridItem xs={10} sm={8} md={9}>
                            {textComponent}
                        </GridItem>

                        <GridItem xs={9} sm={4} md={2}>
                            <Link href="/contact">
                                <Button color='rose' style={{display: 'inline', background: 'linear-gradient(45deg, #FE6B8A 30%, #FF8E53 90%)'}}>
                                    Get In Touch
                                </Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </div>
    )
}
