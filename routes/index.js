const router = require('express').Router();

router.use('/fizz-buzz', require('./fizz-buzz'));

module.exports = router;
