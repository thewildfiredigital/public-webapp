import React, { useState } from "react";

// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import { title } from "assets/jss/nextjs-material-kit.js";
import { roseColor, primaryColor, dangerColor } from 'assets/jss/nextjs-material-kit';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import Card from "components/Card/Card.js"
import CardBody from "components/Card/CardBody.js"
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonBase from '@material-ui/core/ButtonBase';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Hero from 'components/Hero';
import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";
import Divider from '@material-ui/core/Divider';
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

import axios from "axios";
import { TextField } from '@material-ui/core';

const styles = {
    ...imagesStyles,
    title: {
        ...title,
        color: '#f2f2f2'
    },
    background: {
        backgroundColor: '#191919',
        marginTop: '-10px',
        height: '200px',
        width: '100%',
        color: '#999'
    },
    enquiry: {
        backgroundColor: dangerColor,
        height: '40vh',
        width: '100%',
        marginTop: '-150px',
        marginBottom: '-50px'
    }
};
const useStyles = makeStyles(styles);

export default function Contact (props) {
    const classes = useStyles();
    const { ...rest } = props;

    const [showContactModal, setShowContactModal] = useState(false);
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);

    // Form Data
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMobile, setContactMobile] = useState('');
    const [contactCompany, setContactCompany] = useState('');

    // Form Handling
    const handleOnSubmit = e => {
        e.preventDefault();

        let thisform = new FormData();
        thisform.append('Name', contactName);
        thisform.append('Email', contactEmail);
        thisform.append('Mobile Number', contactMobile);
        thisform.append('Company Name', contactCompany);
        axios({
            method: "POST",
            url: "https://formspree.io/f/mjvpeeeg",
            data: thisform
        })
        .then(r => {
            console.log("Successfully sent contact request.")
            setContactName('');
            setContactEmail('');
            setContactMobile('');
            setContactCompany('');
            setShowContactModal(false);
            setShowSuccessBanner(true);
        })
        .catch(r => {
            console.log(r.response);
            setShowContactModal(true);
            setShowSuccessBanner(false);
        });
    };

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
                    color: 'white',
                    marginTop: 0
                }}
                {...rest}
            />

            {/* Hero */}
            <Hero 
                title="CONTACT" 
                subtitle="Get in touch, we’d love to hear from you!"
            >
                {/* Contact Submission Notification */}
                {showSuccessBanner && (
                    <SnackbarContent
                    message={
                        <span>
                            <b>SUCCESS:</b> We have received your request, and will get back to you shortly.
                        </span>
                    }
                    close
                    color="success"
                    icon={Check}
                />
                )}
            </Hero>

            <div className={classes.background} />
            <div>
                {/* Enquiry Button */}
                <GridContainer
                    justify="center" 
                    alignItems="center" 
                >
                    <GridItem xs={12} sm={9} md={5}>
                        <div className={classes.enquiry}>
                            <ButtonBase onClick={() => setShowContactModal(true)} style={{height: '100%', width: '100%'}}>
                                <GridContainer
                                    justify="center" 
                                    alignItems="center"
                                    align="center"
                                    style={{height: '90%'}}
                                >
                                    <GridItem xs={12} sm={9} md={12}>
                                        <h2 style={{color: 'white'}}>Business Enquiries</h2>
                                    </GridItem>
                                </GridContainer>
                            </ButtonBase>
                        </div>
                    </GridItem>
                </GridContainer>


                {/* Contact Box */}
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={showContactModal}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setShowContactModal(false)}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                >
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setShowContactModal(false)}
                        >
                            <Close className={classes.modalClose} />
                        </IconButton>
                        <h2 justify="center" align="center">Help us connect to you!</h2>
                    </DialogTitle>
                    <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                    >
                        {/* Form */}
                        <form onSubmit={handleOnSubmit}>
                            
                            <GridContainer 
                                justify="center" 
                                align="center" 
                                alignItems="center" 
                                spacing={2}
                                >
                                <GridItem xs={12} sm={10} md={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        onChange={(e)=>{setContactName(e.target.value)}}
                                        value={contactName}
                                        label="Name"
                                        variant="outlined"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={10} md={10}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        onChange={(e)=>{setContactEmail(e.target.value)}}
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={10} md={10}>
                                    <TextField
                                        fullWidth
                                        id="mobile"
                                        onChange={(e)=>{setContactMobile(e.target.value)}}
                                        label="Contact Number"
                                        variant="outlined"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={10} md={10}>
                                    <TextField
                                        fullWidth
                                        id="company"
                                        onChange={(e)=>{setContactCompany(e.target.value)}}
                                        label="Company"
                                        variant="outlined"
                                    />
                                </GridItem>
                                <Button type="submit" color="danger">Submit</Button>
                            </GridContainer>
                        </form>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                        <Button onClick={() => setShowContactModal(false)} color="transparent" simple>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <div className={classes.background} style={{backgroundColor: '#252e3a'}}>
                <GridContainer
                    justify="center" 
                    alignItems="flex-end" 
                    align="center"
                    style={{height: '100%'}}
                >
                    <GridItem xs={12} sm={9} md={5}>
                        <h2 className={classes.title}>Our Corporates @</h2>
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.background} style={{backgroundColor: '#252e3a'}} />

            <div style={{marginTop: '-130px'}}>
                <GridContainer
                    justify="center" 
                    alignItems="flex-end" 
                    align="center"
                    style={{height: '100%'}}
                >
                    <GridItem xs={12} sm={9} md={4}>
                        <Card style={{width: "100%", height: '100%'}}>
                            <img
                                style={{width: "100%", display: "block"}}
                                className={classes.imgCardTop}
                                src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai.jpg"
                                alt="Card-img-cap"
                            />
                            <CardBody>
                                <h3>Mumbai, India</h3>
                                <Divider />
                                <h5 style={{color: primaryColor}}>contact@thewildfiredigital.com</h5>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>

            <Footer />
        </>
    )
}
