const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
     discrirption:{
        type:String,
        required:true
     },
    time:{
        type:String
    },
    date:{
        type:Date,
        required:true

    },
    purpose:{
        type:String,
        required:true
    }
  },{
      timestamps:true
  });

  const Todolist_db = mongoose.model('todolist_db', todolistSchema);
  module.exports = Todolist_db;