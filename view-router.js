const fs = require('fs');
const path = require('path');
const express = require('express')
const router = express.Router()

function deep(dir,subdir){
    const files = fs.readdirSync('./'+dir)
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fulepath = path.join(dir, file)
        const isDirectory = fs.statSync(fulepath).isDirectory()
        if(isDirectory){
            deep(dir+ '/' +file, subdir+ '/' +file)
            continue
        }
        const func = require('./'+fulepath)
        router.get(subdir+'/'+file.replace('.js',''), func)
    }
}
function viewRoute(app) {
    deep('route', '')
    router.get('/view/*', (req, res) => {
        res.status(301).redirect('/view')
    });
    app.use('/view', router)
}

module.exports = viewRoute;