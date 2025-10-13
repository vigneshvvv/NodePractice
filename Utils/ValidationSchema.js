const { options } = require("../Router/MainRoute");

const createUserValidation = {
    name:{
        notEmpty:{
            errorMessage: "The name must not be Empty"
        },
        isLength:{
            options: {min: 3, max: 12},
            errorMessage: "The Username is too short"
        }
    },
    location:{
        notEmpty:{
            errorMessage: "The name must not be Empty"
        }
    }
}

module.exports = createUserValidation;

