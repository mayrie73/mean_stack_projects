$(document).ready(function () {
    // this triggers the connection event in our server!
    var socket = io.connect();
    // we'll write all the socket stuff after the above line!
    $('#push_button').click(function(){
      socket.emit('button_pushed', {msg:"The button was pushed"});
    })
    // button to reset the counter
    $('#reset_count').click(function(){
        socket.emit('reset_counter', {msg:"The reset button was pushed"});
      })
    socket.on('push_response', function (data){
        $('#message').html("The button has been pushed " + JSON.stringify(data.response)+ " time(s)");
    });
    socket.on('reset_response', function (data){
        $('#message').html(' ');
    });
      });