const express = require('express');
const passport = require('passport');
const router = express.Router();

const controller = require('./../controllers/inventoryController')

router.use(passport.authenticate('jwt', {session:false}));

router.post('/add', controller.createInventory);
router.get('/list', controller.listInventory);
router.get('/product/:productid', controller.getInventoryByProduct)

module.exports = router;