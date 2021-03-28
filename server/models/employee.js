import mongoose from 'mongoose';
 const employeeSchema= mongoose.Schema({
fullName:{
    type: string
},
 dateOfBirth:{
    type: string
},
Gender:{

    type: string
},
Salary:{
    type:string
},
 });

 const employee=mongoose.model('employee', employeeSchema);

export default employee;





 







 