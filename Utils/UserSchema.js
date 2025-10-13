const { options } = require("../Router/MainRoute");

const checkUserData = {
    name: {
        isNotEmpty:{
            errorMessage:"The name must not be null"
        },
        isLength:{
            options:{min: 3, max:10},
            errorMessage: "The Entered name is invalid"
        }
    },
    location:{
        isNotEmpty:{
            errorMessage:"The location must not be empty"
        },
        isLength:{
            options:{min: 3, max:10},
            errorMessage:"The location entered is too short please enter valid location"
        }
    }
}

module.exports = checkUserData;