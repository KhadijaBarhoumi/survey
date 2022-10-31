import React, { useState, useEffect } from 'react'
import { Box, Button, Card, Container, Grid } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import countryList from '../data/countryList'
import { Formik } from 'formik'
import SelectField from './SelectField'

import * as yup from 'yup' // upload button
import genderList from '../data/genderList'
import statuList from '../data/statuList'
import statusList from '../data/statusList';
import roleList from '../data/roleList';
import stateList from '../data/stateList';
import educationList from '../data/educationList';
import professionalStatusList from '../data/professionalStatusList';
import verfiedList from '../data/verfiedList';

const accountSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  password : yup.string().required("Password is required"),
  phoneNumber1: yup.string().required("PhoneNumber1 is required"),
  phoneNumber2: yup.string(),
  gender: yup.string().nullable().required("Gender is required"),
  dateOfBirth: yup.date().nullable().required("DateOfBirth is required"),
  statu: yup.string().nullable().required("Statu is required"),
  role: yup.string().required("Role is required"),
  status: yup.string().required("Status is required"),
  state: yup.string().required("State is required"),
  zipcode: yup.string().required("Zipcode is required"),
  address1: yup.string().required("Adress is required"),
  education: yup.string().required("Education is required"),
  professionalStatus: yup.string().required("ProfessionalStatus is required"),
  verfied : yup.string().required("Verfied  is required"),
  city: yup.string().required('City is required'),
  country: yup.mixed().required('Country is required'),
  contact: yup.string().required('Contact is required'),
  
 
  
}) // =============================================================================

// =============================================================================

export default function MuiFormikYup() {
  const initialValues = {
    firstName: '',
    lasttName: '',
    email: '',
    password: '',
    phoneNumber1: '',
    phoneNumber2: '',
    gender: 'Male',
    statu: null,
    dateOfBirth: '',
    status: null,
    role: null,
    state: '',
    zipcode :'',
    address1 :'',
    education :'',
    professionalStatus :'',
    verfied  : '',   
    city: '',
    country: 'Tunisia',
    
  }

  const handleFormSubmit = async (values) => {
    console.log(values)
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Container>
      <h3 mb={2}>Add User</h3>
      <React.Fragment>
        <Box sx={{ width: '100%' }}>
          <Formik
            initialValues={initialValues}
            validationSchema={accountSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={4}>
                  <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        size="medium"
                        name="first_name"
                        label="First Name *"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.first_name}
                        error={!!touched.first_name && !!errors.first_name}
                        helperText={touched.first_name && errors.first_name}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        size="medium"
                        name="last_name"
                        label="Last Name *"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.last_name}
                        error={!!touched.last_name && !!errors.last_name}
                        helperText={touched.last_name && errors.last_name}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        name="email"
                        type="email"
                        label="Email *"
                        size="medium"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        color="info"
                        name="password"
                        type="password"
                        label="Password *"
                        size="medium"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                      />
                      </Grid>
                      <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        type="tel"
                        color="info"
                        size="medium"
                        name="phoneNumber1"
                        label="Phone 1 *"
                        onBlur={handleBlur}
                        value={values.phoneNumber1}
                        onChange={handleChange}
                        error={!!touched.phoneNumber1 && !!errors.phoneNumber1}
                        helperText={touched.phoneNumber1 && errors.phoneNumber1}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        type="tel"
                        color="info"
                        size="medium"
                        name="phoneNumber2"
                        label="Phone 2"
                        onBlur={handleBlur}
                        value={values.phoneNumber2}
                        onChange={handleChange}
                        error={!!touched.phoneNumber2 && !!errors.phoneNumber2}
                        helperText={touched.phoneNumber2 && errors.phoneNumber2}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <SelectField
                      fullWidth
                      name="gender"
                      label="Gender *"
                      //onBlur={handleBlur}
                      //onChange={handleChange}
                      value={values.gender}
                      data={genderList}
                      /* error={!!touched.gender && !!errors.gender}
                    helperText={touched.gender && errors.gender} */
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SelectField
                      fullWidth
                      name="statu"
                      label="Statu *"
                      //onBlur={handleBlur}
                      //onChange={handleChange}
                      value={values.statu}
                      data={statuList}
                      /* error={!!touched.statu && !!errors.statu}
                    helperText={touched.statu && errors.statu} */
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    color="info"
                    name="dateOfBirth"
                    type="date"
                    label=""
                    size="medium"
                    onBlur={handleBlur}
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                    helperText={touched.dateOfBirth && errors.dateOfBirth}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                      <SelectField
                        fullWidth
                        name="country"
                        label="Country *"
                        //onBlur={handleBlur}
                        //onChange={handleChange}
                        value={values.country}
                        data={countryList}
                        /* error={!!touched.country && !!errors.country}
                      helperText={touched.country && errors.country} */
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <SelectField
                        fullWidth
                        name="state"
                        label="state"
                        //onBlur={handleBlur}
                        //onChange={handleChange}
                        value={values.state}
                        data={stateList}
                        /* error={!!touched.state && !!errors.state}
                      helperText={touched.state && errors.state} */
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        name="city"
                        label="City"
                        color="info"
                        size="medium"
                        onBlur={handleBlur}
                        value={values.city}
                        onChange={handleChange}
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                      />
                    </Grid>
                <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  color="info"
                  name="address1"
                  label="Address *"
                  size="medium"
                  onBlur={handleBlur}
                  value={values.address1}
                  onChange={handleChange}
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                />
              </Grid>
              <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                color="info"
                name="zipcode"
                label="Zipcode *"
                size="medium"
                onBlur={handleBlur}
                value={values.zipcode}
                onChange={handleChange}
                error={!!touched.zipcode && !!errors.zipcode}
                helperText={touched.zipcode && errors.zipcode}
              />
            </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectField
                      fullWidth
                      name="status"
                      label="Status *"
                      //onBlur={handleBlur}
                      //onChange={handleChange}
                      value={values.status}
                      data={statusList}
                      /* error={!!touched.status && !!errors.status}
                    helperText={touched.status && errors.status} */
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <SelectField
                    fullWidth
                    name="verfied"
                    label="verfied"
                    //onBlur={handleBlur}
                    //onChange={handleChange}
                    value={values.verfied}
                    data={verfiedList}
                    /* error={!!touched.verfied && !!errors.verfied}
                  helperText={touched.verfied && errors.verfied} */
                  />
                </Grid>
                  <Grid item xs={12} sm={6}>
                    <SelectField
                      fullWidth
                      name="role"
                      label="Role *"
                      //onBlur={handleBlur}
                      //onChange={handleChange}
                      value={values.role}
                      data={roleList}
                      /* error={!!touched.role && !!errors.role}
                    helperText={touched.role && errors.role} */
                    />
                  </Grid>
              <Grid item xs={12} sm={6}>
              <SelectField
                fullWidth
                name="education"
                label="education"
                //onBlur={handleBlur}
                //onChange={handleChange}
                value={values.education}
                data={educationList}
                /* error={!!touched.education && !!errors.education}
              helperText={touched.education && errors.education} */
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                fullWidth
                name="professionalStatus"
                label="ProfessionalStatus *"
                //onBlur={handleBlur}
                //onChange={handleChange}
                value={values.professionalStatus}
                data={professionalStatusList}
                /* error={!!touched.professionalStatus && !!errors.professionalStatus}
              helperText={touched.professionalStatus && errors.professionalStatus} */
              />
            </Grid> 
                    
                    {/* <Grid item md={6} xs={12}>
                    <Autocomplete
                      fullWidth
                      disablePortal
                      options={countryList}
                      value={values.country}
                      getOptionLabel={(option) => option.label}
                      onChange={(_, value) => setFieldValue('country', value)}
                      renderInput={(params) => (
                        <TextField
                          color="info"
                          label="Country"
                          variant="outlined"
                          placeholder="Select Country"
                          error={!!touched.country && !!errors.country}
                          helperText={touched.country && errors.country}
                          {...params}
                          size="medium"
                        />
                      )}
                    />
                  </Grid> */}
                    
                  </Grid>
                </Box>

                <Button type="submit" variant="contained" color="info">
                  Save Changes
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </React.Fragment>
    </Container>
  )
}
