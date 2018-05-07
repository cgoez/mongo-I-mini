const mongoose = require('mongoose')

const definition = {
    species: {
        type: String,
        required: true,
        unique: true
    },
    latinName: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
}

// const definition = {
//     species: "American Black Bear", // String, required
//     latinName: "Ursus americanus",  // String, required
//     createdOn: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, required, defaults to current date
//   }

const options = {
    timestamps: true
}

const bearSchema = new mongoose.Schema(definition, options)

const bearModel = mongoose.model('Bear', bearSchema, 'bears')

module.exports = bearModel;