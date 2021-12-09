const express = require('express');
const passport = require('passport');
const router = express.Router();

const controller = require('./../controllers/orderController')

router.use(passport.authenticate('jwt', {session:false}));

router.post('/add', controller.createOrder)
router.get('/list', controller.listOrders);
router.get('/list/:customerid', controller.listOrderByCustomer);


module.exports = router;