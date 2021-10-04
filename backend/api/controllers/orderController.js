const mongoose = require("mongoose");
const {
  v4: uuidv4
} = require('uuid');
const Order = require('../models/order');


exports.order_get_all = (req, res, next) => {
  Order.find().select(
      "_id  "
    ).exec()
    .then(docs => {
      const response = {
        // count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            address: doc.address,
            mobileno: doc.mobileno,
            quantity: doc.quantity,
            _id: doc._id,
            
          };
        })
      };
      //   if (docs.length >= 0) {
      res.header('Content-Range', 'Appointments 0-5/20')
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.order_create = (req, res, next) => {
  console.log (req.body)
  Order.find({
      name: req.body.name,
      
    }).exec()
    .then(appointment => {
     
        const order = new Order({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          address: req.body.address,
          mobileno: req.body.mobileno,
          quantity: req.body.quantity,
          fullname: req.body.fullname,
          payment: req.body.payment,
          way: req.body.way,
          price: req.body.price,
          
          id: uuidv4(),
        });
        order.save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Food Ordered successfully",
              createdProduct: {
                name: result.name,
                date: result.price,
                time: result.time,
                service: result.service,
                
                _id: result._id,
              }
            });
          })
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.order_get_one = (req, res, next) => {
  const id = req.params.orderId;
  Order.find({
      id: id,
    }).select("name _id address mobileno quantity id consumer email phone")
    .exec()
    .then(doc => {
      if (doc) {
        res.header('Content-Range', 'Employees 0-2/10')
        // res.setHeader('X-Total-Count', docs.length);
        res.status(201).json({
           id:1,
           name: doc[0].name,
            address: doc[0].address,
            mobileno: doc[0].mobileno,
            quantity: doc[0].quantity,
            consumer: doc[0].consumer,
            email: doc[0].email,
            phone: doc[0].phone,
            _id: doc[0]._id,
        });
      } else {
        res
          .status(404)
          .json({
            message: "No valid entry found for provided ID"
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.order_update = (req, res, next) => {
  const id = req.params.orderId;
  Order.findByIdAndUpdate(req.body._id,req.body,{ useFindAndModify: false })
    .exec()
    .then(result => {
      res.header('Content-Range', 'Employees 0-2/10')
      console.log(result)
      // res.setHeader('X-Total-Count', docs.length);
      res.status(201).json({
        id:1,
        name: result.name,
         address: result.address,
         mobileno: result.mobileno,
         quantity: result.quantity,
         consumer: result.consumer,
         email: result.email,
         phone: result.phone,
         _id: result._id,
       
     });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.order_delete = (req, res, next) => {
  const id = req.params.orderId;
  Order.find({
    id: id,
  }).select("name _id address mobileno quantity id consumer email phone")
  .exec()
  .then(doc => {
    if (doc) {
      Order.findByIdAndRemove({
        _id: doc[0]._id
      })
      .exec()
      .then(result => {
        res.header('Content-Range', 'Employees 0-2/10')
        // res.setHeader('X-Total-Count', docs.length);
        res.status(201).json({
           id:1,
           name: result.name,
         address: result.address,
         mobileno: result.mobileno,
         quantity: result.quantity,
            consumer: result.consumer,
            email: result.email,
            phone: result.phone,
            _id: result._id,
          
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });

    } else {
      res
        .status(404)
        .json({
          message: "No valid entry found for provided ID"
        });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });

}