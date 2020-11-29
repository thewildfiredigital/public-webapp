import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
// @material-ui/icons
import { Camera, Palette, Favorite } from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import Divider from '@material-ui/core/Divider';
import { container, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import Tooltip from '@material-ui/core/Tooltip';
import WorkCard from 'components/WorkCard';
import { getSortedPostsData, getAllPostIds } from 'lib/case-studies'; 
import ContactFlex from 'components/ContactFlex';
import Hero from 'components/Hero';


// Styles
const styles = {
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container
    },
    profile: {
      textAlign: "center",
      "& img": {
        maxWidth: "160px",
        width: "100%",
        margin: "0 auto",
        transform: "translate3d(0, -50%, 0)"
      }
    },
    description: {
      margin: "1.071rem auto 0",
      maxWidth: "600px",
      color: "#999",
      textAlign: "center !important"
    },
    name: {
      marginTop: "-80px"
    },
    ...imagesStyle,
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3",
    },
    home: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        zIndex: "3",
        midWidth: '40vh'
    },
    caseStudies: {
      width: '100%'
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
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
    socials: {
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px",
      color: "#999"
    },
    navWrapper: {
      margin: "20px auto 50px auto",
      textAlign: "center"
    },
    heroTitle: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      color: "#FFFFFF",
      textDecoration: "none",
      textAlign: "center"
    },
    heroSubtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    },
    icon: {
      width: "50px",
      height: "40px",
      color: "#DC143C",
      fontSize: "10em"
    },
    blogTitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0",
      color: "black"
    },
    blogGist: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0",
      color: "#999"
    },
    typo: {
        // paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative",
        width: "100%",
        // color: "#c0c1c2",
        color: "#FFFAF0",
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px"
    },
};
const useStyles = makeStyles(styles);


export default function Work(props) {
    // More Styles
    const classes = useStyles();
    const { ...rest } = props;

    return (
      <>
          {/* Navbar */}
          <Header
            color="white"
            brand="The Wildfire Digital"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white",
              marginTop: 0
            }}
            {...rest}
          />

          {/* Hero */}
          <Hero 
            title="CASE STUDIES" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />

          {/* Case Studies */}
          <div className={classes.home}>
              <GridContainer className={classes.root} align="center" justify="center" alignItems="center">
                  <GridItem xs={12} sm={10} md={9}>
                      <GridContainer align="center" justify="space-between" alignItems="center">
                          {props.allWorks.map((thisWork, i) => {
                            let vals = [12,12,12,6,6];
                            if (i%7 === 0) {
                              vals = [12,12,12,6,6]
                            } else if (i%7 === 1) {
                              vals = [12,12,12,6,6]
                            } else if (i%7 === 2) {
                              vals = [12,12,12,12,12]
                            } else if (i%7 === 3) {
                              vals = [12,12,6,6,4]
                            } else if (i%7 === 4) {
                              vals = [12,12,6,6,8]
                            }
                            return (
                              <GridItem xs={vals[0]} sm={vals[1]} md={vals[2]} lg={vals[3]} xl={vals[4]} key={thisWork.id}>
                                <WorkCard work={thisWork} />
                              </GridItem>
                            )
                          })}
                      </GridContainer>
                  </GridItem>
              </GridContainer><br></br><br></br>
          </div>
          
          {/* Contact Us */}
          <ContactFlex />

          {/* Footer */}
          <Footer />
        </>
    );
}

export async function getStaticProps(context) {
  const allWorks = await getSortedPostsData()
  return {
      props: {
          allWorks
      }, 
  }
}
