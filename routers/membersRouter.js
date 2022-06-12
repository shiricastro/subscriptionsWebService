const express = require('express');
const membersBL = require('../models/membersBL');

const router = express.Router();

router.route('/')
    .get(async function(req,resp)
    {
        let members = await membersBL.getAllMembers();
        return resp.json(members)
    })
router.route('/:id')
    .get(async function(req,resp)
    {
        let id = req.params.id;
        let member = await membersBL.getMember(id);
        return resp.json(member)
    })
    
router.route('/')
    .post(async function(req,resp)
    {
        let obj = req.body;
        let status = await membersBL.createMember(obj);
        return resp.json(status)
    })
    
router.route('/:id')
    .put(async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;

        let status = await membersBL.updateMember(id,obj);
        return resp.json(status)
    })
      
    
router.route('/:id')
    .delete(async function(req,resp)
    {
        let id = req.params.id;

        let status = await membersBL.deleteMember(id);
        return resp.json(status)
    })


module.exports = router;