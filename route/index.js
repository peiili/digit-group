const ejs = require('ejs')
const fs = require('fs');  
function index(req, res){
   return res.render('index/index', { foo: 'FOO', delimiter: '?' });
    // let template = fs.readFileSync(__dirname+'/../public/index/index.ejs', 'utf-8')
    // let html = ejs.render(template, { name: 'John' }); 
    // console.log(html);
}

module.exports = index
