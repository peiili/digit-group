const ejs = require('ejs')
const http = require('http')
const moment = require('moment')

function thisYear(date){
    return moment().format('YYYY') === moment(date).format('YYYY')

}
function getList(cb){
  const postData = {
    type: 2,
    status: 1,
    fuzzy: '',
    page:1,
    size:10
  }
  const options = {
    hostname:'127.0.0.1',
    port: 5166,
    path: '/api/grabbag/getList',
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
    let list = []
    getList((body)=>{
      list = body.data.list.map(e=>{
        const createDate =  thisYear(e.created_date)? moment(e.created_date).format('MM-DD'):moment(e.created_date).format('YYYY-MM-DD')
        return {
          ...e,
          createDate: createDate,
        }
      })
      res.render('index/index', { list: list });
    })
}

module.exports = index
