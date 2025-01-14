const axios = require('axios')
const moment = require('moment')

function index(req, res){
    const id = req.params.id
    var url = 'http://127.0.0.1:8090/mbti_api/article/item?id='+id
    axios(url).then(e=>{
        console.log(e);
        
        if( e.status===200 ){
            res.render('article', {
              title: e.data.data.title,
              html: e.data.data.content,
              cover: e.data.data.cover,
              createDate: moment(e.data.data.create_time).format('YYYY-MM-DD'),
              keywords: e.data.data.keywords,
              description: e.data.data.description,
            });
          }
      
    })
}

module.exports = index
