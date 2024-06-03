function index(req, res){
  res.render('ch', {
    list: [],
  });
    // let list = []
    // let page = req.query.page;
    // website_id = req.self.hostToWebsite[req.host]
    // getList(page, (body)=>{
    //   list = body.data.list.map(e=>{
    //     const createDate =  thisYear(e.created_date)
    //     return {
    //       ...e,
    //       description: e.description.length>40? e.description.slice(0,40) +'...' : e.description,
    //       random: Math.floor(Math.random()*41)+1,
    //       createDate: createDate,
    //     }
    //   })
    //   res.render('ch', {
    //     list: list,
    //   });
    // })
}

module.exports = index