export default (employee=[],action) =>{
switch(action.type){
     case 'FETCH_ALL':
         return action.payload;
     case 'CREATE':
         return [...employee,action.payload];
         default:
             return employee;
              

} 

}