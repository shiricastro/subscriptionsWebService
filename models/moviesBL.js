const movieModel = require('./movieModel');


const getAllMovies = function(){
    return new Promise((resolve,reject)=>
    {
        movieModel.find({},function(err,data)
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
const addMovies = function(moviesObj)
{
    return new Promise((resolve, reject) =>
    {
        movieModel.collection.insert(moviesObj, function (err) {
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
const getMovie = function(id)
{
    return new Promise((resolve,reject)=>
    {
        movieModel.findById(id, function(err, data)
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
const createMovie = function(obj)
{
    return new Promise((resolve, reject) =>
    {

        let movie = movieModel({
            name : obj.name,
            genres : obj.genres,
            image : obj.image,
            premiered:obj.premiered
        })


        movie.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(movie._id)
            }
        })
    })
}
const updateMovie = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        movieModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                genres : obj.genres,
                image : obj.image,
                premiered:obj.premiered
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
const deleteMovie = function(id)
{
    return new Promise((resolve, reject) =>
    {

        movieModel.findByIdAndDelete(id,function(err)
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

module.exports = {getAllMovies,addMovies,getMovie,createMovie,updateMovie,deleteMovie}