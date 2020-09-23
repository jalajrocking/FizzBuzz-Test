const express = require('express');

const FizzBuzzController = require('../controllers/fizz-buzz');

const router = express.Router();

// Display Fizz Buzz based on user count - Route
router.get('/display', (req, res) =>  {

    let count = req.query.count;

    let output = FizzBuzzController.displayHandler(count)
        .then((data) => {

            if (data.code === 200)
                return res.status(data.code).send({ result: true, data: data.output });
            else
                return res.status(data.code).send({ result: false, error: data.message });
        })
        .catch((err) => {
            return res.status(data.code).send({ result: false, error: err.message });
        });
});

module.exports = router;