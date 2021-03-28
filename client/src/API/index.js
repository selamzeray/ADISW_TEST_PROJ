import axios from 'axios';
const url='http://localhost:3000/employee.rout';
export  const fetchEmployee= () => axios.get(url);
  export const createEmployee=(newEmployee) => axios.employee(url,newEmployee);