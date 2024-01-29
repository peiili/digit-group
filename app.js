const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()


const self = {
    accessToken: {},
}
app.use((req,res,next)=>{
    req.self = self
    next()
})

// 数据库
const { db } = require('./models/db')
app.use(db)

// 跨域
const cros = require('./models/cros')
app.use(cros)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',express.static(path.join(__dirname,'public/')))

// 设置ejs 模板引擎
app.set('views',path.join(__dirname,'public/'))
app.set('view engine','ejs')


module.exports = app