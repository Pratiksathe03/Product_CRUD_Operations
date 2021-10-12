const express = require('express');
const app = express();
const { Pool } = require("pg");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, FETCH');
    next();
});

const  storage = require('./config/dbDetails');

console.log("storage.PgSQLDB")

const pool = new Pool(storage.PgSQLDB);



const startServer = async function() {
    const client = await pool.connect();
    if(client){
        console.log("connected....");
    }else{
        console.log("Failed to connect DB....")
    }
}

startServer();

const routers = require('./routers/index');
app.use('/api',routers)

app.listen(8081,()=>{
    console.log("server is running...")
})





