const http = require('http')
const moment = require('moment')
const marked = require('marked')

function thisYear(date){
    return moment().format('YYYY') === moment(date).format('YYYY')

}
function getArticle(id,cb){
  const postData = {
    id: id
  }
  const options = {
    hostname:'127.0.0.1',
    port: 5166,
    path: '/api/article/detail',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(postData)),
    },

  }
  const req = http.request(options ,(res)=>{
    let data = Buffer.alloc(0)
    res.on('data',(chunk)=>{
      data = Buffer.concat([data,chunk])
    })
    res.on('end',()=>{
      const body = JSON.parse(data.toString())
      cb(body)
    })
  })

  req.write(JSON.stringify(postData));
  req.end();
}

function index(req, res){
    const id = req.params.id
    getArticle(id ,(body)=>{
        var e = body.data[0]
        const createDate =  thisYear(e.created_date)? moment(e.created_date).format('MM-DD'):moment(e.created_date).format('YYYY-MM-DD')
        res.render('article', { 
                title: e.title,
                createDate: createDate,
                description: e.description,
                keywords: e.keywords,
                html: marked.parse(e.marked)
            });
    })
}

module.exports = index
