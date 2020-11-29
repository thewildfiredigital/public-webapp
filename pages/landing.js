import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Fingerprint, VerifiedUser, Chat } from "@material-ui/icons";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import { container, title } from "assets/jss/nextjs-material-kit.js";

// Sections for this page
// import { getSortedPostsData as getSortedWorkPostsData} from 'lib/case-studies'; 
// import { getSortedPostsData as getSortedBlogPostsData } from 'lib/blog-posts'; 
import ContactFlex from 'components/ContactFlex';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import fetch from 'cross-fetch';
// import InstagramPost from 'components/InstagramPost.js';
// import Tiles from "pages-sections/landing/tiles.js";
// import Works from "pages-sections/landing/works.js";

const styles = {
  container: {
    zIndex: "12",
    // color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 0px 50px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  section: {
    paddingTop: '5vh',
    paddingBottom: '5vh'
  },
  subsectionTitle: {
    fontWeight: 'bold', 
    letterSpacing: '3px'
  },
  contentItem: {
    height: "100%",
    width: '100%',
    // paddingLeft: '20px',
    // paddingRight: '40px'
  },
};

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const small_device_flag = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <div>
        {/* Header */}
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="The Wildfire Digital"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />


        {/* Hero */}
        <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Branding Solutions</h1>
                <h4 style={{color: "#FFFFFA"}}>
                Creating quality, industry-specific content to strategically market 
                your business online and build a loyal community of genuine prospects and clients.
                </h4>
                <br />
                {/* <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>


        {/* Introduction */}
        <GridContainer justify='center'>
          <GridItem xs={12} sm={12} md={11}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                      {/* Introduction */}
                      <div className={classes.section}>
                          <GridContainer 
                            justify="center"
                            alignItems="center"
                            align="center"
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <h2 className={classes.title} style={{color: '#444'}}>Let{"'"}s talk growth</h2>
                              <h5 className={classes.description}>
                              Online marketing strategies are no ‘one size fits all’ play. We custom create 
                              service packages for you with only one goal in mind: <strong>Growth of your business</strong>.
                              </h5>
                            </GridItem>
                          </GridContainer><br></br>

                          <GridContainer 
                            justify="center"
                            alignItems="top"
                            align="center"
                          >
                            <GridItem xs={12} sm={12} md={4}>
                              <InfoArea
                                title="Intensive Research"
                                description="While onboarding a new client, our first step is to conduct an
                                extensive research about the client’s business, industry and
                                competitors. Any content we create for you is a result of this
                                ongoing research – from logo to social media creatives."
                                icon={Chat}
                                iconColor="info"
                                vertical
                              />
                            </GridItem>                           
                            <GridItem xs={12} sm={12} md={4}>
                              <InfoArea
                                title="Deliverance"
                                description="Time is money. We provide thorough timelines 
                                for all projects in advance and work hard to produce all 
                                deliverables well within that time."
                                icon={VerifiedUser}
                                iconColor="success"
                                vertical
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <InfoArea
                                title="Authentic"
                                description="We love creating content! Anything that we 
                                create is uniquely tailored for your business alone."
                                icon={Fingerprint}
                                iconColor="danger"
                                vertical
                              />
                            </GridItem>
                          </GridContainer>
                      </div>

                      {/* Content - 1 */}
                      <div className={classes.section}>
                          <GridContainer justify="center" direction="row" spacing={10} alignItems="center">
                            <GridItem xs={12} sm={10} md={7}>
                              <img
                                style={{width: "80%", display: "block"}}
                                className={classes.imgCardTop}
                                src='https://www.customdesigninteriors.in/cimage35/112435resp_header_pic.png'
                                alt="Card-img-cap"
                              />
                            </GridItem>
                            <GridItem xs={12} sm={10} md={5}>
                              <h2>Social Media for your Business</h2>
                              <h5>Put your business on the map by tapping into the power of social media. 
                                Reach your target audience and create a community of real customers who convert!</h5>
                            </GridItem>
                          </GridContainer>
                      </div>

                      {/* Content - 2 */}
                      <div className={classes.section}>
                          <GridContainer justify="center" direction="row-reverse" spacing={10} alignItems="center">
                            <GridItem xs={12} sm={10} md={7}>
                              <img
                                style={{width: "100%", justifyContent: "right", align: "right", display: "block"}}
                                className={classes.imgCardTop}
                                src='https://www.jll.com.co/images/client-stories/am-Aon-Center-hero-masked.png'
                                alt="Card-img-cap"
                              />
                            </GridItem>
                            <GridItem xs={12} sm={10} md={5}>
                              <h2>Create a Brand they remember</h2>
                              {/* <h2>Create a Brand that you customers remember</h2> */}
                              <h5>Branded content that tells your brand's story in a way that unifies your product/service 
                                with your online presence. Get personalized brand strategy, illustrations and more for your business!</h5>
                            </GridItem>
                          </GridContainer>
                      </div>

                      {/* Case Studies */}
                      {/* <h2 style={{letterSpacing: 3, }}>Previous case studies <img src={EcoIcon}/></h2>
                      <Works allWorks={props.allWorks} styles={styles}/> */}

              </div>
            </div>
          </GridItem>
        </GridContainer>


        {/* Hero */}
        {/* <RParallax
            bgImage={require('assets/img/landing-bg.jpg')}
            strength={300}
        >
          <Box
            display="flex" 
            height={400} 
            color={"#FFFFFF"}
          >
            <Box m="auto">
              <h1 className={classes.title}>Spanning Digital Scope</h1>
            </Box>
          </Box>
        </RParallax> */}

        {/* Tiles */}
        {/* <Tiles allBlogs={props.allBlogs} styles={styles} small_device_flag={small_device_flag}/> */}

        {/* Hero */}
        {/* <RParallax
            bgImage={require('assets/img/landing-bg.jpg')}
            strength={300}
        >
            <div style={{ height: '400px' }} />
        </RParallax> */}


        {/* Contact */}
        <GridContainer justify='center'>
          <GridItem xs={12} sm={10} md={11}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
              </div>
              <ContactFlex />
            </div>
          </GridItem>
        </GridContainer>


        {/* Footer */}
        <Footer />
    </div>
  );
}

// export async function getStaticProps(context) {
//   const allWorks = await getSortedWorkPostsData();
//   const allBlogs = await getSortedBlogPostsData();
//   const fetchInstaPost = async () => {
//     try {
//       const res = await fetch('https://api.instagram.com/oembed?url=https://www.instagram.com/p/B_6e9hGn7Wu/');
  
//       if (res.status >= 400) {
//         throw new Error("Bad response from server");
//       }

//       let instaPost = await res.json();
//       instaPost = {
//         title: instaPost.title,
//         author: instaPost.author_name,
//         author_url: instaPost.author_url,
//         image: instaPost.thumbnail_url,
//       }

//       return instaPost;
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   const instaPost = await fetchInstaPost();

//   return {
//       props: {
//           allBlogs,
//           allWorks,
//           instaPost
//       }, 
//   }
// }