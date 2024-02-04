const mysql = require('mysql2')
var moment = require('moment')

const pool = mysql.createPool({
    host: 'rm-bp1r11zh6j1nnf09l1o.mysql.rds.aliyuncs.com',
    user: 'ghost',
    password: process.env.DB_PASSWORD,
    database: 'digit_group',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
setInterval(()=>{
    pool.query('select now() time',[],function(err, res){
        console.log(res);
    })
},5*60*1e3)
var current = ''
function db(req,res,next){
    req.db = {
        query:function(sql, params, cb){
            current = moment().format('MM-DD HH:mm:ss')
            console.log(`${current}：`, sql, params);
            return pool.query(sql, params, cb)
        }
    };
    next()
}

module.exports = {
    db,
    pool
};
