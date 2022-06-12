const express = require('express');
const subscriptionsRouter  = require('./routers/subscriptionsRouter');
const membersRouter  = require('./routers/membersRouter');
const moviesRouter  = require('./routers/moviesRouter');
var cors = require('cors');
let app = express();

require('./configs/database');
app.use(cors())
app.use(express.json());
app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/members', membersRouter);

app.listen(8000);
console.log('server is running...');

//get data from web services
const membersBL = require('./models/membersBL');
const membersDAL = require('./DAL/membersDAL');
const moviesBL = require('./models/moviesBL');
const moviesDAL = require('./DAL/moviesDAL');
(async() =>
{
    let memberData = await membersBL.getAllMembers();
    if(memberData.length <= 0){
        let membersWS = await membersDAL.getAllMembers();
        let membersArr = membersWS.data;
        let members = membersArr.map(x=>{return {name:x.name,email:x.email,city:x.address.city}})
        await membersBL.addMembers(members);
    }
    let movieData = await moviesBL.getAllMovies();
    if(movieData.length <= 0){
        let moviesWS = await moviesDAL.getAllMovies();
        let moviesArr = moviesWS.data;
        let movies = moviesArr.map(x=>{return {name:x.name,genres:x.genres,image:x.image.medium,premiered:x.premiered}})
        await moviesBL.addMovies(movies);
    }
    
})();



