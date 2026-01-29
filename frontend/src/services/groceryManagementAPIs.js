import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL";


// add grocerymanagementstaff
export const addgroceryManagementStaffAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token")
return await commonAPI('POST',`${serverURL}/api/addgrocerymanagement-staff`,reqBody,{
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  )
}

// get all groceryManagement staffs
export const getgroceryManagementstaffsAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getgrocerymanagementstaffs`,{},{})
} 
// delete grocerymangement staff
export const deletegroceryManagementstaffAPI = async (id) => {
  const token = sessionStorage.getItem("token");
  return await commonAPI('DELETE',`${serverURL}/api/delete-grocerymanagementstaff/${id}`, {},
    { Authorization: `Bearer ${token}` }
  );
};
// add grocery
export const addgroceryAPI=async(reqBody,reqHeader)=>{
     return await commonAPI('POST',`${serverURL}/api/addgrocery`,reqBody,reqHeader)
}
//get all books
export const getAllgroceryAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getgrocery`,{},reqHeader)
}