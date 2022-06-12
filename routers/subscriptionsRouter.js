const express = require('express');
const subscriptionsBL = require('../models/subscriptionsBL');

const router = express.Router();

router.route('/')
    .get(async function(req,resp)
    {
        let subscriptions = await subscriptionsBL.getAllSubscriptions();
        return resp.json(subscriptions)
    })
router.route('/:id')
    .get(async function(req,resp)
    {
        let id = req.params.id;
        let subscription = await subscriptionsBL.getSubscription(id);
        return resp.json(subscription)
    })
    
router.route('/')
    .post(async function(req,resp)
    {
        let obj = req.body;
        let status = await subscriptionsBL.createSubscription(obj);
        return resp.json(status)
    })
    
router.route('/:id')
    .put(async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;
        let status = await subscriptionsBL.updateSubscription(id,obj);
        return resp.json(status)
    })
      
    
router.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;

        let status = await subscriptionsBL.deleteSubscription(id);
        return resp.json(status)
    })

module.exports = router;