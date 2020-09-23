'use scrict';

const config = require('config');

const { validateCountMiddleware } = require('../middlewares/validation');
const actions = require('../middlewares/actions');

class FizzBuzzController {

    // Display Fizz Buzz based on user count - Controller    
    async displayHandler(count) {

        // General validation to check count is min 1 and max 100
        const { error } = await validateCountMiddleware(count);

        if (error) {
            return { code: 400, message: error[0].message };
        }

        let output = Array.apply(null, {length: count})
                        .map(function(val, index) {
                            return ( ++index % 3 ? '' : `${actions.FIZZ}` ) + ( index % 5 ? '' : `${actions.BUZZ}` ) || index;
                        });

        return { code: 200, output };
    }
}

const controller = new FizzBuzzController();

module.exports = controller;
