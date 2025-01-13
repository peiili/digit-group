var axios = require('axios')

const http = require('http')
const moment = require('moment')
const marked = require('marked')

function index(req, result){
  axios('http://127.0.0.1:8090/mbti_api/article/list?pageNo=1&pageSize=10').then((res)=>{
    console.log(res);
    if( res.status===200 ){
      result.render('articles', {
        list: res.data.data.pageData
      });
    }
  })

}

module.exports = index
