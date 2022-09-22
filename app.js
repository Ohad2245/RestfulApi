// The Express application sits on this page.
const express = require("express");
const app = express();
// External package - it throws a log every time someone goes to our server, it shows where they went
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/my-app`,
{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

//Connect to Mongo
mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected!');
})

const ordersRoutes = require("./api/routes/orders");

// Morgan
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ 
    extended:false
}));

// Use - can receive the Middleware.
// The my MiddleWare(function) get three argument(req,res,next).
// The "next" is callback to next middleware.
app.use((req, res, next) => {
    // Get 2 argument : 1.The name of the HEADER. 2.value.
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type ,Accept,Authorization"
  );
  // Method OPTIONS sent before all the requests(get,post,patch,delete...).
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


// Routes
app.use('/orders', ordersRoutes);


/*
When Express went through all my flow and all the middleware
and all the routes and came to the conclusion 
that there is no such route.
*/
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


// Manages all the errors for me.
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})

// exports.
module.exports = app;
