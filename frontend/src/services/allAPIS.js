import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL";

// register
export const registerAPI =async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

// login
export const loginAPI =async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

// Laundry
// order
export const laundryorderAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token")

  return await commonAPI('POST',`${serverURL}/api/laundryorder`, reqBody,
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  )
}

// get orderhistory to custmer

export const laundryHistoryCustomerAPI=async(reqHeader)=>{
  return await commonAPI('GET',`${serverURL}/api/allorder`,{},reqHeader)
}


// get all users
export const getAllUsersAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getallusers`,{},{})
} 

// get all Laundry staffs
export const getLaundrystaffsAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/getLaundrystaffs`,{},{})
} 

// get all laundry oredrs

export const getAllLaoundryOrderAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-all-laundary`,{},{})
}

// laundry pending orders
export const getpendingLaundryAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-laundrypending`,{},{})}



// update p to confirm
export const updateToConfirmAPI = async (id, laundrystaff) => {
  return await commonAPI(
    'PUT',
    `${serverURL}/api/updateToConfirm/${id}`,
    { laundrystaff },  
    {}
  );
};

// laundry confirm orders
export const getconfirmLaundryAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-laundryconfirmed`,{},{})}
 
// laundry picked orders
export const getpickedLaundryAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-laundrypicked`,{},{})}

  // laundry delivered orders
export const getdeliveredLaundryAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-laundrydelivered`,{},{})}
  export const getcompletedLaundryAPI = async () => {
  return await commonAPI(
    'GET',
    `${serverURL}/api/get-laundrycompleted`,
    {},
    {}
  )
}


  // laundry processing orders
export const getprocessingLaundryAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-laundryprocessing`,{},{})}

// services/allAPIS.js
export const myConfirmedOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-confirmed-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};


export const updateToPickedAPI = async (id, token) => {
  return await commonAPI(
    'PUT',
    `${serverURL}/api/orderpicked/${id}`,
    {}, // no body needed
    {
      Authorization: `Bearer ${token}`
    }
  );
};


export const myPickedOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-picked-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};

// services/allAPIS.js
export const updateToProcessingAPI = async (id) => {
  const token = sessionStorage.getItem("token"); // JWT token

  return await commonAPI(
    'PUT',
    `${serverURL}/api/updateToProcessing/${id}`,
    {}, // no body needed
    {
      Authorization: `Bearer ${token}`
    }
  );
};


export const myProcessingOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-processing-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};


export const updateToCompletedAPI = (id) => {
    const token = sessionStorage.getItem("token"); // JWT token

  return commonAPI(
    "PUT",
    `${serverURL}/api/updateToCompleted/${id}`,
    {}, // no body needed
    {
      Authorization: `Bearer ${token}`
    }
  )
}

export const myCompletedOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-completed-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};

export const updateToDeliveredAPI = (id) => {
  const token = sessionStorage.getItem("token"); // JWT token

  return commonAPI(
    "PUT",
    `${serverURL}/api/updateToDelivered/${id}`,
    {}, // no body needed
    {
      Authorization: `Bearer ${token}`
    }
  );
};


export const myDeliveredOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-delivered-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};
export const myPendingOrdersAPI = async () => {
  const token = sessionStorage.getItem("token"); // JWT token stored at login

  return await commonAPI(
    'GET',
    `${serverURL}/api/my-pending-orders`,
    {},
    {
      Authorization: `Bearer ${token}` // send token
    }
  );
};
// add laundry staff (admin)
export const addLaundryStaffAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token")
return await commonAPI(
    'POST',`${serverURL}/api/add-laundry-staff`,reqBody,{
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  )
}

export const deleteLaundryStaffAPI = async (id) => {
  const token = sessionStorage.getItem("token");
  return await commonAPI('DELETE',`${serverURL}/api/delete-laundry-staff/${id}`, {},
    { Authorization: `Bearer ${token}` }
  );
};


// Get Laundry Income Report (Admin only)
export const getLaundryIncomeReportAPI = async () => {
  const token = sessionStorage.getItem("token");

  return await commonAPI(
    'GET',
    `${serverURL}/api/laundry-income-report`,
    {},
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  );
};

export const mySalaryReportAPI = async () => {
  const token = sessionStorage.getItem("token");

  return await commonAPI(
    "GET",
    `${serverURL}/api/my-salary-report`,
    {},
    {
      Authorization: `Bearer ${token}`
    }
  );
};



// laundry pending orders
export const getPendingLaundryyyAPI=async()=>{
  return await commonAPI('GET',`${serverURL}/api/get-landryypending`,{},{})}


















