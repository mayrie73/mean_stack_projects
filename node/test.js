console.log("i am running from node");

io.sockets.on('connection', (socket) =>{
    console.log('socket connection');
    console.log('socket id:', socket.id);
    socket.on('posting_form', (data) =>{
      var random_number = Math.floor((Math.random() * 1000) + 1);
      socket.emit('updated_message', {response: data});
      socket.emit('random_number', {response: random_number});
      });
    });
    
    app.use(session({
      secret: "phoenix", // my spirit animal
      resave: false,
      saveUninitialized: true // I have no idea what this if for haha
    }))