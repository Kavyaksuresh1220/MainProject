const mongoose = require('mongoose')

const groceryItemSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      
    },

    category: {
      type: String,
      required: true,
      enum: [
        'Vegetables',
        'Fruits',
        'Dairy',
        'Grains',
        'Snacks',
        'Beverages',
        'Spices',

        
      ]
    },
 
    price: {
      type: Number,
      required: true,
      min: 0
    },

    quantity: {
      type: Number,
      required: true,
      min: 0
    },

    unit: {
      type: String,
      enum: ['Kg', 'Gram', 'Litre', 'Piece', 'Packet'],
      default: 'Piece'
    },

    image: {
      type: String, // image URL or filename
      default: ''
    },

    expiryDate: {
      type: Date
    },

    description: {
      type: String,
      trim: true
    },
    userMail: {
    type: String,
    required: true,
  },

    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true 
  }
)

module.exports = mongoose.model('GroceryItem', groceryItemSchema)
