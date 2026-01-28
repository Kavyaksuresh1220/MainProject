const WasteManagement = require('../model/wasteModel')
const User= require('../model/userModel')


// create orders
exports.createWasteManagementOrder = async (req, res) => {
  try {
    const { service,quantity,  category, date, time, customername, payment, amount, wastemanagementstaff } = req.body
    const userEmail = req.payload

    if (!service || !quantity || !category || !date || !time) {
      return res.status(400).json({
        message: "All Fields Are Required"
      })
    }

    const newOrder = new WasteManagement({ service, quantity, category, date, time, customername, payment, amount, email: userEmail, wastemanagementstaff })

    await newOrder.save()

    return res.status(201).json({
      message: "Slot Booked Successfully",
      newOrder
    })

  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: "Server Error"
    })
  }
}

// get orders specific order
exports.getWastemanagementOrders = async (req, res) => {
  try {
    const userEmail = req.payload  // from JWT

    const orders = await WasteManagement.find({ email: userEmail }).sort({ date: -1 })

    res.status(200).json(orders)

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server Error" })
  }
}

exports.getpendingWasteOrders = async (req, res) => {
  try {
    const pending = await WasteManagement
      .find({ status: { $regex: /^pending$/i } })
      .sort({ createdAt: 1 })

    res.status(200).json({
      message: "WasteManagement orders fetched",
      pending,
      noofpending: pending.length,
      firstorder: pending[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}
exports.updateToConfirm = async (req, res) => {
  try {
    const { id } = req.params;
    const { wastemanagementstaff } = req.body; // frontend sends staff name or email

    const updatedOrder = await WasteManagement.findByIdAndUpdate(
      id,
      {
        status: "Confirm",
        wastemanagementstaff: wastemanagementstaff, 
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order successfully approved",
      data: updatedOrder,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMyConfirmedOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) return res.status(400).json({ message: "Invalid token or missing staff email" });

    const user = await User.findOne({ email: staffEmail });
    if (!user) return res.status(404).json({ message: "Staff not found" });

    const staffUsername = user.username;

    const orders = await WasteManagement.find({
      status: { $regex: /^Confirm$/i },
      wastemanagementstaff: { $in: [staffUsername, "Waste-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your confirmed orders fetched",
      orders,
      total: orders.length,
      firstorder: orders[0] || null
    });
  } catch (err) {
    console.error("Error fetching confirmed orders:", err);
    res.status(500).json({ message: "Server Error" });
  }
};


exports.updateToPicked = async (req, res) => {
  try {
    const { id } = req.params;
    const { wastemanagementstaff } = req.body; // frontend sends staff name or email

    const updatedOrder = await WasteManagement.findByIdAndUpdate(
      id,
      {
        status: "Picked",
        wastemanagementstaff: wastemanagementstaff, 
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order successfully approved",
      data: updatedOrder,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMyPickedOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) return res.status(400).json({ message: "Invalid token or missing staff email" });

    const user = await User.findOne({ email: staffEmail });
    if (!user) return res.status(404).json({ message: "Staff not found" });

    const staffUsername = user.username;

    const orders = await WasteManagement.find({
      status: { $regex: /^Picked$/i },
      wastemanagementstaff: { $in: [staffUsername, "Waste-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your confirmed orders fetched",
      orders,
      total: orders.length,
      firstorder: orders[0] || null
    });
  } catch (err) {
    console.error("Error fetching confirmed orders:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.mySalaryReport = async (req, res) => {
  try {
    // Step 0: Get staff email from JWT payload
    const staffEmail = req.payload; // make sure this matches how JWT payload is sent

    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find user to get username
    const user = await User.findOne({ email: staffEmail });
    if (!user) return res.status(404).json({ message: "Staff not found" });

    const staffUsername = user.username;

    // Step 2: Fetch Picked orders for this staff
    const orders = await WasteManagement.find({
      status: { $regex: /^Picked$/i }, // matches 'Picked' case-insensitively
      wastemanagementstaff: { $in: [staffUsername, "Waste-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    // Step 3: Calculate total amount and salary
    const totalAmount = orders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
    const salary = Math.round(totalAmount * 0.6); // assuming 60% commission

    res.status(200).json({
      message: "Salary report fetched",
      totalAmount,
      salary,
      totalOrders: orders.length,
      firstOrder: orders[0] || null
    });

  } catch (error) {
    console.error("Error fetching salary report:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
// get all order
exports.getallWastemanagementOrder = async (req, res) => {
  try {
    const orders = await WasteManagement.find()
    const totalOrders = await WasteManagement.countDocuments()
    res.status(200).json({ message: "All oreders are fetched", orders, totalOrders })

  } catch (err) {
    res.status(500).json({ message: "Server Error" })
  }
}

// controllers/wasteController.js

exports.getpendingOrders = async (req, res) => {
  try {
    const pending = await WasteManagement
      .find({ status: { $regex: /^pending$/i } })
      .sort({ createdAt: 1 });

    res.status(200).json({
      message: "Pending orders fetched",
      pending,
      noofpending: pending.length,
      firstorder: pending[0] || null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

exports.getconfirmOrders = async (req, res) => {
  try {
    const confirm = await WasteManagement
      .find({ status: { $regex: /^Confirm$/i } })
      .sort({ createdAt: 1 });

    res.status(200).json({
      message: "Pending orders fetched",
      confirm,
      noofconfirm: confirm.length,
      firstorder: confirm[0] || null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}

exports.getpickedOrders = async (req, res) => {
  try {
    const picked = await WasteManagement
      .find({ status: { $regex: /^Picked$/i } })
      .sort({ createdAt: 1 });

    res.status(200).json({
      message: "Pending orders fetched",
      picked,
      noofpicked: picked.length,
      firstorder: picked[0] || null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}


exports.getWasteIncomeReport = async (req, res) => {
  try {
    // Fetch all completed/delivered orders that have an amount
    const orders = await WasteManagement.find({
     
      amount: { $exists: true, $ne: null }
    });

    // Calculate total amount
    const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

    // Calculate staff salary (60% of total amount)
    const staffSalary = totalAmount * 0.6;

    // Calculate profit/income for admin
    const income = totalAmount - staffSalary;

    res.status(200).json({
      message: "WAste income report fetched successfully",
      totalAmount,
      staffSalary,
      income,
      totalOrders: orders.length
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
}


exports.getpendingOrders = async (req, res) => {
  try {
    const pending = await WasteManagement.find({
      status: { $in: ["pending", "Pending", "PENDING"] }
    }).sort({ createdAt: 1 })

    res.status(200).json({
      message: "Pending orders fetched",
      pending,
      noofpending: pending.length,
      firstorder: pending[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}




