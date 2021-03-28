import express from 'express';
import {getEmployee, createEmployee  } from '../controllers/employee.rout.js';

const router= express.Router();

router.get('/',getEmployee );
router.post('/',createEmployee);
router.get('./',(req,res) =>{
    res.render("Form/Form",{
        viewTitle: "Employee List"
    });
});

export default router;