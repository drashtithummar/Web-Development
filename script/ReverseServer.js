var net = require('net');
var clients = 0;

function reverse_String(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return 'Reverse String = ' + newString;
}

var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(reverse_String(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})