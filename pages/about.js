import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { container, title } from "assets/jss/nextjs-material-kit.js";
// import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import ContactFlex from 'components/ContactFlex';
import Hero from 'components/Hero';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";


// Style
const styles = {
    home: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        zIndex: "3",
    },
    container: {
        ...container,
        paddingTop: '10vh'
    },
    section: {
        paddingTop: '5vh',
        paddingBottom: '5vh',
    },
    contentItem: {
        height: "100%",
        width: '100%',
        // paddingLeft: '20px',
        // paddingRight: '40px'
    },
    image: {
        height: "100%",
        width: '100%',
        backgroundSize: 'cover',
        // backgroundColor: fade('#000000', 0.8),
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
    inlinetext: {
        display: "inline",
    },
    subsectionTitle: {
        fontWeight: 'bold', 
        letterSpacing: '3px'
    },
    typo: {
        position: "relative",
        width: "100%",
    },
}
const useStyles = makeStyles(styles);


export default function About(props) {
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <>
            {/* Navbar */}
            <Header
                color="transparent"
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
                title="ABOUT US" 
                subtitle="Competitive Research, Creative Content Creation, Timely Execution and Constant Monitoring - Our mantra for steadily growing your business because we love seeing our clients prosper."
            />

            {/* About Us */}
            <div className={classes.home}>
                <GridContainer justify="center" alignItems="center">
                    <GridItem xs={12} sm={12} md={9} justify="center">

                        {/* Our Values */}
                        <div className={classes.section}>
                            {/* <SnackbarContent
                                message={
                                    <span><b>This</b></span>
                                } color="success" icon={Check}
                            />*/}
                            <GridContainer 
                                justify="center" 
                                direction="row-reverse" 
                                spacing={10}  
                                alignItems="center" 
                                style={{minHeight: '40vh', width: '100%'}}>
                                <GridItem xs={10} sm={10} md={8} lg={8}>
                                    <div className={classes.contentItem}>
                                        <div className={classes.typo} style={{textAlign: 'center'}}>
                                            {/* <img 
                                                src={'https://www.foremostmedia.com/portals/0/Images/services/online-marketing/social-media-marketing/social-media.png'}
                                                className={classes.image}
                                            /> */}
                                            <h3>
                                                {/* <span style={{color: roseColor}}></span> */}
                                                Hi! we are <b>Gargi</b> &amp; <b>Gaurav</b>. With a mutual belief in “Quality over Quantity” and a crazy
                                                obsession for Digital Business Growth, this husband-wife duo partnered to form - <b>The Wildfire Digital</b>
                                            </h3>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>

                        {/* Tag Line - 1 */}
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={8}>
                                <div className={classes.typo}>
                                    <h2 style={{fontWeight: 'bolder'}}>We are transforming the world day by day, by technology and creativity.</h2>
                                </div>
                            </GridItem>
                        </GridContainer>

                        {/* Brief Core */}
                        <div className={classes.section}>
                            <GridContainer justify="center" direction="row" spacing={8}  alignItems="center" style={{minHeight: '70vh', width: '100%'}}>
                                <GridItem xs={12} sm={10} md={6}>
                                    <img 
                                        src={'https://ciklopea.com/wp-content/uploads/2018/05/graphic-designer.jpg'}
                                        className={classes.image}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={10} md={6}>
                                    <div className={classes.typo}>
                                        <h3 className={classes.subsectionTitle}>Handcrafted engaging content</h3>
                                        <h3>
                                            From facebook campaigns to social media posts - blogs to website pages,
                                            everything we create for our clients is fresh, vibrant and
                                            personalised.
                                        </h3>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>

                        {/* Tag Line - 2 */}
                        <GridContainer align="center" justify="center" alignItems="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.typo}>
                                    <h2 style={{fontWeight: 'bolder'}}>Aligning ourselves with the best</h2>
                                </div>
                            </GridItem>
                        </GridContainer>

                        {/* Team */}
                        <div className={classes.section}>
                            <GridContainer justify="center" direction="row" spacing={8}  alignItems="center" style={{minHeight: '70vh', width: '100%'}}>
                                <GridItem xs={12} sm={10} md={6}>
                                    <img 
                                        src={'https://img.freepik.com/free-photo/business-brainstorming-graph-chart-report-data-concept_53876-31213.jpg?size=626&ext=jpg'}
                                        className={classes.image}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={10} md={6}>
                                    <div className={classes.typo}>
                                        <h3 className={classes.subsectionTitle}>Efficient, effective postitioning</h3>
                                        <h3>Our dedicated team works hard to take the least of your time while
                                            delivering quality-driven, customised content for your business.
                                            Partner with us to give your business’s digital presence a facelift!</h3>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>

                        {/* <Divider /> */}
                    </GridItem>
                </GridContainer>
            </div>


            <ContactFlex />
            <Footer />
        </>
    )
}