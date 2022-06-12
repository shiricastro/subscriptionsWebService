const subscriptionModel = require('./subscriptionModel');

const getAllSubscriptions = function(){
    return new Promise((resolve,reject)=>
    {
        subscriptionModel.find({},function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}
const getSubscription = function(id)
{
    return new Promise((resolve,reject)=>
    {
        subscriptionModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}
const createSubscription = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let subscription = subscriptionModel({
            memberId : obj.memberId,
            movies : obj.movies
        })


        subscription.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(subscription._id)
            }
        })
    })
}
const updateSubscription = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        subscriptionModel.findByIdAndUpdate(id,
            {
                memberId : obj.memberId,
                movies : obj.movies
            }, function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Updated !!')
                }
            })



    })
}
const deleteSubscription = function(id)
{
    return new Promise((resolve, reject) =>
    {

        subscriptionModel.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Deleted !!')
                }
            })



    })
}

module.exports = {getAllSubscriptions,getSubscription,createSubscription,updateSubscription,deleteSubscription}