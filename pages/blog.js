import React, { useState, useEffect } from "react";
import Link from "next/link";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import { Camera, Palette, Favorite } from "@material-ui/icons";
import { container, title } from "assets/jss/nextjs-material-kit.js";
import { fade } from '@material-ui/core/styles/colorManipulator';
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
// import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import backgroundImage from "assets/img/blogs-backgroound.jpg";
import BlogCard from "components/BlogCard.js";
import { getSortedPostsData } from 'lib/blog-posts'; 
import ContactFlex from 'components/ContactFlex.js';


// Styles
const styles = {
  container: {
    zIndex: "12",
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
  mainRaised: {
    margin: "-60px 0px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
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
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    // marginTop: 60
  },
  heroBackground: {
    position: "relative",
    height: "80vh",
    backgroundImage: "url('https://149349300.v2.pressablecdn.com/wp-content/uploads/2019/04/agenda-analysis-business-plan-990818.jpg')",
    backgroundSize: 'cover',
    backgroundColor: fade('#000000', 0.8),
  },
  hero: {
    height: "80vh",
    width: "100%",
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: fade('#000000', 0.8)
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
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  section: {
    paddingTop: '2vh',
    paddingBottom: '5vh'
},
};
const useStyles = makeStyles(styles);


export default function Blog(props) {
  // More Styles
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        brand="The Wildfire Digital"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'rose',
          marginTop: 0
        }}
        {...rest}
      />

      {/* Hero */}
      <Parallax filter responsive image={'https://www.luxreview.com/wp-content/uploads/upload/system/2018/07/10152008.jpg'}>
        <div className={classes.container}>
          <GridContainer 
            align="center" 
            justify="center" 
            alignItems="center" 
            spacing={0}
            direction="column"
          >
            <GridItem xs={12} sm={10} md={8}>
              <h4 className={classes.title} style={{color: dangerColor, fontWeight: 'bold'}}>WILDFIRE BLOGS</h4>
            </GridItem>
            <GridItem xs={12} sm={10} md={8}>
              <h1 className={classes.title} style={{color: '#F5F5F5'}}>Endless streams of knowledge</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      {/* Blog List */}
      <GridContainer
        // align="center" 
        justify="center" 
        // alignItems="center"
      >
        <GridItem xs={12} sm={11} md={10}>
          <div className={classNames(classes.home, classes.mainRaised)}>
            <div className={classNames(classes.container, classes.section)}>
              {/* <h1 className={classes.title} style={{marginLeft: '20px'}}>Latest Blogposts</h1> */}
              <h1 style={{marginLeft: '20px'}}>Latest Blogposts</h1>
              <GridContainer
                align="center" 
                justify="center" 
                alignItems="center" 
              >
                {props.allBlogs.map((thisBlog) => {
                  return (
                    <GridItem xs={12} sm={12} md={12} lg={12} xl={12} key={thisBlog.id}>
                      <BlogCard blog={thisBlog}/>
                    </GridItem>
                  )
                })}
              </GridContainer>
            </div>

            {/* Contact */}
            <ContactFlex />
          </div>
        </GridItem>
      </GridContainer>

      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const allBlogs = await getSortedPostsData()
  return {
      props: {
          allBlogs,
      }, 
  }
}



{/* <GridContainer
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
>
  <GridItem xs={10} sm={5} md={3}>
    <h1 className={classes.title}>Blogs we <Favorite className={classes.icon} /></h1>
  </GridItem>   
</GridContainer> 
<div>
  <div className={classes.container}>
    <div className={classes.description}>
      <p>
      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Mollis nunc sed id semper risus in hendrerit. Vitae tempus quam pellentesque nec nam aliquam sem. {" "}
      </p>
    </div>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={10} className={`${classes.navWrapper} ${classes.navPills}`}>
        <NavPills
          alignCenter
          color="primary"
          tabs={renderBlogList(props.allBlogs)}
        />
      </GridItem>
    </GridContainer>
  </div>
</div> */}

// <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
//       <div className={classNames(classes.main, classes.mainRaised)}>
//         <div>
//           <div className={classes.container}>
//             <GridContainer justify="center">
//               <GridItem xs={12} sm={12} md={6}>
//                 <div className={classes.profile}>
//                   <div>
//                     <img src={profile} alt="..." className={imageClasses} />
//                   </div>
//                   <div className={classes.name}>
//                     <h3 className={classes.title}>Christian Louboutin</h3>
//                     <h6>DESIGNER</h6>
//                     <Button justIcon link className={classes.margin5}>
//                       <i className={"fab fa-twitter"} />
//                     </Button>
//                     <Button justIcon link className={classes.margin5}>
//                       <i className={"fab fa-instagram"} />
//                     </Button>
//                     <Button justIcon link className={classes.margin5}>
//                       <i className={"fab fa-facebook"} />
//                     </Button>
//                   </div>
//                 </div>
//               </GridItem>
//             </GridContainer>
//             <div className={classes.description}>
//               <p>
//                 An artist of considerable range, Chet Faker — the name taken by
//                 Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
//                 and records all of his own music, giving it a warm, intimate
//                 feel with a solid groove structure.{" "}
//               </p>
//             </div>
//             <GridContainer justify="center">
//               <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
//                 <NavPills
//                   alignCenter
//                   color="primary"
//                   tabs={[
//                     {
//                       tabButton: "Studio",
//                       tabIcon: Camera,
//                       tabContent: (
//                         <GridContainer justify="center">
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={studio1}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio2}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={studio5}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio4}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                         </GridContainer>
//                       )
//                     },
//                     {
//                       tabButton: "Work",
//                       tabIcon: Palette,
//                       tabContent: (
//                         <GridContainer justify="center">
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work1}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work2}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work3}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work4}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work5}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                         </GridContainer>
//                       )
//                     },
//                     {
//                       tabButton: "Favorite",
//                       tabIcon: Favorite,
//                       tabContent: (
//                         <GridContainer justify="center">
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work4}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio3}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                           <GridItem xs={12} sm={12} md={4}>
//                             <img
//                               alt="..."
//                               src={work2}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={work1}
//                               className={navImageClasses}
//                             />
//                             <img
//                               alt="..."
//                               src={studio1}
//                               className={navImageClasses}
//                             />
//                           </GridItem>
//                         </GridContainer>
//                       )
//                     }
//                   ]}
//                 />
//               </GridItem>
//             </GridContainer>
//           </div>
//         </div>
//       </div>
//       <Footer />