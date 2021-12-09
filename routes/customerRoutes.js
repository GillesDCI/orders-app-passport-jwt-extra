const express = require('express');
const passport = require('passport');
const router = express.Router();

const controller = require('./../controllers/customerController')

router.use(passport.authenticate('jwt', {session:false}));

//Insert a new customer
router.post('/add', controller.createCustomer);
router.patch('/update/:id', controller.updateCustomerById);
router.get('/list', controller.listCustomers);


module.exports = router;