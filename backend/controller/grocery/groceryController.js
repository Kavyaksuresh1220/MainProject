const GroceryItem = require('../../model/grocery/groceryModel')

exports.addgrocery = async (req, res) => {
  console.log("inside add grocery")
  console.log(req.body)

  const {
    productName,
    category,
    price,
    quantity,
    unit,
    image,
    expiryDate,
    description,
    isAvailable
  } = req.body

  const userMail = req.payload // from JWT

  try {
    const newgrocery = new GroceryItem({
      productName,
      category,
      price,
      quantity,
      unit,
      image,
      expiryDate,
      description,
      isAvailable,
      userMail
    })

    await newgrocery.save()

    res.status(201).json({
      message: "Grocery added successfully ✅",
      newgrocery
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: "Error adding grocery ❌",
      error: err.message
    })
  }
}


exports.getgrocery=async(req,res)=>{

console.log(req.query);//search luminar
console.log(req.query.search);
const searchKey=req.query.search





    try{
const query={
  productName:{
    $regex:searchKey,
    $options:'i'
  }
  
}

        const allgrocery=await GroceryItem.find(query)
        res.status(200).json({allgrocery})
    }
    catch(err){
        res.status(500).json({message:"ERROR"+err})
    }
}