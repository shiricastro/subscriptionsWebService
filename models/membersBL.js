const memberModel = require('./memberModel');

const getAllMembers = function(){
    return new Promise((resolve,reject)=>
    {
        memberModel.find({},function(err,data)
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
const addMembers = function(membersObj)
{
    return new Promise((resolve, reject) =>
    {
        memberModel.collection.insert(membersObj, function (err) {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Multiple documents inserted to Collection')
            }
           
          });
      
    })
}
const getMember = function(id)
{
    return new Promise((resolve,reject)=>
    {
        memberModel.findById(id, function(err, data)
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
const createMember = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let member = memberModel({
            name : obj.name,
            email : obj.email,
            city : obj.city
        })


        member.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(member._id)
            }
        })
    })
}
const updateMember = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        memberModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                email : obj.email,
                city : obj.city
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
const deleteMember = function(id)
{
    return new Promise((resolve, reject) =>
    {

        memberModel.findByIdAndDelete(id,function(err)
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


module.exports = {getAllMembers,addMembers,getMember,createMember,updateMember,deleteMember}