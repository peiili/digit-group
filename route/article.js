function index(req, res){
    res.render('article', { foo: 'FOO', delimiter: '?' });
}

module.exports = index
