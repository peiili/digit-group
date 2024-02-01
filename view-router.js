const fs = require('fs');
const path = require('path');
const express = require('express')
const router = express.Router()

function viewRoute(app) {
    // app.use('/view', article);
    // app.get('/view', (req, res) => {
    //     res.render('index', {foo: 'FOO', delimiter: '?'});
    // });
    const files = fs.readdirSync('./route')
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fulepath = path.join(__dirname, 'route', file)
        const func = require(fulepath)
        router.get('/'+file.replace('.js',''), func)
    }
    
    router.get('/view/*', (req, res) => {
        res.status(301).redirect('/view')
    });
    app.use('/view', router)
}

module.exports = viewRoute;