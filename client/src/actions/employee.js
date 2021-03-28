import * as API from '../API';

 export const getEmployee= ()=>async(dispatch)=> {
    try{
 const {data}= await API.fetchEmployee();
 dispatch({type:' FETCH_ALL', payload:data});
    }catch(error){ 
  console.log(error.message);
    }
}
export const createEmployee=(employee) => async(dispatch)=>{
   try {
      const {data}= await API.createEmployee(employee);
      dispatch({type: 'CREATE',payload: data});
      
   } catch (error) {
      console.log(error.message);
   }
}