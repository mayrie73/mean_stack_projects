$(document).ready(function () {
    // this triggers the connection event in our server!
    var socket = io.connect();
    // we'll write all the socket stuff after the above line!
    $('form').submit(function(){
        var name=($('#name').val())
        var location=($('#location').val())
        var language=($('#language').val())
        var comment=($('#comment').val())
        socket.emit('posting_form', 
        {name: name, location: location, language: language, comment: comment})
        return false;
    })
    socket.on('updated_message', function (data){
        $('#message').html("You emitted the following information to the server: " + JSON.stringify(data.response));
    });
    socket.on('random_number', function (data){
       $('#number').html("Your lucky number emitted by the server is : " + JSON.stringify(data.response));
    });
      });