const ejs = require('ejs')
const fs = require('fs');  
function index(req, res){
    const list = [{
        avatar:'123123',
        title:'12323',
        id:'1',
        createDate: '2024-01-12'
    },{
        avatar:'123123',
        title:'12323',
        id:'1',
        createDate: '2024-01-12'
    }]
   return res.render('index/index', { list: list });
}

module.exports = index
