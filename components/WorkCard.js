import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import baseStyles from "../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { fade } from '@material-ui/core/styles/colorManipulator';
import Quote from "components/Typography/Quote.js";
import Collapse from '@material-ui/core/Collapse';
import Button from "components/CustomButtons/Button.js";
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = {
    ...baseStyles,
    button: {
      height: '100%', 
      width: '100%',
      padding: 0 
    },
    title: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0",
      },
    subtitle: {
        fontSize: "1.000rem",
        maxWidth: "500px",
        margin: "10px auto 0",
        color: "#999"
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        overflow: "hidden",
        backgroundRepeat: 'round'
    },
    profileImage: {
        height: '100%',
        width: '100%',
    },
    blogContent: {
        color: "red",
        fontSize: 100
    },
    overlay: {
        height: "100%",
        width: "100%",
        color: 'white',
        opacity: 0.8,
        transition: 'all 0.3s',
        backgroundColor: fade('#000000', 0.999),
        "&:hover": {
          opacity: 1,
          backgroundColor: fade('#000000', 0.4),
        },
    },
    card: {
      minWidth: "20rem", 
      height: '50vh',
      margin: '20px 10px',
      overflow: 'hidden',
      display: 'block',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      "&:hover": {
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        transform: 'scale(1.05)'
      },
    },
    imgCard: {
      width: "100%",
      borderRadius: "calc(.50rem - 2px)"
    }
}

export default function WorkCard(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const [showDetails, setShowDetails] = useState(false);

    // Responsive Handling
    const small_device_flag = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const routing = {
      pathname: `/work/${props.work.id}`, 
    }
    let typography = {
      title: small_device_flag ? (<h3 style={{fontWeight: 'bold'}}>{props.work.title}</h3>) : (<h2 style={{fontWeight: 'bold'}}>{props.work.title}</h2>),
      subtitle: small_device_flag ? (<p>{props.work.subtitle}</p>) : (<h4>{props.work.subtitle}</h4>)
    }

    let content = (
      <div
        className={classes.card}
        style={{backgroundImage: `url(${props.work.titleImage})`}}
      >
        <div className={classes.overlay}>
          <GridContainer
            direction="column"
            justify="center"
            alignItems="center"
            style={{height: '70%'}}
          >
              <GridItem xs={12} sm={12} md={12} >
                <h6 style={{color: dangerColor, fontWeight: 'bold', textTransform: 'uppercase'}}>{props.work.section}</h6>
              </GridItem>
              <GridItem xs={9} sm={12} md={10}>
                <Link href={routing} as={`/work/${props.work.id}`}>
                  <a style={{color: '#fff'}}>
                    {typography.title}
                  </a>
                </Link>
              </GridItem>
              <Divider style={{backgroundColor: '#696969'}} />
              <GridItem xs={9} sm={12} md={6}>
                {typography.subtitle}
              </GridItem>
          </GridContainer>
          <div style={{height: '30%'}}>
            <SnackbarContent
              message={
                <Link href={routing} as={`/work/${props.work.id}`}>
                  <Button color="rose" round>
                    Read More <ArrowForwardIosIcon /> 
                  </Button>
                </Link>
              }
              color='white'
            />
          </div>
        </div>
      </div>
    )

    // if (small_device_flag) {
    //     content = (
    //         <Card style={{width: "20rem"}}>
    //             <div className={classes.imageContainer} >
    //                 <img
    //                     style={{width: "100%", display: "block"}}
    //                     className={classes.imgCardTop}
    //                     src={props.work.titleImage}
    //                     alt="Title Image"
    //                 />
    //             </div>
    //             <CardBody>
    //                 <h4 className={classes.cardTitle}>{props.work.title}</h4>  
    //                 <p>{props.work.subtitle}</p>
    //                 <Link href={routing} as={`/work/${props.work.id}`}>
    //                     <Button color="primary">View</Button>
    //                 </Link>
    //             </CardBody>
    //         </Card>
    //     )
    // }

    return (
        <>
            {content}
        </>
    )
}

export async function getStaticProps(context) {
  const allBlogs = await getSortedPostsData()
  return {
      props: {
          allBlogs,
      },
  }
}