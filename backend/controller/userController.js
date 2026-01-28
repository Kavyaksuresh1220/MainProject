const user = require('../model/userModel')
const jwt=require('jsonwebtoken')


// Register

exports.userRegister=async(req,res)=>{
    console.log("Inside Register Method")
    console.log(req.body);
    const {username,email,password,phonenumber,address}=req.body

    try {

        const existinguser = await user.findOne({email})
        if(existinguser){
            res.status(402).json({message:'User Already Exist'})
        }

        else{
            const newuser = new user({username,password,email,phonenumber,address})
            await newuser.save()
            res.status(200).json({message:"Registered Successfully",newuser})
        }
        
    } catch (err) {

        res.status(500).json('Server Error'+err)
        
    }
    
    
}

// Login

exports.userLogin =async(req,res)=>{
   
    console.log("Inside Login Method");
    console.log(req.body);
    const{email,password}=req.body
    try {
        const existinguser = await user.findOne({email})
        if(!existinguser){
            res.status(402).json({message:"User Not Found ! Please Register"})
        }
    
        if (existinguser.password !== password) {
            return res.status(401).json({ message: "Password mismatch" });
            
        

        }
        const token = jwt.sign({ userMail: existinguser.email, role: existinguser.role },process.env.jwtkey);

        console.log("Generated Token:", token);

        // Send full response
        return res.status(200).json({ message: "User login successful", existinguser,token: token});
    } catch (err) {

        res.status(500).json("server err"+err)
    }
    
    
    
    
}

// get all users
exports.getallUsers=async(req,res)=>{
    try {
        const users= await user.find({role:{$ne:"Admin"}})
        const totalusers=await user.countDocuments({role:{$ne:"Admin"}})
        res.status(200).json({message:"user fetched",users,totalusers})
    } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message
    })
}
}


// get all laundry staffs
exports.getLaundrystaffs = async (req, res) => {
  try {
    const staffs = await user.find({ role: "Laundry-Staff" })

    res.status(200).json({
      message: "Users fetched",
      staffs,
      totalstaffs: staffs.length
    })
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}



// add laundry staff
exports.addLaundryStaff = async (req, res) => {
  try {
    const { username, email, password, phonenumber, address } = req.body

    
    const existingUser = await user.findOne({ email })
    if (existingUser) {
      return res.status(409).json({
        message: "Staff already exists"
      })
    }

    
    const newStaff = new user({
      username,
      email,
      password,
      phonenumber,
      address,
      role: "Laundry-Staff"
    })

    await newStaff.save()

    res.status(201).json({
      message: "Laundry staff added successfully",
      staff: newStaff
    })

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

// delete laundry staff
exports.deleteLaundryStaff = async (req, res) => {
  try {
    const { id } = req.params; // staff id from frontend

    // Find the staff by id
    const staff = await user.findById(id);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    // Ensure only Laundry-Staff role can be deleted
    if (staff.role !== "Laundry-Staff") {
      return res.status(403).json({ message: "Cannot delete non-staff users" });
    }

    // Delete staff
    await user.findByIdAndDelete(id);

    res.status(200).json({ message: "Laundry staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}


// add wastemangement staff


exports.addWastemanagementStaff = async (req, res) => {
  try {
    const { username, email, password, phonenumber, address } = req.body

    
    const existingUser = await user.findOne({ email })
    if (existingUser) {
      return res.status(409).json({
        message: "Staff already exists"
      })
    }

    
    const newStaff = new user({
      username,
      email,
      password,
      phonenumber,
      address,
      role: "Wastemanagement-Staff"
    })

    await newStaff.save()

    res.status(201).json({
      message: "Wastemanagement-Staff added successfully",
      staff: newStaff
    })

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

// get wastemangement sataff

exports.getwastemangementstaffs = async (req, res) => {
  try {
    const staffs = await user.find({ role: "Wastemanagement-Staff" })

    res.status(200).json({
      message: "Users fetched",
      staffs,
      totalstaffs: staffs.length
    })
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    })
  }
}

// delete wastemangementstaff
exports.deletewastemangementstaff = async (req, res) => {
  try {
    const { id } = req.params;

    
    const staff = await user.findById(id);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    if (staff.role !== "Wastemanagement-Staff") {
      return res.status(403).json({ message: "Cannot delete non-staff users" });
    }

    // Delete staff
    await user.findByIdAndDelete(id);

    res.status(200).json({ message: "Wastemanagement-Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}



