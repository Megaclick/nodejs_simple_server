/**
 ** Add method
 ** This method takes the query parameter from the url and response stream, in order to go throw the params
 ** and make the add operation, and to send the response on the response stream.
 **/
function add (query, response) {
  var suma = 0
  for (var propName in query) {
      var splitted = query[propName]
      if(isNumeric(splitted)) {
        //Ok, it's a number
        var number = Number(splitted)
        suma += number
      } else {
        //It's not a number, so we show an error message and sends to the client
        response.writeHead(400, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
  }
  //If everithing was OK, we send code 200 response, using json format
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.end(JSON.stringify({result:suma}))
}
function fibbonacci(query,response){
  var init = 0, first_term = 1, temp = 0 //primeros terminos de la suma de fibbonacci
  //solo me interesa el primer elemento de mi json, por ende se utilizara break

  for (var propName in query) {
    var splitted = query[propName]
    if(isNumeric(splitted)) { //si el objeto es un numero
      var number = Number(splitted) // se pasa a tipo number y se multiplica
      var contador = 0
      while(contador<number){
        temp = first_term;
        first_term = first_term+ init;
        init = temp;
        contador++;
      }
    }
    else {
      response.writeHead(400, {'Content-Type': 'application/json'}) //si no funciona ocurre error 400
      response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
    break
  }
  response.writeHead(200, {'Content-Type': 'application/json'}) //si funciona manda codigo 200
  response.end(JSON.stringify({result:init}))
}


  



function multi(query, response) { //Sigue la misma estructura que la suma
  var multiplicacion = 1
  for (var propName in query) { // se recorre cada elemento del diccionario, propname = variable
      console.log(query[propName]) //query[propname] valor que se contiene en propname

      var splitted = query[propName]
      if(isNumeric(splitted)) { //si el objeto es un numero
        var number = Number(splitted) // se pasa a tipo number y se multiplica
        multiplicacion *= number
      } else {
        response.writeHead(400, {'Content-Type': 'application/json'}) //si no funciona ocurre error 400
        response.end(JSON.stringify({result:'error, el input debe ser numerico'}))
      }
  }
  response.writeHead(200, {'Content-Type': 'application/json'}) //si funciona manda codigo 200
  response.end(JSON.stringify({result:multiplicacion}))
}

/**
 ** isNumeric returns true if input is a number. This can be done using the oppsite behaviour from isNaN function
 **/
function isNumeric(num) {
  //isNaN returns false if the input is a number, true otherwise
  return !isNaN(num)
}

//In this line we export the functions to be used in other javascript files. We must import this module with 'require' signature
module.exports.add = add
module.exports.multi = multi
module.exports.fibbonacci = fibbonacci
