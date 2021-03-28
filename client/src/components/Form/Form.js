import React, {useState} from 'react';
import {TextField, Paper,Typography,Button} from '@material-ui/core';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { createEmployee } from '../../actions/employee';
 const Form= ()=> {
     const [employeeData,setEmployeeData]= useState({
    fullName:'', dateOfBirth:'', Gender:'',Salary:'' });
    const classes= useStyles();
    const dispatch= useDispatch(); 
    const handleSubmit=(e)=> {
    e.peventDefault();
    dispatch(createEmployee(employeeData));
    }
    const clear=()=> {
         
    }
    return(
       <Paper className= {classes.paper}>
           <form autoComplete="off" noValidate className={classes.form}
            onSubmit={handleSubmit}>
        <Typography variant="h5">Creating Employee List </Typography>
        <TextField name="fullName" variant="outlined"  label="fullName" fullWidth  value={employeeData.fullName}onChange={(e)=> setEmployeeData({...employeeData,fullName:e.target.value}) }/>
        <TextField name="dateOfBirth" variant="outlined"  label="dateOfBirth" fullWidth value={employeeData.dateOfBirth}onChange={(e)=> setEmployeeData({...employeeData,dateOfBirth:e.target.value}) }/>
        <TextField name="Gender" variant="outlined"  label="Gender" fullWidth  value={employeeData.Gender}onChange={(e)=> setEmployeeData({...employeeData,Gender:e.target.value}) }/>
        <TextField name="Salary" variant="outlined"  label="Salary" fullWidth  value={employeeData.Salary}onChange={(e)=> setEmployeeData({...employeeData,Salary:e.target.value}) }/>
   <Button className={classes.buttonSubmit} variant="contained" color=" primary" size="large" type="submit">Submit </Button>
   <Button  variant="contained" color=" primary" size="small" onClick={clear}>Clear </Button>
           
           
            </form>

           </Paper>
           
            );
         }
         export default Form;