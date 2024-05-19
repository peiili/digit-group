const ejs = require('ejs')
const http = require('http')
const moment = require('moment')

function thisYear(date){
    return moment().format('YYYY') === moment(date).format('YYYY') ? moment(date).format('MM-DD'):moment(date).format('YYYY-MM-DD')
}

var website_id = ''
function getList(page=1,cb){
  const postData = {
    type: 2,
    status: 'release',
    fuzzy: '',
    page: page,
    size: 20,
    website_id: website_id
  }
  const options = {
    hostname:'0.0.0.0',
    port: 5166,
    path: '/api/article/page',
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

function getWebsiteInfo(cb){
  var url = 'http://0.0.0.0:5166/api/website?id='+website_id
  http.get(url, function(res){
    let data = Buffer.alloc(0)
    res.on('data',(chunk)=>{
      data = Buffer.concat([data,chunk])
    })
    res.on('end',()=>{
      const body = JSON.parse(data.toString())
      cb(body.data)
    })
  })
}

function index(req, res){
    let list = []
    let page = req.query.page;
    website_id = req.self.hostToWebsite[req.host]
    getWebsiteInfo((website)=>{
      getList(page, (body)=>{
        list = body.data.list.map(e=>{
          const createDate =  thisYear(e.created_date)
          return {
            ...e,
            description: e.description.length>40? e.description.slice(0,40) +'...' : e.description,
            random: Math.floor(Math.random()*41)+1,
            createDate: createDate,
          }
        })
        res.render('index', {
          title: website.name,
          keywords: website.keywords,
          description: website.description,
          beian: website.beian,

          list: list,
          website_id: website_id,
          totalPage: body.data.totalPage,
          currentPage: body.data.currentPage 
        });
      })
    })
}

module.exports = index
