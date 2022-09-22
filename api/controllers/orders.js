const mongoose = require("mongoose");
const Order = require("../models/order");

module.exports = {
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

  getOrderFromLastDay: (req, res) => {
    try {
      var start = new Date();
      start.setUTCHours(0,0,0,0);
      start.toUTCString();
      Order.find({
        //query today up to tonight
        time: {
          $gt: new Date(start.toUTCString()), // The beginning of the day.
          $lt: new Date(), // To Now.
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
