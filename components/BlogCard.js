import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import baseStyles from "../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { fade } from '@material-ui/core/styles/colorManipulator';
import Fade from '@material-ui/core/Fade';
import Button from "components/CustomButtons/Button.js";
import Quote from "components/Typography/Quote.js";
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';
import { container, title } from "assets/jss/nextjs-material-kit.js";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";

// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

const styles = {
    ...baseStyles,
    ...imagesStyles,
    button: {
      height: '100%', 
      width: '100%',
      padding: 0 
    },
    header: {
        color: dangerColor, 
        fontWeight: 'bold', 
        letterSpacing: '1px'
    },
    timestamp: {
        display: 'inline', 
        color: '#888', 
        fontWeight: 'normal'
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        textDecoration: "none",
        margin: "0",
    },
    subtitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
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
        position: 'absolute',
        color: 'white',
        opacity: 0.5,
        backgroundColor: fade('#000000', 0.8)
    },
    card: {
        margin: "20px 5px 5px",
        overflow: 'hidden',
        backgroundSize: 'cover',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:hover, &$focusVisible': {
            zIndex: 1,
            // '& $imageBackdrop': {
            //   opacity: 0.15,
            // },
            // '& $imageMarked': {
            //   opacity: 0,
            // },
            // '& $imageTitle': {
            //   border: '4px solid currentColor',
            // },
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        },
    },
    cardImage: {
        // height: '100%', 
        width: '100%', 
        opacity: 0.9,
        borderRadius: "5px",
    },
    cardImageContainer: {
        overflow: "hidden",
        backgroundRepeat: 'round',
        // height: "50%",
        margin: '5% 5% 5% 5%',
        width: '100%',
        // height: '100%',
        boxShadow: '0 8px 16px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        borderRadius: "5px",
    },
    cardContent: {
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        height: '100%',
    },
    imageButton: {
        position: 'relative',
        height: 200,
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
    },
}

export default function BlogCard(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [showDetails, setShowDetails] = useState(false);
    let routing = { 
        pathname: `/blog/${props.blog.id}`, 
        query: { blogId: props.blog.id }
    }

    // Responsive Handling
    const small_device_flag = useMediaQuery((theme) => theme.breakpoints.down('md'));

    let content = (
        // <ButtonBase href={routing.pathname} className={classes.imageButton}>
        <div className={classes.card}>
            <GridContainer
                // justify='center'
            >
                <GridItem xs={6} sm={6} md={5}>
                    <div className={classes.cardImageContainer}>
                        <ButtonBase href={`/blog/${props.blog.id}`}>
                            <img
                                src={props.blog.titleImage}
                                alt="Title Image"
                                className={classes.cardImage}
                            />
                        </ButtonBase>
                    </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <div className={classes.cardContent}>
                        <GridContainer 
                            align="left" 
                            style={{ height: '100%', width: '100%' }}
                        >
                            <GridItem xs={12} sm={10} md={12}>
                                <h6 style={{color: dangerColor, fontWeight: 'bold', letterSpacing: '1px'}}>
                                    {props.blog.category}
                                    <h6 style={{display: 'inline', color: '#888',  fontWeight: 'normal'}}> / {props.blog.timestamp}</h6>
                                </h6>
                                <Link href={routing} as={`/blog/${props.blog.id}`}>
                                    <a style={{color: '#777'}}>
                                        <h3 className={classes.title}>{props.blog.title}</h3>
                                    </a>
                                </Link>
                                <Divider />
                                <h5 className={classes.subtitle}>{props.blog.subtitle}</h5>
                                <h5>by <span style={{fontWeight: 'bolder'}}>{props.blog.authorName}</span></h5>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
    if (props.forTile) {
        content = (
          <GridContainer 
              align="left" 
              justify="center" 
              style={{ height: '100%', width: '100%' }}
          >
              <GridItem xs={12} sm={12} md={10}>
                    <h6 className={classes.header}>
                        {props.blog.category}
                        <h6 className={classes.timestamp}> / {props.blog.timestamp}</h6>
                    </h6>
                    <Link href={{ pathname: `/blog/${props.blog.id}`}} as={`/blog/${props.blog.id}`}>
                        <a style={{color: 'black'}}>
                            <h3 
                                className={classes.title} 
                            >
                            {props.blog.title}
                            </h3>
                        </a>
                    </Link>
                    <Divider />
                    <h5 className={classes.subtitle} 
                        style={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {props.blog.subtitle}
                    </h5>
                    <h5>by <span style={{fontWeight: 'bolder'}}>{props.blog.authorName}</span></h5>
              </GridItem>   
          </GridContainer>
        )
    } else if (small_device_flag) {
        content = (
            <>
                <div className={classes.card} style={{ width: '80%', marginBottom: '5vh', paddingBottom: '2vh', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
                    <div className={classes.cardImageContainer} style={{ width: '90%' }}>
                        <ButtonBase href={`/blog/${props.blog.id}`}>
                            <img
                                src={props.blog.titleImage}
                                alt="Title Image"
                                className={classes.cardImage}
                            />
                        </ButtonBase>
                    </div>
                    <div className={classes.cardContent}>
                        <GridContainer 
                            align="left" 
                            justify="center" 
                            style={{ height: '100%', width: '100%' }}
                        >
                            <GridItem xs={12} sm={12} md={10}>
                                <h6 style={{color: dangerColor, fontWeight: 'bold', letterSpacing: '1px'}}>
                                    {props.blog.category}
                                    <h6 style={{display: 'inline', color: '#888',  fontWeight: 'normal'}}> / {props.blog.timestamp}</h6>
                                </h6>
                                <Link href={routing} as={`/blog/${props.blog.id}`}>
                                    <a style={{color: '#777'}}>
                                        <h3>{props.blog.title}</h3>
                                    </a>
                                </Link>
                                
                                <Divider />
                                <h5 >{props.blog.subtitle}</h5>
                                {/* <h6 style={{borderBottom: '1px solid red', color: 'red'}}> View </h6> */}
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                {/* <Divider /> */}
            </>
            
        )
    }

    return (
        <>
            {content}
        </>
    )
}

// content = (
//     <div className={classes.card}>
//         <div className={classes.cardImageContainer}>
//             <img
//                 src={props.blog.titleImage}
//                 alt="Title Image"
//                 className={classes.cardImage}
//                 // style={{  transform: showDetails? "scale(1.2)" : undefined, transitionDuration: showDetails? "0.8s" : undefined }}
//             />
//         </div>
//         <div className={classes.cardContent}>
//             <GridContainer 
//                 align="left" 
//                 // justify="center" 
//                 // alignItems="center" 
//                 // direction="column"
//                 style={{ height: '100%', width: '100%' }}
//             >
//                 <GridItem xs={12} sm={10} md={12}>
//                     <h6 style={{color: dangerColor, fontWeight: 'bold', letterSpacing: '1px'}}>
//                         {props.blog.category}
//                         <h6 style={{display: 'inline', color: '#888',  fontWeight: 'normal'}}> / {props.blog.timestamp}</h6>
//                     </h6>
//                     <Link href={routing} as={`/blog/${props.blog.id}`}>
//                         <a style={{color: '#777'}}>
//                             <h3>{props.blog.title}</h3>
//                         </a>
//                     </Link>
                    
//                     <Divider />
//                     <h5 >{props.blog.subtitle}</h5>
//                     {/* <h6 style={{borderBottom: '1px solid red', color: 'red'}}> View </h6> */}
//                 </GridItem>
//             </GridContainer>
//         </div>
//     </div>
// )


// LEL


// const styles = {
//     ...baseStyles,
//     ...imagesStyles,
//     clickableCard: {
//         // height: '100%',
//         // width: '100%',  
//     },
//     // title: {
//     //     fontSize: "1.313rem",
//     //     maxWidth: "500px",
//     //     margin: "10px auto 0",
//     //     color: "black"
//     //   },
//     // subtitle: {
//     //     fontSize: "1.000rem",
//     //     maxWidth: "500px",
//     //     margin: "10px auto 0",
//     //     color: "#999"
//     // },
//     // imageContainer: {
//     //     height: "100px",
//     //     width: "60%",
//     //     overflow: "hidden",
//     // },
//     // profileImage: {
//     //     height: '100%',
//     //     width: '100%',
//     // },
//     // blogContent: {
//     //     color: "red",
//     //     fontSize: 100,
        
//     // },
//     // blogTitle: {
//     //     fontSize: "1.313rem",
//     //     maxWidth: "500px",
//     //     margin: "10px auto 0",
//     //     color: "black",
//     //     '&:hover': {
//     //         color: "blue",
//     //      },
//     //   },
//     //   blogGist: {
//     //     fontSize: "1.313rem",
//     //     maxWidth: "500px",
//     //     margin: "10px auto 0",
//     //     color: "#999"
//     //   },
//     button: {
//       height: '100%', 
//       width: '100%',
//       padding: 0 
//     },
//     title: {
//         fontSize: "1.313rem",
//         maxWidth: "500px",
//         margin: "10px auto 0",
//         color: "black"
//       },
//     subtitle: {
//         fontSize: "1.000rem",
//         maxWidth: "500px",
//         margin: "10px auto 0",
//         color: "#999"
//     },
//     imageContainer: {
//         overflow: "hidden",
//         backgroundRepeat: 'round'
//     },
//     profileImage: {
//         height: '100%',
//         width: '100%',
//     },
//     blogContent: {
//         color: "red",
//         fontSize: 100
//     },
//     overlay: {
//         height: "100%",
//         width: "100%",
//         position: 'absolute',
//         color: 'white',
//         opacity: 0.5,
//         backgroundColor: fade('#000000', 0.8)
//     },
//     card: {
//         width: "22rem",
//         height: "20rem",
//         margin: "0 0 2",
//         overflow: 'hidden',
//         backgroundSize: 'cover',
//         backgroundColor: fade('#000000', 0.2)
//     },
//     imageButton: {
//         position: 'relative',
//         height: 200,
//         // [theme.breakpoints.down('xs')]: {
//         //   width: '100% !important', // Overrides inline-style
//         //   height: 100,
//         // },
//         '&:hover, &$focusVisible': {
//           zIndex: 1,
//           '& $imageBackdrop': {
//             opacity: 0.15,
//           },
//           '& $imageMarked': {
//             opacity: 0,
//           },
//           '& $imageTitle': {
//             border: '4px solid currentColor',
//           },
//         },
//     },
// }

// export default function BlogCard(props) {
//     const useStyles = makeStyles(styles);
//     const classes = useStyles();
//     const [showDetails, setShowDetails] = useState(false);
//     let routing = { 
//         pathname: `/blog/${props.blog.id}`, 
//         query: { blogId: props.blog.id }
//     }

//     // Responsive Handling
//     const small_device_flag = useMediaQuery((theme) => theme.breakpoints.down('md'));

//     let content = (
//         <ButtonBase href={routing.pathname} className={classes.imageButton}>
//             <Card 
//                 className={classes.card} 
//                 onMouseEnter={() => {setShowDetails(()=> true)}} 
//                 onMouseLeave={() => {setShowDetails(() => false)}}
//             >
//                 <div className={classes.imageContainer}>
//                     <img
//                         src={props.blog.titleImage}
//                         alt="Title Image"
//                         style={{ height: '100%', opacity: 0.9, transform: showDetails? "scale(1.2)" : undefined, transitionDuration: showDetails? "0.8s" : undefined }}
//                     />
//                 </div>
//                 <Fade
//                     in={showDetails}  
//                     transitionDuration={40}
//                     style={{ transformOrigin: '1 1 -1', height: '100%', width: '100%' }}
//                     {...(showDetails ? { timeout: 600 } : {})}
//                 >
//                     <div className={classes.overlay}>
//                         <GridContainer 
//                             align="center" 
//                             justify="center" 
//                             alignItems="center" 
//                             spacing={0}
//                             direction="column"
//                             style={{ height: '100%', width: '110%' }}
//                         >
//                             <GridItem xs={12} sm={10} md={9}>
//                                 <h6 style={{color: dangerColor, fontWeight: 'bold'}}>{props.blog.category}</h6>
//                                 <h4>{props.blog.title}</h4>
//                                 <Divider />
//                                 <p style={{color: "#F5F5F5"}}>{props.blog.subtitle}</p>
//                                 {/* <h6 style={{borderBottom: '1px solid red', color: 'red'}}> View </h6> */}
//                                 <GridContainer
//                                     justify="center" 
//                                     alignItems="flex-end"
//                                 >
//                                     <GridItem xs={2} sm={2} md={2}>
//                                         <Avatar style={{margin: 0}} alt={props.blog.authorName} src={props.blog.authorImage} />
//                                     </GridItem>
//                                     <GridItem xs={4} sm={4} md={4}>
//                                         <p>{props.blog.authorName} </p>
//                                     </GridItem>
//                                 </GridContainer>
//                             </GridItem>
//                         </GridContainer>
//                     </div>
//                 </Fade>
//             </Card>
//         </ButtonBase>
//     )
//     if (small_device_flag) {
//         content = (
//             <Card style={{width: "20rem"}}>
//                 <div className={classes.imageContainer} >
//                     <img
//                         style={{width: "100%", display: "block"}}
//                         className={classes.imgCardTop}
//                         src={props.blog.titleImage}
//                         alt="Title Image"
//                     />
//                 </div>
//                 <CardBody>
//                     <GridContainer 
//                         align="center" 
//                         justify="center" 
//                         alignItems="center"
//                     >
//                         <GridItem xs={12} sm={10} md={12}>
//                             <h4 style={{fontWeight: 'bold'}}>{props.blog.title}</h4> 
//                         </GridItem>
//                         <GridItem xs={12} sm={12} md={12}>
//                             <GridContainer
//                                 justify="center" 
//                                 alignItems="flex-end"
//                             >
//                                 <GridItem xs={2} sm={2} md={2}>
//                                     <Avatar style={{margin: 0}} alt={props.blog.authorName} src={props.blog.authorImage} />
//                                 </GridItem>
//                                 <GridItem xs={4} sm={4} md={4}>
//                                     <p>{props.blog.authorName} </p>
//                                 </GridItem>
//                                 <GridItem xs={10} sm={10} md={10}>
//                                     <Divider style={{ marginTop: '10px', marginBottom: '10px' }}/>
//                                 </GridItem>
//                             </GridContainer>
//                         </GridItem>
//                         <GridItem xs={12} sm={10} md={10}>
//                             <p>{props.blog.subtitle}</p>
//                         </GridItem>
//                         <GridItem xs={12} sm={10} md={12}>
//                             <Link href={routing} as={`/blog/${props.blog.id}`}>
//                                 <Button color="primary">View</Button>
//                             </Link>
//                         </GridItem>
//                     </GridContainer>
//                 </CardBody>
//             </Card>
//         )
//     }

//     return (
//         <>
//             {content}
//         </>
//     )
// }