const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist_db', {useNewUrlParser: true, useUnifiedTopology: true});


//now verify the connection status

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected!HUrray');
});