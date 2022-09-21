const mongoose = require("mongoose");
const Order = require("../models/order");


module.exports = {
  getAllOrders: (req, res) => {
    Order.find()
      .then((orders) => {
        res.status(200).json({
          orders,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  getOrderFromLastDay: (req,res) => {
    let date = new Date()
    Order.find({ //query today up to tonight
        time: {
            $gte:new Date("2022-09-20T18:35:12Z"), 
            $lt:new Date("2022-09-21T18:35:12Z")
        }
    }).then((orders)=>{
      res.status(200).json({
        orders,
      });
    }).catch((error) => {
      res.status(500).json({
        error,
      });
    })
},

  // getOrderFromLastDay: (req,res) => {
  //   console.log(req.body)
  //   Order.collection.find
  //   ({"createdDate":{$gte:new ISODate("yyyy-mm-ddThh:mm:ssZ"),
  //   $lte:new ISODate("yyyy-mm-ddThh:mm:ssZ")}})
  // },

  newOrder: (req, res) => {
    console.log(req.body)
    // Function call
    Order.insertMany(req.body).then(function(){
      res.send("Data inserted")  // Success
    }).catch(function(error){
      console.log(error)      // Failure
    });

    // Order.collection.insert(orders, function (err,docs) {
    //   if (err) {
    //     return console.error(err);
    //   } else {
    //     console.log("Multiple Orders inserted to Collection");
    //   }
    // });
  },

  // newOrder:(orders) =>{
  //   const res = Order.collection.insert(
  //     orders,
  //     {
  //       writeConcern:orders,
  //       ordered:boolean
  //     }
  //   )
  //   console.log(res);
  // },
  
  createOrder: (req, res) => {
    const { title, description, content } = req.body;

    const order = new Order({
      _id: new mongoose.Types.ObjectId(),
      title,
      description,
      content,
    });

    order
      .save()
      .then(() => {
        res.status(200).json({
          message: "Created Order",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },

  getOrder: (req, res) => {
    const orderId = req.params.orderId;

    Order.findById(orderId)
      .then((order) => {
        res.status(200).json({
          order,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
  updateOrder: (req, res) => {
    const orderId = req.params.orderId;
    Order.updateOne({ _id: orderId }, req.body).then(() => {
      res
        .status(200)
        .json({
          message: "Order Updated",
        })
        .catch((error) => {
          res.status(500).json({
            error,
          });
        });
    });
  },

  deleteOrder: (req, res) => {
    const orderId = req.params.orderId;

    Order.remove({ _id: orderId })
      .then(() => {
        res.status(200).json({
          message: `Order _id :  ${orderId} Deleted`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
};
