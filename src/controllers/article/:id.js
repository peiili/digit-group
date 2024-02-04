function index(req, res){
    console.log(req.params);
    const id = req.params.id
    res.render('article', { foo: id });
}

module.exports = index
