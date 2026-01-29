import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Service from './pages/Service'
import Howitworks from './pages/Howitworks'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Userlanding from './user/pages/Userlanding'
import Laundry from './user/pages/Laundry'
import Laundryform from './user/components/Laundryform'
import Wastemanagement from './user/pages/Wastemanagement'
import Grocery from './user/pages/Grocery'
import Stationary from './user/pages/Stationary'
import Food from './user/pages/Food'
import Dressandfootwear from './user/pages/Dressandfootwear'
import Dishes from './user/pages/Dishes'
import Hospital from './user/pages/Hospital'
import Hospitalform from './user/pages/Hospitalform'
import Hospitalbookingconform from './user/pages/Hospitalbookingconform'
import Laundryconfirm from './user/components/Laundryconfirm'
import WasteConfirm from './user/components/Wasteconfirm'
import Servicehistory from './pages/Servicehistory'
import Laundryhistory from './components/Laundryhistory'
import Adminlanding from './admin/pages/Adminlanding'
import Adminlaundry from './admin/pages/Adminlaundry'
import Userlaundryhistory from './user/components/Userlaundryhistory'
import UserServicehistory from './user/pages/UserServicehistory'
import UserList from './admin/components/UserList'
import LaundryStaff from './staff/laundry/LaundryStaff'
import Laundrypending from './staff/laundry/Laundrypending'
import Laundryconfirmed from './staff/laundry/Laundryconfirmed'
import Laundrypicked from './staff/laundry/Laundrypicked'
import Laundryprocessing from './staff/laundry/Laundryprocessing'
import Laundrycompleted from './staff/laundry/Laundrycompleted'
import AdminWaste from './admin/pages/AdminWaste'
import Wastemanagementstaff from './staff/waste/Wastemanagementstaff'
import Wastemanagementpending from './staff/waste/Wastemanagementpending'
import Userwastehistory from './user/components/Userwastehistory'
import Wastemanagementconfirm from './staff/waste/Wastemanagementconfirm'
import AdminGrocery from './admin/pages/AdminGrocery'
import GroceryStaff from './staff/grocery/GroceryStaff'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'element={<Landing/>}/>
      <Route path='/home'element={<Home/>}/>
      <Route path='/services'element={<Service/>}/>
      <Route path='/howitworks'element={<Howitworks/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/service-history'element={<Servicehistory/>}/>
      <Route path='/laundry-history'element={<Laundryhistory/>}/>
      <Route path='/user-list'element={<UserList/>}/>


      {/* user */}
      <Route path='/user-home'element={<Userlanding/>}/>
      <Route path='/laundry'element={<Laundry/>}/>
      <Route path='/laundry-form'element={<Laundryform/>}/>
      <Route path='/wastemanagement'element={<Wastemanagement/>}/>
      <Route path='/grocery'element={<Grocery/>}/>
      <Route path='/stationary'element={<Stationary/>}/>
      <Route path='/food'element={<Food/>}/>
      <Route path='/dressandfootwear'element={<Dressandfootwear/>}/>
      <Route path='/dishes'element={<Dishes/>}/>
      <Route path='/hospital'element={<Hospital/>}/>
      <Route path='/hospital-form'element={<Hospitalform/>}/>
      <Route path='/hospital-booking-conform'element={<Hospitalbookingconform/>}/>
      <Route path='/confirm-laundry'element={<Laundryconfirm/>}/>
      <Route path='/confirm-waste'element={<WasteConfirm/>}/>
      <Route path='/user-laundry-history'element={<Userlaundryhistory/>}/>
      <Route path='/user-waste-history'element={<Userwastehistory/>}/>
      <Route path='/user-service-history'element={<UserServicehistory/>}/>

      {/* admin */}
      <Route path='/admin-landing'element={<Adminlanding/>}/>
      <Route path='/admin-laundry'element={<Adminlaundry/>}/>
      <Route path='/admin-wastemanagement'element={<AdminWaste/>}/>
      <Route path='/admin-grocerymanagement'element={<AdminGrocery/>}/>


      {/* laundrystaff */}
      <Route path='/laundry-staff'element={<LaundryStaff/>}/>
      <Route path='/laundry-staff-pending'element={<Laundrypending/>}/>
      <Route path='/laundry-staff-confirmed'element={<Laundryconfirmed/>}/>
      <Route path='/laundry-staff-picked'element={<Laundrypicked/>}/>
      <Route path='/laundry-staff-processing'element={<Laundryprocessing/>}/>
      <Route path='/laundry-staff-completed'element={<Laundrycompleted/>}/>

      {/* wastemanagement-staff */}
      <Route path='/wastemanagement-staff'element={<Wastemanagementstaff/>}/>
      <Route path='/wastemanagement-staff-pending'element={<Wastemanagementpending/>}/>
      <Route path='/wastemanagement-staff-confirmed'element={<Wastemanagementconfirm/>}/>

      {/* Grocerymanagement-stafff */}
      <Route path='/Grocerymanagement-staff'element={<GroceryStaff/>}/>

      


    
    </Routes>
      
    </>
  )
}

export default App
