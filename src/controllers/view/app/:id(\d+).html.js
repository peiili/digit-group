var axios = require('axios')

function getList(id, cb) {
  var url = 'http://test.mbti.ink/mbti_api/questions?info_id=' + id
  axios(url).then(e => {
    cb(e.data)
  })
}

function index(req, res) {
  let goods_id = req.query.id;
  let id = req.params.id;
  getList(id, (body) => {
    var data = body.data
    console.log(data);
    res.render('id', {
      name: data.name,
      list: data.list,
      goods_id: goods_id, 
      info_id: id
    });
  })
}
module.exports = index