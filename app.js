const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
 require('dotenv/config');
const  app = express();

//middelwares
app.use(cors());
app.use(bodyParser.json());

//Import router
const postRoute = require('./routes/posts');


app.use('/posts',postRoute);


//routes
app.get('/',(req,res)=>{
    res.send("Hello from the home");
});



//connect to db
mongoose.connect(
    process.env.MONGO_URL,
        { useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        ignoreUndefined:true,
        useUnifiedTopology:true
        },
     ()=>{
    console.log("connected to db!")
});
//listen the server
app.listen(3030);