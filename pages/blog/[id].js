import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Link from 'next/link';
import Router from 'next/router';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "components/CustomButtons/Button.js";
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
import Favorite from "@material-ui/icons/Favorite";
import List from "@material-ui/icons/List";
import BlogCard from "components/BlogCard.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import { Facebook, LinkedIn, Twitter, WhatsApp } from '@material-ui/icons';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import ContactFlex from 'components/ContactFlex.js';

// Fetching Data
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/blog-posts'; 

// Styles
const styles = {
    container: {
        zIndex: "12",
        // color: "#FFFFFF",
        color: "black",
        ...container
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
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-60px 0 -40px",
        borderRadius: "6px",
        boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
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
        color: roseColor,
        fontSize: "1.313rem",
    },
    icon: {
        display: 'flex',
        verticalAlign: 'middle',
    }
};
const useStyles = makeStyles(styles);


export default function Blog({postData, moreBlogs}) {
    const classes = useStyles();

    // Format Blog Content
    const formatBlogContent = (content) => {
        return (
            <div className={classes.blogText} dangerouslySetInnerHTML={{ __html: content }} />
        )
    }

    return (
        <>
            {/* Header */}
            <Header
                color="transparent"
                routes={[]}
                brand="The Wildfire Digital"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "rose"
                }}
            />


            {/* Content */}
            <Parallax className={classes.parallax} filter responsive image={postData.titleImage} />
            <GridContainer justify="center" alignItems="center">
                <GridItem xs={12} sm={12} md={10}>
                    <div className={`${classes.main} ${classes.mainRaised}`}>
                        <div className={classes.container}>

                            {/* Title */}
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}
                                    style={{
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                    }}>
                                        <h2 className={classes.title}>{postData.title}</h2>
                                </GridItem>
                            </GridContainer>


                            {/* Subtitle */}
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}
                                    style={{
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                    }}>
                                    <h2 className={classes.subtitle}>{postData.subtitle}</h2>
                                </GridItem>
                            </GridContainer><br></br>


                            {/* Timestamp */}
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <div
                                        style={{
                                            position: 'absolute', 
                                            left: '50%', 
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <h4 className={classes.timestamp}>{postData.readableDate}</h4>
                                    </div>
                                </GridItem>
                            </GridContainer>


                            {/* Author Card */}
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <Card className={classes.profileCard}>
                                    <GridContainer
                                        justify="space-between"
                                        spacing={5}>
                                        <GridItem xs={6} sm={6} md={4}>
                                        <div
                                            style={{
                                                position: 'absolute', 
                                                left: '50%', 
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <Avatar 
                                            alt="Remy Sharp" 
                                            className={classes.profileImage}
                                            src={postData.authorImage} 
                                            />
                                        </div>
                                        
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={8}>
                                        <h4 className={classes.authorName}>{postData.authorName}</h4>
                                        <h4 className={classes.authorTag}>{postData.authorTag}</h4>
                                        </GridItem>
                                    </GridContainer>
                                    </Card>
                                </GridItem>
                            </GridContainer>


                            {/* Blog Content */}
                            <GridContainer>
                                <div className={classes.container}>
                                    {formatBlogContent(postData.contentHtml)}
                                </div>
                            </GridContainer>


                            {/* Blog Footer */}
                            <GridContainer
                                justify="space-between"
                                alignItems="center"
                            >
                                {/* Views */}
                                <GridItem xs={6} sm={4} md={6}>
                                    <p className={classes.views}>
                                        <VisibilityIcon className={classes.icon} color={roseColor}/>{postData.views} views
                                    </p>
                                </GridItem>

                                {/* Share */}
                                <GridItem xs={6} sm={4} md={3}>
                                    {/* Window Not Defined! */}
                                    {/* <FacebookShareButton url={window.location.href} >
                                        <Button justIcon round color="rose">
                                            <Facebook />
                                        </Button>
                                    </FacebookShareButton>{' '}
                                    <TwitterShareButton url={window.location.href} >
                                        <Button justIcon round color="rose">
                                            <Twitter />
                                        </Button>
                                    </TwitterShareButton>{' '}
                                    <LinkedinShareButton url={window.location.href} >
                                        <Button justIcon round color="rose">
                                            <LinkedIn />
                                        </Button>
                                    </LinkedinShareButton>{' '}
                                    <WhatsappShareButton url={window.location.href} >
                                        <Button justIcon round color="rose">
                                            <WhatsApp />
                                        </Button>
                                    </WhatsappShareButton> */}
                                </GridItem>
                            </GridContainer>


                            {/* More Blogs */}
                            <div className={classNames(classes.container, classes.section)}>
                                <h2 style={{marginLeft: '25px', letterSpacing: '1px'}}>Find more here ...</h2>
                                <GridContainer
                                    align="center" 
                                    justify="center" 
                                    alignItems="center" 
                                >
                                    {moreBlogs.map((thisBlog) => {
                                    return (
                                        <GridItem xs={12} sm={12} md={12} lg={12} xl={12} key={thisBlog.id}>
                                            <BlogCard blog={thisBlog}/>
                                        </GridItem>
                                    )
                                    })}
                                </GridContainer>
                            </div><br></br>
                        </div>

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
    const moreBlogs = await getSortedPostsData();
    return {
        props: {
            postData,
            moreBlogs: moreBlogs.slice(0, 3),
        },  
    }
}
