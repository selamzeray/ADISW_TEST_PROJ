 import PostMessage from '../models/emplyee.js';

 export const getEmployee =async(req,res) => { 
   try{
       const employeeData=  await employee.find();
     console.log(emplyeeData);
     res.status(200).json(employeeData);
     // returns our function, 200 is http code for suuccessful
   }
   catch(error){
  res.status(404).json({message:error.message});
  // catches is there in an error, and 404 is an http code for indicating unsuccessful process
   }
}
export const createEmployee= async(req,res) =>{
    const employee= req.body;
    const newEmployee= new employeeData(employee); 
try{
    await newEmployee.save();
    res.status(201).json(newEmployee);// shows successful creation 
}catch(error){
res.status(409).json({message:error.message});// 409 indicates conflict or unsuccessfulness, http status code
}
}
