const mongoose = require('mongoose');

let SubscriptionSchema = new mongoose.Schema({
    memberId : mongoose.ObjectId,
    movies : [{movieId : mongoose.ObjectId , date : Date}]    
})

module.exports = mongoose.model('subscription', SubscriptionSchema);