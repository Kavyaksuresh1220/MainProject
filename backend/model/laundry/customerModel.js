const mongoose = require('mongoose')

const laundrySchema = new mongoose.Schema(
  {
    customername:{
      type:String,
    
    }, 
    email:{
      type:String,
     
    },
    laundrystaff:{
      type:String,
      default: "no-staff"
    
    },
    payment:{
      type:String,
      default: 'pending'
    
    },
    service: {
      type: String,
      required: true,
      enum: [
        'Wash And Fold',
        'Wash And Iron',
        'Dry Cleaning',
        'Express'
      ]
    },

    noofclothes: {
      type: Number,
      required: true,
      min: 1
    },

    type: {
      type: String,
      required: true,
      enum: ['Mixed', 'Cotton', 'Wool', 'Delicate']
    },

    
    date: {
      type: Date,
      required: true
    },

    
    time: {
      type: String,
      required: true,
      enum: [
        '9 AM – 12 PM',
        '12 PM – 3 PM',
        '3 PM – 6 PM'
      ]
    },

    amount:{
      type:Number
    },

    
    status: {
      type: String,
      default: 'Pending'
    }
  },
  {
    timestamps: true 
  }
)

module.exports = mongoose.model('LaundryOrder', laundrySchema)
