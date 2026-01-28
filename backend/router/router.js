const express = require('express')
const router = express.Router()
const jwtMiddleware = require('../middleware/jwtMiddleware')
const usercontroller = require('../controller/userController')
const { createLaundryOrder,
    getLaundryOrders,
    getallLaundryOrder,
    getpendingOrders,
    updateToConfirm,
    getconfirmOrders,
    getpickedOrders,
    getdeliveredOrders,
    getprocessingOrders,
    getMyConfirmedOrders, 
    updateToPicked,
getMyPickedOrders,
updateToProcessing ,getMyProcessingOrders,
updateToCompleted,getMyCompletedOrders,updateToDelivered,getMyDeliveredOrders,getcompletedOrders,
getLaundryIncomeReport,mySalaryReport,getMyPendingOrders,getLaundryypendingOrders} = require('../controller/laundry/laundryController')

router.post('/api/register', usercontroller.userRegister)
router.post('/api/login', usercontroller.userLogin)
// laundry
router.post('/api/laundryorder', jwtMiddleware, createLaundryOrder)
router.get('/api/allorder', jwtMiddleware, getLaundryOrders)
router.get('/api/get-laundrypending', getpendingOrders)
router.get('/api/get-laundryconfirmed', getconfirmOrders)
router.get('/api/get-landryypending', getLaundryypendingOrders)

router.get('/api/my-confirmed-orders', jwtMiddleware, getMyConfirmedOrders)

router.get('/api/get-laundrypicked', getpickedOrders)
router.get('/api/get-laundrydelivered', getdeliveredOrders)
router.get('/api/get-laundrycompleted', getcompletedOrders)
router.get('/api/get-laundryprocessing', getprocessingOrders)



router.put('/api/updateToConfirm/:id', updateToConfirm);
router.put('/api/orderpicked/:id', jwtMiddleware, updateToPicked); 
router.put(
  '/api/updateToProcessing/:id',
  jwtMiddleware, // ensures req.payload has staff email
  updateToProcessing
);
router.put('/api/updateToCompleted/:id',jwtMiddleware, updateToCompleted)
router.put('/api/updateToDelivered/:id',jwtMiddleware, updateToDelivered)




router.get('/api/my-confirmed-orders', jwtMiddleware, getMyConfirmedOrders)
router.get('/api/my-pending-orders', jwtMiddleware, getMyPendingOrders)
router.get('/api/my-picked-orders', jwtMiddleware, getMyPickedOrders);
router.get('/api/my-processing-orders',jwtMiddleware,getMyProcessingOrders);
router.get('/api/my-completed-orders',jwtMiddleware,getMyCompletedOrders);
router.get('/api/my-delivered-orders',jwtMiddleware,getMyDeliveredOrders);
router.get("/api/my-salary-report",jwtMiddleware,mySalaryReport);
 
// admin
router.get('/api/getallusers', usercontroller.getallUsers)
router.get('/api/getLaundrystaffs', usercontroller.getLaundrystaffs)
router.get('/api/get-all-laundary', getallLaundryOrder)
router.post('/api/add-laundry-staff',jwtMiddleware,usercontroller.addLaundryStaff)
router.delete('/api/delete-laundry-staff/:id', jwtMiddleware, usercontroller.deleteLaundryStaff)
router.get('/api/laundry-income-report', jwtMiddleware,getLaundryIncomeReport)

module.exports = router
