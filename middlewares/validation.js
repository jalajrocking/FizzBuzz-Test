'use scrict';

const Joi = require('@hapi/joi');

// Validate count length based on input
validateCountMiddleware = async (count) => {
    const schema = Joi.object({

        count: Joi.number()
            .min(1)
            .max(100)
    });

    schema.validate({ count });

    try {
        await schema.validateAsync({ count });
        return '';
    }
    catch (err) {
        return { error: err.details };
    }
};

exports.validateCountMiddleware = validateCountMiddleware;