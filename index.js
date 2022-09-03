var http = require('http');

var server = http.createServer(function(req, res){

    if(req.url == '/'){
            // res.writeHead(200, {"Content-Type" : "applictaion/json"})
            res.writeHead(200, {"Content-Type" : "application/json"})
            // res.write("<h1>This is home page</h1>")
            res.end(JSON.stringify({course : "ACC"}))
     }

});
const PORT = 5000
server.listen(PORT); 
console.log(`My code id ready ${PORT}`)