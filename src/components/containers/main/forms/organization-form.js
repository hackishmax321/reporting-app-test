import React, { useState } from 'react';
import { Field, Formik, Form, FormikConfig, FormikValues } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, FormControl, InputLabel, OutlinedInput, Button, Box, MenuItem, Select, FormHelperText, Divider } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import Organization from '../../../../models/Organization';
import organization_service from '../../../../services/organization_service';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

export default function OrganizationMultiForm(){

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [info, setInfo] = useState('');
    const [contact, setContact] = useState('');
    const [incharge, setIncharge] = useState('');
    const [category, setCategory] = useState('');
    const [parent, setParent] = useState('');

    const [categories, setCategories] = useState([]);

    const {register, handleSubmit} = useForm();

    const classes = useStyles();

    const onOrganizationSubmit = () => {
        var organization = new Organization(name, info, address, incharge, contact, category);
        organization_service.addOrganization(organization);
    }

    return(
        
                        <div label="Initial Details">
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e)=>{e.preventDefault(); onOrganizationSubmit()}}>
                            <h4>Submit Organization Information</h4>
                            <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <OutlinedInput  id="name" value={name}  label="Name" name="name" 
                                onChange={(e)=>setName(e.target.value)}/>
                            </FormControl>
                            </Box>
                            <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="info">Details</InputLabel>
                                <OutlinedInput  id="info" value={info}  label="Info" name="info"
                                onChange={(e)=>setInfo(e.target.value)}/>
                            </FormControl>
                            </Box>
                            <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="address">Address</InputLabel>
                                <OutlinedInput  id="address" value={address}  label="Address" name="address" 
                                onChange={(e)=>setAddress(e.target.value)}/>
                            </FormControl>
                            </Box>
                            <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="contact">Contact</InputLabel>
                                <OutlinedInput  id="contact" value={contact}  label="Contact" name="contact"
                                onChange={(e)=>{setContact(e.target.value); console.log(e.target.value)}}/>
                            </FormControl>
                            </Box>
                            {/* <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="category">Category</InputLabel>
                                <OutlinedInput  id="category" value={category}  label="Category" name="category"
                                onChange={(e)=>setCategory(e.target.value)}/>
                            </FormControl>
                            </Box> */}
                            <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                <InputLabel id="category-lb">Departments</InputLabel>
                                <Select
                                labelId="category-lb"
                                id="category"
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)}
                                label="Category"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Social Health"}>Social Health</MenuItem>
                                <MenuItem value={"Road Construction"}>Road Construction</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                            </Box>
                            {/* <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="incharge">Incharge</InputLabel>
                                <OutlinedInput  id="incharge" value={incharge}  label="Incharge" name="incharge"
                                onChange={(e)=>setIncharge(e.target.value)}/>
                            </FormControl>
                            </Box>
                            <Box paddingBottom={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="parent">Parent</InputLabel>
                                <OutlinedInput  id="parent" value={parent}  label="Parent" name="parent" 
                                onChange={(e)=>setParent(e.target.value)}/>
                            </FormControl>
                            </Box> */}
                            <Divider/>
                            <Button variant="contained" color="primary" type="submit">SUBMIT</Button>
                        </form>
                        </div>
                        
                        
            
    );
}

// export function FormMultiSteps({children, ...props}){
//     const childrenArray = React.Children.toArray(children);
//     var [step, setStep] = useState(0);
//     const current = childrenArray[step];

//     const checkLast = () => {
//         return step === childrenArray.length-1;
//     }

//     const OrganizationSubmit = () => {
//         console.log("Values -")
//     }

//     return (
//         <Formik {...props} onSubmit={async (values, helpers)=>{
//             console.log("Submit Launched!");
//             if(checkLast()){
//                 await props.onSubmit(values, helpers);
//             } else {
//                 setStep(step=>step+1);
//             }
//         }}>
//             <Form autoComplete="off">
//                 {/* <Stepper alternativeLabel activeStep={step}>
//                     {childrenArray.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                     ))}
//                 </Stepper> */}
//                 {current}
//                 {step>0?<Button variant="contained" color="primary" margin={2} onClick={()=>setStep(step=>step-1)}>BACK</Button>:null}
//                 {step===1?<Button variant="contained" color="primary" type="submit">SUBMIT</Button>:<Button variant="contained" color="primary" onClick={()=>setStep(step=>step+1)}>NEXT</Button>}
                
//             </Form>
//         </Formik>
//     )
// }
