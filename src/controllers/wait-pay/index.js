var axios = require('axios')
function getPrice(id, cb){
    var url = 'http://test.mbti.ink/mbti_api/order/prices?order_id='+ id
    axios(url).then(e => {
      cb(e.data)
    })
  }

function index(req, res){
    const id = req.query.id
    getPrice(id, function(res){
        res.render('wait-pay', { 
            list: res.data
        });
    })
}

module.exports = index
