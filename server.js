var http = require ('http'),
    fs   = require ('fs'),
    url  = require ('url'),
    mime = require ('mime'),
    port = process.env.PORT || 3000

function creatingServer(request, response) {
  var urlPath = request.url === '/' ? '/index.html' : url.parse(request.url).pathname
  fs.readFile('.' + urlPath, function (error, file) {
    if (error) response.end ('404')
    response.setHeader('Content-Type', mime.lookup(urlPath))
    response.end(file)
  })
}

var server = http.createServer(creatingServer)
server.listen(port, function() {
  console.log('running on port' + port)
})
