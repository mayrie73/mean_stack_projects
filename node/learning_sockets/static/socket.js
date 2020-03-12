$(document).ready(function () {
    // this triggers the connection event in our server!
    var socket = io.connect();
    // we'll write all the socket stuff after the above line!
    $('#newEvent').click(function () {
        socket.emit("button_clicked", {msg: "I was sent from the client"});
    });
   //listener
    socket.on('button_response', function (data) {
       $('#notes').append(`<h3>${data.msg}</h3>`)
    });
    $('form').submit(function(){
        var name=($('#name').val())
        socket.emit('form_submission', {user: name})
        return false;
    })
    socket.on('form_response', function(data){
        $('#notes').append(`<h3>${data.msg}</h3>`) 
    })
})