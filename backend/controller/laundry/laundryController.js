const LaundryOrder = require('../../model/laundry/customerModel')
const User = require('../../model/userModel');

exports.createLaundryOrder = async (req, res) => {
  try {
    const { service, noofclothes, type, date, time, customername, payment, amount, laundrystaff } = req.body
    const userEmail = req.payload

    if (!service || !noofclothes || !type || !date || !time) {
      return res.status(400).json({
        message: "All Fields Are Required"
      })
    }

    const newOrder = new LaundryOrder({ service, noofclothes, type, date, time, customername, payment, amount, email: userEmail, laundrystaff })

    await newOrder.save()

    return res.status(201).json({
      message: "Laundry Order Booked Successfully",
      newOrder
    })

  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: "Server Error"
    })
  }
}

// get oreder of specicific user

exports.getLaundryOrders = async (req, res) => {
  try {
    const userEmail = req.payload  // from JWT

    const orders = await LaundryOrder.find({ email: userEmail }).sort({ createdAt: -1 })

    res.status(200).json(orders)

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server Error" })
  }
}

 
// get all order
exports.getallLaundryOrder = async (req, res) => {
  try {
    const orders = await LaundryOrder.find()
    const totalOrders = await LaundryOrder.countDocuments()
    res.status(200).json({ message: "All oreders are fetched", orders, totalOrders })

  } catch (err) {
    res.status(500).json({ message: "Server Error" })
  } 
}

// laundry pending ordrs

exports.getpendingOrders = async (req, res) => {
  try {
    const pending = await LaundryOrder
      .find({ status: { $regex: /^pending$/i } })
      .sort({ createdAt: 1 })

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




// upadte staus pending to confirm and staffname


exports.updateToConfirm = async (req, res) => {
  try {
    const { id } = req.params;
    const { laundrystaff } = req.body; // frontend sends staff name or email

    const updatedOrder = await LaundryOrder.findByIdAndUpdate(
      id,
      {
        status: "Confirm",
        laundrystaff: laundrystaff, // keep current working code
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

// laundry confirmed orders
exports.getconfirmOrders = async (req, res) => {
  try {
    const confirm = await LaundryOrder
      .find({ status: { $regex: /^Confirm$/i } })
      .sort({ createdAt: 1 })

    res.status(200).json({
      message: "confirm orders fetched",
      confirm,
      noofconfirm: confirm.length,
      firstorder: confirm[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}
// laundry picked orders
exports.getpickedOrders = async (req, res) => {
  try {
    const picked = await LaundryOrder
      .find({ status: { $regex: /^picked$/i } })
      .sort({ createdAt: 1 })

    res.status(200).json({
      message: "picked orders fetched",
      picked,
      noofpicked: picked.length,
      firstorder: picked[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}

// laundry delivered orders
exports.getdeliveredOrders = async (req, res) => {
  try {
    const delivered = await LaundryOrder
      .find({ status: { $regex: /^delivered$/i } })
      .sort({ createdAt: 1 })

    res.status(200).json({
      message: "delivered orders fetched",
      delivered,
      noofdelivered: delivered.length,
      firstorder: delivered[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}
// laundry completed orders
exports.getcompletedOrders = async (req, res) => {
  try {
    const completed = await LaundryOrder
      .find({ status: { $regex: /^completed$/i } })
      .sort({ createdAt: 1 })

    res.status(200).json({
      message: "completed orders fetched",
      completed,
      noofcompleted: completed.length,
      firstorder: completed[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}



// laundry processing orders
exports.getprocessingOrders = async (req, res) => {
  try {
    const processing = await LaundryOrder
      .find({ status: { $regex: /^processing$/i } })
      .sort({ createdAt: 1 })

    res.status(200).json({
      message: "processing orders fetched",
      processing,
      noofprocessing: processing.length,
      firstorder: processing[0] || null
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}
// confirmed orders of logged-in staff

exports.getMyPendingOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT middleware sets this as string
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find the username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }

    const staffUsername = user.username; // this matches laundrystaff in DB

    // Step 2: Find all confirmed orders assigned to this staff
    const orders = await LaundryOrder.find({
      status: "Pending",
      laundrystaff: staffUsername
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

// confirmed orders of logged-in staff

exports.getMyConfirmedOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT middleware sets this as string
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find the username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }

    const staffUsername = user.username; // this matches laundrystaff in DB

    // Step 2: Find all confirmed orders assigned to this staff
    const orders = await LaundryOrder.find({
      status: "Confirm",
      laundrystaff: staffUsername
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









// CONFIRM → PICKED (delivery staff action)
exports.updateToPicked = async (req, res) => {
  try {
    const { id } = req.params;
    const staffEmail = req.payload; // from JWT

    // Update only if:
    // 1. Order is Confirm
    // 2. Order belongs to this staff
    const updatedOrder = await LaundryOrder.findOneAndUpdate(
      {
        _id: id,
        status: "Confirm",
        laundrystaff: { $exists: true } // already assigned
      },
      {
        status: "Picked"
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found or not eligible for pickup"
      });
    }

    res.status(200).json({
      message: "Order successfully marked as Picked",
      data: updatedOrder
    });

  } catch (error) {
    console.error("Update to picked error:", error);
    res.status(500).json({ message: "Server error" });
  }
};




exports.getMyPickedOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find the username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }
    const staffUsername = user.username;

    // Step 2: Fetch orders with status "Picked" assigned to this staff
    const orders = await LaundryOrder.find({
      status: { $regex: /^Picked$/i },
      laundrystaff: { $in: [staffUsername, "Laundry-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your picked orders fetched",
      orders,
      total: orders.length,
      firstorder: orders[0] || null
    });
  } catch (err) {
    console.error("Error fetching picked orders:", err);
    res.status(500).json({ message: "Server Error" });
  }
};
// staff picked to processing

exports.updateToProcessing = async (req, res) => {
  try {
    const { id } = req.params;
    const staffEmail = req.payload; // from JWT

    // Update only if:
    // 1. Order is Confirm
    // 2. Order belongs to this staff
    const updatedOrder = await LaundryOrder.findOneAndUpdate(
      {
        _id: id,
        status: "Picked",
        laundrystaff: { $exists: true } // already assigned
      },
      {
        status: "Processing"
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found or not eligible for pickup"
      });
    }

    res.status(200).json({
      message: "Order successfully marked as Picked",
      data: updatedOrder
    });

  } catch (error) {
    console.error("Update to picked error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



exports.getMyProcessingOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }
    const staffUsername = user.username;

    // Step 2: Fetch orders with status "Processing" assigned to this staff
    const orders = await LaundryOrder.find({
      status: { $regex: /^Processing$/i },
      laundrystaff: { $in: [staffUsername, "Laundry-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your processing orders fetched",
      orders,
      total: orders.length,
      firstorder: orders[0] || null
    });
  } catch (err) {
    console.error("Error fetching processing orders:", err);
    res.status(500).json({ message: "Server Error" });
  }
};


exports.updateToCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const staffEmail = req.payload; // from JWT

    // Update only if:
    // 1. Order is Confirm
    // 2. Order belongs to this staff
    const updatedOrder = await LaundryOrder.findOneAndUpdate(
      {
        _id: id,
        status: "Processing",
        laundrystaff: { $exists: true } // already assigned
      },
      {
        status: "Completed"
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found or not eligible for pickup"
      });
    }

    res.status(200).json({
      message: "Order successfully marked as Picked",
      data: updatedOrder
    });

  } catch (error) {
    console.error("Update to picked error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// completed orders of logged-in staff
exports.getMyCompletedOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }
    const staffUsername = user.username;

    // Step 2: Fetch orders with status "Completed" assigned to this staff
    const orders = await LaundryOrder.find({
      status: { $regex: /^Completed$/i },
      laundrystaff: { $in: [staffUsername, "Laundry-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your completed orders fetched",
      orders,
      total: orders.length,
      firstorder: orders[0] || null
    });
  } catch (err) {
    console.error("Error fetching completed orders:", err);
    res.status(500).json({ message: "Server Error" });
  }
};



exports.updateToDelivered = async (req, res) => {
  try {
    const { id } = req.params;
    const staffEmail = req.payload; // from JWT

    // Update only if:
    // 1. Order is Confirm
    // 2. Order belongs to this staff
    const updatedOrder = await LaundryOrder.findOneAndUpdate(
      {
        _id: id,
        status: "Completed",
        laundrystaff: { $exists: true } // already assigned
      },
      {
        status: "Delivered"
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Order not found or not eligible for pickup"
      });
    }

    res.status(200).json({
      message: "Order successfully marked as Picked",
      data: updatedOrder
    });

  } catch (error) {
    console.error("Update to picked error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// delivered orders of logged-in staff

exports.getMyDeliveredOrders = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }
    const staffUsername = user.username;

    // Step 2: Fetch orders with status "Processing" assigned to this staff
    const orders = await LaundryOrder.find({
      status: { $regex: /^Delivered$/i },
      laundrystaff: { $in: [staffUsername, "Laundry-staff"] } // backward compatibility
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Your processing orders fetched",
      orders,
      total: orders.length,
      firstorder: orders[0] || null
    });
  } catch (err) {
    console.error("Error fetching processing orders:", err);
    res.status(500).json({ message: "Server Error" });
  }
};



// GET TOTAL AMOUNT, STAFF SALARY, AND INCOME
exports.getLaundryIncomeReport = async (req, res) => {
  try {
    // Fetch all completed/delivered orders that have an amount
    const orders = await LaundryOrder.find({
      
      amount: { $exists: true, $ne: null }
    });

    // Calculate total amount
    const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

    // Calculate staff salary (60% of total amount)
    const staffSalary = totalAmount * 0.6;

    // Calculate profit/income for admin
    const income = totalAmount - staffSalary;

    res.status(200).json({
      message: "Laundry income report fetched successfully",
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
 

exports.mySalaryReport = async (req, res) => {
  try {
    const staffEmail = req.payload; // JWT email
    if (!staffEmail) {
      return res.status(400).json({ message: "Invalid token or missing staff email" });
    }

    // Step 1: Find username corresponding to this email
    const user = await User.findOne({ email: staffEmail });
    if (!user) {
      return res.status(404).json({ message: "Staff not found" });
    }
    const staffUsername = user.username;

    // Step 2: Fetch orders with status "Completed" or "Delivered" assigned to this staff
    const orders = await LaundryOrder.find({
      status: { $in: [ "Delivered"] },
      laundrystaff: { $in: [staffUsername, "Laundry-staff"] } // backward compatibility
    });

    // Step 3: Calculate total amount and salary
    const totalAmount = orders.reduce((sum, order) => sum + (order.amount || 0), 0);
    const salary = Math.round(totalAmount * 0.6);

    res.status(200).json({
      message: "Salary report fetched",
      totalAmount,
      salary,
      totalOrders: orders.length
    });

  } catch (error) {
    console.error("Error fetching salary report:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


exports.getLaundryypendingOrders = async (req, res) => {
  try {
    const pending = await LaundryOrder.find({
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



























