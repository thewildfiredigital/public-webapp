import React from 'react';
import { Formik } from 'formik';
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { FormControl, InputLabel, Input, TextField } from '@material-ui/core';


export default function Form (props) {
  console.log (props);
  return (
    <div>
      <h1>Help us connect to you!</h1>
      <Formik
          initialValues={{ name: '', email: ''}} // name, company, email, mobile, subject
          validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(props.handler(values), null, 2));
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                props.handler(values);
              }, 400);
          }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <GridContainer
                justify="center" 
                alignItems="center" 
                align="center"
            >
                <GridItem xs={12} sm={9} md={9}>
                  <h2>Your Name</h2>
                  <FormControl required>
                      <InputLabel htmlFor="component-simple">Name</InputLabel>
                      <Input
                          type="name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          fullwidth
                      />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={9} md={9}>
                  <h2>Company you represent</h2>
                  <FormControl required>
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        style={{display: 'block'}}
                        InputProps={{ fullWidth: true }}
                        fullWidth
                    />
                    {errors.email && touched.email && errors.email}
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={9} md={9}>
                  <Button type="submit" color="danger" round>
                      Submit
                  </Button>
                </GridItem>
            </GridContainer>
          </form>
        )}
      </Formik>
    </div>
  );
}
  