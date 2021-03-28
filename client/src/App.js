import React, {useEffect} from 'react';
import {AppBar, Typography,Container,Grid,Grow} from '@material-ui/core';
import Form from './components/Form/Form';
import employee from './images/employee.jpg';
import {getEmployee} from './actions/employee';
import useStyles from './styles';
import {useDispatch} from 'react-redux'
 const App= () =>{
     const classses= useStyles();
     const dispatch= useDispatch();
     useEffect(()=> {
         dispatch(getEmployee);
     }, [dispatch]);
     return (
        <Container maxWidth="lg">
        <AppBar classNAme={classses.appBar} position="static" color="inherit">
           <Typography className={classses.heading}variant="h2" align="center">Employee</Typography> 
           <img className={classses.image} src={employee} alt= "employee" height="30"/>
            </AppBar> 
            <Grow in>
          <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={4}>
          
           <Grid item xs={12} sm={4}>
               <Form />
           </Grid>
              </Grid>
          </Container>
            </Grow>
        </Container>
         

     );
     }

 export default App;