const mongoose = require("mongoose");
const Order = require("../models/order");


module.exports = {
  newOrder: (req, res) => {
    console.log(req.body)
    // Function call
    Order.insertMany(req.body).then(function(){
      res.send("Data Inserted")  // Success
    }).catch(function(error){
      console.log(error)      // Failure
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
          message: `Order _id : ${orderId} Deleted`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
};
