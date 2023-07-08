const mongoose = require('./connection')

const Schema = new mongoose.Schema({
    showName: String,
    yearCompleted: String,
    personalRating: Number,
    wouldRecommend: String
})

const Show = mongoose.model("show", Schema)

module.exports = Show