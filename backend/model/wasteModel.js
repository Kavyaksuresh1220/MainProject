const mongoose=require('mongoose')

const WastemanagementSchema= new mongoose.Schema(
    {
    customername:{
      type:String,
    
    }, 
    email:{
      type:String,
     
    },
    wastemanagementstaff:{
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
        'Household Waste',
        'Recyclable Waste',
        'Bulk / Special Waste'
        
      ]
    },

    category: {
  type: String,
  required: true,
  enum: ['Organic', 'Plastic', 'Paper', 'Metal', 'Mixed']
}
,

    quantity: {
      type: String,
      required: true,
      enum: ['Small (1–2 bags)', 'Medium (3–5 bags)', 'Large (More than 5 bags)']
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
module.exports = mongoose.model('WasteManagement',WastemanagementSchema )