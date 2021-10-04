const orderController = require('../controllers/orderController');
const express = require("express");
const router = express.Router();


router.get("/", orderController.order_get_all);

router.post("/", orderController.order_create);

router.get("/:orderId",orderController.order_get_one);

router.put("/:orderId",orderController.order_update);

router.delete("/:orderId",orderController.order_delete);


module.exports = router;
  