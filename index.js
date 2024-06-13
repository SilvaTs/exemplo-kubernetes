const http = require('http')

http.createserver((req, res) => {
  res.write('hello world')
  res.end()
}).listen(8088)