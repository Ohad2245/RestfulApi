const mongoose = require("mongoose");
const Order = require("../models/order");

module.exports = {
  //   newOrder: (req, res) => {
  //     console.log(req.body)
  //     // Function call
  //     Order.insertMany(req.body).then(function(){
  //       res.send("Data Inserted")  // Success
  //     }).catch(function(error){
  //       console.log(error)      // Failure
  //     });
  // },

  newOrder: (req, res) => {
    try {
      console.log(req.body);
      Order.insertMany(req.body)
        .then(function () {
          res.send("Data Inserted");
        })
        .catch(function (error) {
          res.send(error._message);
        });
    } catch (error) {
      res.send(error._message);
    }
  },

  //   getOrderFromLastDay: (req,res) => {
  //     let date = new Date()
  //     Order.find({ //query today up to tonight
  //         time: {
  //             $gte:new Date("2022-09-20T18:35:12Z"),
  //             $lt:new Date("2022-09-21T18:35:12Z")
  //         }
  //     }).then((orders)=>{
  //       res.status(200).json({
  //         orders,
  //       });
  //     }).catch((error) => {
  //       res.status(500).json({
  //         error,
  //       });
  //     })
  // },
  getOrderFromLastDay: (req, res) => {
    try {
      const date = new Date();
      Order.find({
        //query today up to tonight
        time: {
          $gt: new Date(date.getDate() - 1), // yesterday
          $lt: new Date(date), // To Now day
        },
      })
        .then((orders) => {
          res.status(200).json({
            orders,
          });
        })
        .catch((error) => {
          res.send(error._message);
        });
    } catch (error) {
      res.send(error._message);
    }
  },

  updateOrder: (req, res) => {
    try {
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
    } catch (error) {
      res.send(error._message);
    }
  },

  deleteOrder: (req, res) => {
    try{
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
    }catch (error) {
      res.send(error._message);
    }
  },
};
