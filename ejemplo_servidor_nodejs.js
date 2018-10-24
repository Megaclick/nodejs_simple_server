var http = require('http')
var objecc = {
    burger : 'king',
    prre : 'Auddd'
}
var server = http.createServer(function (request,response){
    console.log("ayyy")
    var method = request.method

    //response.end("aasdasd" + method)

    //JSON.stringify(object) (( pasa un obj a json))
    console.log(JSON.stringify(objecc))
    //request.url devuelve parametros del url
    response.write("se obtuvo respuesta del tipo " + method + " \n")

    var url = request.url;
    var data = url.split('?')

    if (data[0] === '/suma'){
        var suma = 0;
        var input = data[1].split('&')
        input.forEach(function (data){
            var number = Number(data.split('=')[1])
            suma +=number;
        })
        response.write('la suma es = ' + suma + '\n')

    }
    if (data[0] === '/resta'){
        var resta = 0;
        var resta2= 0;
        var input = data[1].split('&')
        input.forEach(function (data){
            var number = Number(data.split('=')[1])
            resta = resta2;
            resta2 = number; 
            
        })
        response.write('la resta es = ' + resta + '\n')

    }
    if (data[0] === '/multi'){
        var multi = 0;
        var input = data[1].split('&')
        input.forEach(function (data){
            var number = Number(data.split('=')[1])
            multi =multi *number;
        })
        response.write('la multi es = ' + multi + '\n')

    }

    response.end(request.url)

})
console.log('escuchando en localhost:9000')
server.listen(9000)
