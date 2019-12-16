var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];
// console.log(process);
if(!port){
    console.log('请node server.js后指定端口号')
    process.exit(1)
    }
    var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method
    /******** 从这里开始看，上面不要看 ************/
    //console.log(path);
    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)
    if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <h1>node服务测试</h1>
        </body> 
        </html>
    `)
    response.end()

    } else if(path === '/style.css'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`h1{color: red;}`)
    response.end()

    } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你访问的页面不存在`)
    response.end()
    }
    /******** 代码结束，下面不要看 ************/
    })
    server.listen(port);
    // server.listen(8080);
    //console.log(process.argv);
    console.log('监听 ' + port + ' 成功\n http://localhost:' + port)