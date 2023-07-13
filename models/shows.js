const mongoose = require('./connection')

const Schema = new mongoose.Schema({
    showName: String,
    yearCompleted: String,
    Rating: Number,
    wouldRecommend: Boolean,
    showImg: String
})

const Show = mongoose.model("show", Schema)

module.exports = Show
