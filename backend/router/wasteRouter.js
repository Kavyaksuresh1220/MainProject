 const express=require('express')
 const router=express.Router()
 const jwtMiddleware=require('../middleware/jwtMiddleware')
 const {addWastemanagementStaff,
    getwastemangementstaffs,
    deletewastemangementstaff,}=require('../controller/userController')

const {createWasteManagementOrder,
    getWastemanagementOrders,
    getpendingWasteOrders,updateToConfirm,
    getMyConfirmedOrders,updateToPicked,getMyPickedOrders,
    mySalaryReport,getallWastemanagementOrder,getpendingOrders,getconfirmOrders,getpickedOrders,getWasteIncomeReport
}=require('../controller/WasteController')


 router.post('/api/addWastemanagement-staff',jwtMiddleware,addWastemanagementStaff)
 router.get('/api/getWastemanagementstaffs', getwastemangementstaffs)
 router.delete('/api/delete-Wastemanagementstaff/:id', jwtMiddleware,deletewastemangementstaff)
//  user
 router.post('/api/WasteManagementOrder', jwtMiddleware, createWasteManagementOrder)
router.get('/api/allWastemanagementOrder', jwtMiddleware, getWastemanagementOrders)



// admin
router.get('/api/get-wastemanagementpending', getpendingWasteOrders)
router.get('/api/get-all-wasteorders', getallWastemanagementOrder)
router.get('/api/get-wastepending', getpendingOrders)
router.get('/api/get-wasteconfirmed', getconfirmOrders)
router.get('/api/get-wastepicked', getpickedOrders)
router.get('/api/waste-income-report', jwtMiddleware,getWasteIncomeReport)




// staff
router.put('/api/wupdateToConfirm/:id', jwtMiddleware, updateToConfirm)
router.get('/api/my-waste-confirmed-orders', jwtMiddleware, getMyConfirmedOrders)
router.put('/api/wupdateToPicked/:id',jwtMiddleware, updateToPicked);
router.get('/api/my-waste-picked-orders', jwtMiddleware, getMyPickedOrders)
router.get("/api/my-wsalary-report",jwtMiddleware,mySalaryReport);









 
 

 module.exports = router