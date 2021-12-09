const express = require('express');
const passport = require('passport');
const router = express.Router();

const controller = require('./../controllers/productController')

router.use(passport.authenticate('jwt', {session:false}));

router.post('/add', controller.createProduct);
router.get('/list', controller.listProducts);

module.exports = router;