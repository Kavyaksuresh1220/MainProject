const express= require('express')
 const router=express.Router()
 const jwtMiddleware=require('../middleware/jwtMiddleware')
 const {addgrocerymanagementStaff,
    getgrocerymangementstaffs,
    deletegrocerymangementstaff,}=require('../controller/userController')

const{addgrocery,getgrocery}=require('../controller/grocery/groceryController')

router.post('/api/addgrocery',jwtMiddleware,addgrocery)
router.get('/api/getgrocery',jwtMiddleware,getgrocery) 




// admin
 router.post('/api/addgrocerymanagement-staff',jwtMiddleware,addgrocerymanagementStaff)
 router.get('/api/getgrocerymanagementstaffs', getgrocerymangementstaffs)
 router.delete('/api/delete-grocerymanagementstaff/:id', jwtMiddleware,deletegrocerymangementstaff)


module.exports = router