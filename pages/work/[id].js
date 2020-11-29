import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Router from 'next/router';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import baseStyles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import Quote from "components/Typography/Quote.js";
import Avatar from '@material-ui/core/Avatar';
import { container, title } from "assets/jss/nextjs-material-kit.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import { Grid } from "@material-ui/core";
import NavPills from "components/NavPills/NavPills.js";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Divider from '@material-ui/core/Divider';
import Favorite from "@material-ui/icons/Favorite";
import List from "@material-ui/icons/List";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import WorkCard from "components/WorkCard.js";
import Button from "components/CustomButtons/Button.js";
import ContactFlex from "components/ContactFlex.js";

// Fetching Data
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/case-studies'; 

// Styles
const styles = {
    container: {
        ...container,
        backgroundColor: "#FFFFFF",
        // marginTop: '-10vh',
        width: '100%',
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        // color: "#FFFFFF",
        color: 'black',
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0",
        color: '#888'
    },
    blank: {
        position: "relative",
        minHeight: "50vh",
    },
    hero: {
        height: '100vh',
        marginTop: "-88vh",
    },
    heroImage:  {
        width: '90%',
        overflow: 'hidden',
    },
    main: {
        background: "#FFFFFF",
        position: "block",
        zIndex: "3"
    },
    // Styling for all Content
    content: {
        background: "#FFFFFF",
        width: "100%",
        align: 'center',
        justify: "center",
        alignItems: "center",
        justifyContent: 'center',
        position: "block",
        "& h1": {
            fontSize: '4.5rem',
            lineHeight: '4rem',
        },
        "& h2": {
            fontSize: '3.8rem',
            lineHeight: '3.5rem',
        },
        "& h3": {
            fontSize: '2.6rem',
            lineHeight: '3.1rem',
        },
        "& h4": {
            fontSize: '2.1rem',
            lineHeight: '2.8rem',
        },
        "& h5": {
            fontSize: '1.8rem',
            lineHeight: '2.7rem',
        },
        "& p": {
            fontSize: '1.3rem',
            lineHeight: '2.5rem',
        },
        "& img": {
            width: '100%'
        },
    },
    mainRaised: {
        margin: "40px 0px 0px",
        borderRadius: "6px",
        boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        backgroundColor: '#FFFFFF'
    },
    parallax: {
        marginBottom: "-20%"
    },
    profileImage: {
        height: '80px',
        width: '80px',
    },
    authorName: {
        fontSize: "1.000rem",
        color: 'black'
    },
    authorTag: {
        fontSize: "0.900rem",
        color: '#888'
    },
    profileCard: {
        padding: "5px"
    }, 
    timestamp: {
        fontSize: "1.000rem",
        color: '#999'
    }, 
    blogText: {
        color: 'black',
        fontSize: "1.313rem",
        letterSpacing: "2px",
        lineHeight: '3vh'
    }, 
    views: {
        color: 'red',
        fontSize: "1.313rem"
    }
};
const useStyles = makeStyles(styles);


export default function Work({postData, moreWorks}) {
    const classes = useStyles();

    // Format Blog Content
    const formatPostContent = (content) => {
        return (
            <div dangerouslySetInnerHTML={{ __html: content }} />
        )
    }

    return (
        <>
            {/* Header */}
            <Header
                color="white"
                routes={[]}
                brand="The Wildfire Digital"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "primary"
                }}
            />

            {/* Hero */}
            <div className={classes.blank} style={{backgroundColor: '#1c1c1e'}} />
            <div className={classes.blank} />
            <div class={classes.hero}>
                <GridContainer align="center" justify="center" alignItems="center">
                    <GridItem xs={12} sm={8} md={7}>
                        <div className={classes.typo}>
                            <h4 style={{color: dangerColor, fontWeight: "bold"}}>
                                {postData.title}
                            </h4>
                            <div className={classes.heroImage}>
                                <img 
                                    src={postData.titleImage}
                                    style={{maxWidth: '100%', maxHeight: '100%'}}
                                />
                            </div>
                            <h1>
                                {postData.subtitle}
                            </h1><br></br>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>


            {/* Case Study */}
            <div className={classes.content}>
                <GridContainer align="left" justify="center" alignItems="center">
                    <GridItem xs={12} sm={10} md={8}>
                        <br></br>
                        {formatPostContent(postData.contentHtml)}
                    </GridItem>
                </GridContainer><br></br><br></br>
            </div>

            <GridContainer align="center" justify="center" alignItems="center">
                <GridItem  xs={12} sm={12} md={10}>
                    <div className={classes.mainRaised}>
                        <GridContainer align="center" justify="center" alignItems="center">
                            <GridItem xs={12} sm={12} md={8} align="left" justify="left" alignItems="left">
                                <h2>Like what you see? Catch <span style={{color: roseColor}}>more</span>!</h2>
                            </GridItem>
                        </GridContainer><br></br><br></br>

                        {/* Other Works */}
                        <GridContainer align="center" justify="center" alignItems="center">
                            {moreWorks.slice(0, 3).map((thisWork) => {
                                return (
                                    <GridItem xs={12} sm={4} md={3}>
                                        <WorkCard work={thisWork} image={thisWork.titleImage} key={thisWork.id} />
                                    </GridItem>
                                )
                            })}
                        </GridContainer>
                        <ContactFlex />
                    </div>
                </GridItem>
            </GridContainer>
            

            {/* Footer */}
            <Footer />
        </>
    )
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const moreWorks = await getSortedPostsData();
    return {
        props: {
            postData,
            moreWorks,
        },  
    }
}


// {/* Content */}
// <Parallax className={classes.parallax} filter responsive image={postData.titleImage} />
// <div className={`${classes.main} ${classes.mainRaised}`}>
//     <div className={classes.container}>
//         {/* Title */}
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={12}
//             style={{
//               textAlign: 'center',
//               justifyContent: 'center'
//             }}>
//                 <h2 className={classes.title}>{postData.title}</h2>
//           </GridItem>
//         </GridContainer>

//         {/* Subtitle */}
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={12}
//             style={{
//               textAlign: 'center',
//               justifyContent: 'center'
//             }}>
//               <h2 className={classes.subtitle}>{postData.subtitle}</h2>
//           </GridItem>
//         </GridContainer><br></br>

//         {/* Timestamp */}
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={6}>
//           </GridItem>
//           <GridItem xs={12} sm={12} md={6}>
//               <div
//                   style={{
//                       position: 'absolute', 
//                       left: '50%', 
//                       top: '50%',
//                       transform: 'translate(-50%, -50%)'
//                   }}
//               >
//                 <h4 className={classes.timestamp}>{postData.readableDate}</h4>
//               </div>
//           </GridItem>
//         </GridContainer>

//         {/* Author Card */}
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={4}>
//               <Card className={classes.profileCard}>
//               <GridContainer
//                   justify="space-between"
//                   spacing={5}>
//                   <GridItem xs={6} sm={6} md={4}>
//                   <div
//                       style={{
//                           position: 'absolute', 
//                           left: '50%', 
//                           top: '50%',
//                           transform: 'translate(-50%, -50%)'
//                       }}
//                   >
//                       <Avatar 
//                       alt="Remy Sharp" 
//                       className={classes.profileImage}
//                       src={postData.authorImage} 
//                       />
//                   </div>
                  
//                   </GridItem>
//                   <GridItem xs={6} sm={6} md={8}>
//                   <h4 className={classes.authorName}>{postData.authorName}</h4>
//                   <h4 className={classes.authorTag}>{postData.authorTag}</h4>
//                   </GridItem>
//               </GridContainer>
//               </Card>
//           </GridItem>
//         </GridContainer>

//         {/* Blog Content */}
//         <GridContainer>
//             <div className={classes.container}>
//                 {formatBlogContent(postData.content)}
//             </div>
//         </GridContainer>

//         {/* Blog Views */}
//         <GridContainer>
//             <GridItem xs={6} sm={4} md={3}>
//                 <GridContainer>
//                 <GridItem>
//                     <div style={{
//                         display: 'flex',
//                         alignItems: 'left'
//                     }}>
//                     <p className={classes.views}>
//                         <VisibilityIcon color='#e91e63'/>
//                     </p>
//                     <p className={classes.views}>
//                         &nbsp;{postData.views} views
//                     </p>
//                     </div>  
//                 </GridItem>
//                 </GridContainer>
//             </GridItem>
//         </GridContainer>

//         {/* More Blogs */}
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={12}
//             style={{
//               textAlign: 'center',
//               justifyContent: 'center'
//             }}>
//             <h2 className={classes.title}>we have more!</h2>
//           </GridItem>
//             <GridItem>
//               <NavPills
//                 color="primary"
//                 horizontal={{
//                   tabsGrid: { xs: 12, sm: 4, md: 4 },
//                   contentGrid: { xs: 12, sm: 8, md: 8 }
//                 }}
//                 tabs={renderWorkList(moreWorks)}
//               />
//             </GridItem>
//         </GridContainer>
//     </div>
// </div>

