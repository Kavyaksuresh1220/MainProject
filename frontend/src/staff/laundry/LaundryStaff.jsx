import React, { useEffect, useState } from 'react'
import LaundryHeader from './LaundryHeader'
import { getAllLaoundryOrderAPI, myCompletedOrdersAPI, myConfirmedOrdersAPI, myDeliveredOrdersAPI, myPickedOrdersAPI, myProcessingOrdersAPI, mySalaryReportAPI, updateToConfirmAPI, updateToProcessingAPI } from '../../services/allAPIS'
import { Link } from 'react-router-dom'

function LaundryStaff() {
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [pickedCount, setpickedCount] = useState(0);
  const [processingCount, setprocessingCount] = useState(0);
  const [completedCount, setcompletedCount] = useState(0);
  const [deliveredCount, setdeliveredCount] = useState(0);
  const [salary, setSalary] = useState(0);
const [totalAmount, setTotalAmount] = useState(0); 


  useEffect(() => {
    getConfirmedOrders();
    getpickedOrders();
    getprocessingOrders();
    getcompletedOrders();
    getdeliveredOrders();
    getSalaryReport();
    
    
    
  }, []);

  const getConfirmedOrders = async () => {
    try {
      const response = await myConfirmedOrdersAPI();
      setConfirmedCount(response.data.total); // number of confirmed orders
    } catch (error) {
      console.error(error);
    }
  };

  const getpickedOrders = async () => {
    try {
      const response = await myPickedOrdersAPI();
      setpickedCount(response.data.total); 
    } catch (error) {
      console.error(error);
    }
  };

  const getprocessingOrders = async () => {
    try {
      const response = await myProcessingOrdersAPI();
      setprocessingCount(response.data.total); 
    } catch (error) {
      console.error(error);
    }
  };

  const getcompletedOrders = async () => {
    try {
      const response = await myCompletedOrdersAPI();
      setcompletedCount(response.data.total); 
    } catch (error) {
      console.error(error);
    }
  };
  
  const getdeliveredOrders = async () => {
    try {
      const response = await myDeliveredOrdersAPI();
      setdeliveredCount(response.data.total); 
    } catch (error) {
      console.error(error);
    }
  };
const getSalaryReport = async () => {
  try {
    const response = await mySalaryReportAPI();

    console.log("Salary API 👉", response);

    if (!response || !response.data) return;

    setSalary(response.data.salary);
    setTotalAmount(response.data.totalAmount);

  } catch (error) {
    console.error("Salary API error", error);
  }
};


  

   
   
  return (
    <>
      <LaundryHeader />

      {/* Page Wrapper */}
      <div className="min-h-screen bg-gray-100 px-6 py-8">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Laundry Staff Dashboard
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          

          

          {/* Pending */}
          <Link to={'/laundry-staff-pending'}>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
            <p className="text-gray-500 text-sm">Pending</p>
            <h3 className="text-3xl font-bold text-blue-600 mt-2">1</h3>
          </div>
          </Link>

          <Link to="/laundry-staff-confirmed">
            <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
              <p className="text-gray-500 text-sm">Confirmed</p>
              <h3 className="text-3xl font-bold mt-2">{confirmedCount}</h3>
            </div>
          </Link>
          {/* picked */}
          <Link to={'/laundry-staff-picked'}>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
            <p className="text-gray-500 text-sm">Picked</p>
            <h3 className="text-3xl font-bold text-blue-600 mt-2">{pickedCount}</h3>
          </div>
          </Link>

          {/* Processing */}
          <Link to={'/laundry-staff-processing'}>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
            <p className="text-gray-500 text-sm">Processing</p>
            <h3 className="text-3xl font-bold text-blue-600 mt-2">{processingCount}</h3>
          </div>
          </Link>

          {/* Completed */}
          <Link to={'/laundry-staff-completed'}>
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
            <p className="text-gray-500 text-sm">Completed</p>
            <h3 className="text-3xl font-bold text-green-600 mt-2">{completedCount}</h3>
          </div>
          </Link>

          
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
            <p className="text-gray-500 text-sm">Delivered</p>
            <h3 className="text-3xl font-bold text-green-600 mt-2">{deliveredCount}</h3>
          </div>

          
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-center">
  <p className="text-gray-500 text-sm">Amount Credited (60%)</p>
  <h3 className="text-3xl font-bold text-green-600 mt-2">
    ₹{salary}
  </h3>
  <p className="text-xs text-gray-400 mt-1">
    From ₹{totalAmount}
  </p>
</div>

          

          

        </div>
      </div>
    </>
  )
}

export default LaundryStaff
