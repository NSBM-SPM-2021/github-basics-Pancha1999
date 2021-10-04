const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');

app.use(morgan('dev'))
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


const orderRoutes = require('./api/routes/order');

const corsOptions = {
    origin: '*',
    method: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use((req,res,next) =>{
        res.setHeader('Access-Control-Expose-Headers','Content-Range'),
        res.setHeader('Access-Control-Allow-Origin','*'),
        res.setHeader('Access-Control-Allow-Headers','*'),
        next()
})

app.use('/orders',orderRoutes);


//DB config
const connection_url =  'mongodb://admin:admin@cluster0-shard-00-00.3rluf.mongodb.net:27017,cluster0-shard-00-01.3rluf.mongodb.net:27017,cluster0-shard-00-02.3rluf.mongodb.net:27017/savory?ssl=true&replicaSet=atlas-jo71cu-shard-0&authSource=admin&retryWrites=true&w=majority';
mongodb://admin:admin@cluster0-shard-00-00.3rluf.mongodb.net:27017,cluster0-shard-00-01.3rluf.mongodb.net:27017,cluster0-shard-00-02.3rluf.mongodb.net:27017/savory?ssl=true&replicaSet=atlas-jo71cu-shard-0&authSource=admin&retryWrites=true&w=majority
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});

mongoose.Promise = global.Promise;


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods",'PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
    }
})


app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404;
    next(err);
})

app.use((err, req,res,next)=>{
    res.status(err.status || 500);
    res.json({
        err:{
            message:err.message
        }
    })
})

module.exports = app;