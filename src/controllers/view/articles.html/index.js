function index(req, res){
  res.render('articles', {
    list: []
});
}

module.exports = index
