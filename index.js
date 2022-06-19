const express = require('express');
const http = require('http');
const fs = require('fs');

var listen_port = process.env.PORT;

let handleRequest = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
      response.writeHead(404);
      respone.write('Whoops! File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
};

http.createServer(handleRequest).listen(listen_port);
console.log("Your listening to the port ", listen_port);
