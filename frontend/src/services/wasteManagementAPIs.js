import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL";

// add wastemanagementstaff
export const addWasteManagementStaffAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token")
return await commonAPI('POST',`${serverURL}/api/addWastemanagement-staff`,reqBody,{
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  )
}

// get all WasteManagement staffs
export const getWasteManagementstaffsAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getWastemanagementstaffs`,{},{})
} 
// delete wastemangement staff
export const deleteWasteManagementstaffAPI = async (id) => {
  const token = sessionStorage.getItem("token");
  return await commonAPI('DELETE',`${serverURL}/api/delete-Wastemanagementstaff/${id}`, {},
    { Authorization: `Bearer ${token}` }
  );
};
// create ordre
export const WasteManagementorderAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token")

  return await commonAPI('POST',`${serverURL}/api/WasteManagementOrder`, reqBody,
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  )
}

export const WasteHistoryCustomerAPI=async(reqHeader)=>{
  return await commonAPI('GET',`${serverURL}/api/allWastemanagementOrder`,{},reqHeader)
}

// wastemanagement pending orders
export const getwastemanagementAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-wastemanagementpending`,{},{})}
// staff
export const WasteupdateToConfirmAPI = async (id, wastemanagementstaff) => {
  const token = sessionStorage.getItem("token")

  return await commonAPI(
    'PUT',
    `${serverURL}/api/wupdateToConfirm/${id}`,
    { wastemanagementstaff },
    {
      Authorization: `Bearer ${token}`
    }
  )
}
export const myConfirmedOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-waste-confirmed-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};

export const updateToPickedAPI = async (id, wastemanagementstaff) => {
  const token = sessionStorage.getItem("token")
  return await commonAPI(
    'PUT',
    `${serverURL}/api/wupdateToPicked/${id}`,
    { wastemanagementstaff },
    {
      Authorization: `Bearer ${token}`
    }
  );
};

export const myPickedOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-waste-picked-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};

export const mySalaryReportAPI = async () => {
  const token = sessionStorage.getItem("token");

  return await commonAPI(
    "GET",
    `${serverURL}/api/my-wsalary-report`,
    {},
    {
      Authorization: `Bearer ${token}`
    }
  );
};
export const getAllWasteOrderAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-all-wasteorders`,{},{})
}
// laundry pending orders


// laundry confirm orders
export const getconfirmwasteAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-wasteconfirmed`,{},{})}
 
// laundry picked orders
export const getpickedwasteAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-wastepicked`,{},{})}

  export const getwasteIncomeReportAPI = async () => {
  const token = sessionStorage.getItem("token");

  return await commonAPI(
    'GET',
    `${serverURL}/api/waste-income-report`,
    {},
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  );
};

// laundry pending orders
export const getPendingWasteAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-wastepending`,{},{})}


