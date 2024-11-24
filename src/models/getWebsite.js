var http = require('http')

var hostToWebsite = {

}
function website(req,res,next){
    if(hostToWebsite[req.hostname]){
        next()
        return 
    }
    // const hostname = req.hostname 
    const hostname = 'app.mbti.ink' 
    var url = 'http://0.0.0.0:5166/api/website/by-host?host='+ hostname
    http.get(url, function(result){
        if(result.statusCode===200){
            var body = Buffer.alloc(0)
            result.on('data', function(chunk){
                body = Buffer.concat([body, chunk])
            })

            result.on('end', function(){
                body = JSON.parse(body.toString())
                if(body.success){
                    var data = body.data
                    var website_id = data.id
                    hostToWebsite[req.hostname] = website_id
                    req.self.hostToWebsite = hostToWebsite;
                    next()
                }
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('请将域名分配给站点', 'utf-8')
        }
    })
  
}

module.exports = website;
