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
import Favorite from "@material-ui/icons/Favorite";
import List from "@material-ui/icons/List";
// import BlogCard from "pages-sections/Blog-Sections/BlogCard.js";

// Mine
import { getSortedPostsData } from '../lib/blogposts';


// Styles
const styles = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
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
    margin: "-60px 30px -40px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    paddingBottom: '10px',
    marginBottom: "24px",
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
    color: '#e91e63',
    fontSize: "1.313rem"
  }
};
const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function BlogView (props) {
    const classes = useStyles();

    // Fetch Blog
    let blogId = Router.query.blogId;
    let thisBlog = allBlogs.blogs.filter((thisBlog) => (thisBlog.id === blogId))[0]
    allBlogs["blogs"].sort(function(a,b){
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    const [blog, setBlog] = useState(thisBlog ? thisBlog : NULL);

    // All Blogs
    let BlogList = [
      {
        tabButton: "Marketing",
        tabIcon: Camera,
        tabContent: (
          <GridContainer justify="center">
            {
              allBlogs["blogs"].map((item, index) => (
                <GridItem  key={index} xs={12} sm={12} md={12}>
                  <BlogCard 
                    blog={item}
                    onClick={() => {}}
                  />
                </GridItem>
              ))
            }
          </GridContainer>
        )
      },
      {
        tabButton: "Design",
        tabIcon: Palette,
        tabContent: (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
             
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>

            </GridItem>
          </GridContainer>
        )
      },
      {
        tabButton: "Innovation",
        tabIcon: Favorite,
        tabContent: (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>

            </GridItem>
            <GridItem xs={12} sm={12} md={4}>

            </GridItem>
          </GridContainer>
        )
      }
    ]

    // Render Blog
    const render = () => {
      return (
          <>
              <Parallax className={classes.parallax} filter responsive image={blog.titleImage} />
              <div className={`${classes.main} ${classes.mainRaised}`}>
                  <div className={classes.container}>
                      {/* Title */}
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}
                          style={{
                            textAlign: 'center',
                            justifyContent: 'center'
                          }}>
                              <h2 className={classes.title}>{blog.title}</h2>
                        </GridItem>
                      </GridContainer>

                      {/* Subtitle */}
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}
                          style={{
                            textAlign: 'center',
                            justifyContent: 'center'
                          }}>
                            <h2 className={classes.subtitle}>{blog.subtitle}</h2>
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
                              <h4 className={classes.timestamp}>{blog.readableDate}</h4>
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
                                    src={blog.authorImage} 
                                    />
                                </div>
                                
                                </GridItem>
                                <GridItem xs={6} sm={6} md={8}>
                                <h4 className={classes.authorName}>{blog.authorName}</h4>
                                <h4 className={classes.authorTag}>{blog.authorTag}</h4>
                                </GridItem>
                            </GridContainer>
                            </Card>
                        </GridItem>
                      </GridContainer>

                      {/* Blog Content */}
                      <GridContainer>
                      <div className={classes.container}>
                          {blog.bodyText.split("<br>").map((i, key) => {
                          return (
                              <p className={classes.blogText}>
                              {i}
                              <br></br>
                              </p> 
                          )
                          })}
                          <br></br>
                      </div>
                      
                      </GridContainer>

                      {/* Blog Views */}
                      <GridContainer>
                          <GridItem xs={6} sm={4} md={3}>
                              <GridContainer>
                              <GridItem>
                                  <div style={{
                                      display: 'flex',
                                      alignItems: 'left'
                                  }}>
                                  <p className={classes.views}>
                                      <VisibilityIcon color='#e91e63'/>
                                  </p>
                                  <p className={classes.views}>
                                      &nbsp;{blog.views} views
                                  </p>
                                  </div>  
                              </GridItem>
                              </GridContainer>
                          </GridItem>
                      </GridContainer>

                      {/* More */}
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}
                          style={{
                            textAlign: 'center',
                            justifyContent: 'center'
                          }}>
                          <h2 className={classes.title}>we have more!</h2>
                        </GridItem>
                          <GridItem>
                            <NavPills
                              color="primary"
                              horizontal={{
                                tabsGrid: { xs: 12, sm: 4, md: 4 },
                                contentGrid: { xs: 12, sm: 8, md: 8 }
                              }}
                              tabs={BlogList}
                            />
                          </GridItem>
                      </GridContainer>
                  </div>
              </div>
          </>
      )
    }

    // Define Content
    let content = (
      <CircularProgress />
    )
    if (blog) {
      content = render();
    }

    return (
      <>
        {/* Header */}
        <Header
          color="primary"
          routes={dashboardRoutes}
          brand="The Wildfire Digital"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}/>

        {/* Blog Content */}
        {content}


        <GridContainer>
          <GridItem>
            
          </GridItem>
        </GridContainer>

        {/* Footer */}
        <Footer />
      </>
    )
}