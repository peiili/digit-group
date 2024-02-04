function index(req, res){
    res.render('article', { foo: 'FOO' });
}

module.exports = index
