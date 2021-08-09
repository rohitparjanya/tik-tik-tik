//import express
const express= require('express');
//template engine is embededjavascript(ejs)
const ejs = require('ejs');
//we need to get the current path
const path = require('path');
const { urlencoded } = require('body-parser');

//import the db and use it'
const db = require('./config/mongoose');

//import the model
const Todolist_db = require('./model/todolistschema');


//give a port to hit our server
const port = 8080;

//fire up the server
const app = express();

//set ejs-> as soon as we set ejs it always looks for html files in views folder so we have to set the path 
app.set('view engine','ejs');
//as we have set the view engine if you want you can set the path to views folder
app.set('views',path.join(__dirname,'views'));

//middle ware
app.use(express.urlencoded());

//middle ware 2 for acessing the static files
app.use(express.static('assets'));

//middle ware 3 for express router
app.use('/',require('./routes'));


app.get('/',function(req,res){

    Todolist_db.find({},function(err,todoList){
        if(err){console.log(err);return;}

        return res.render('home_tik_tik_tik',{
            title:"HOME-TIK-TIK-TIK",
            todo_List:todoList
            
        });

    });

    

});

app.get('/delete',function(req,res){

    //here wll get the id as we are using query 
    console.log(req.query);

    //store it in var
    let idx = req.query.id;

    //find it in db and delete
    Todolist_db.findByIdAndDelete(idx,function(err){
        if(err){console.log(err);return;}
    })

    return res.redirect('back');
});

app.post('/create-list',function(req,res){
    //populate the db

    Todolist_db.create(req.body,function(err){
        if(err){console.log(err);return;}
        return res.redirect('back');
    });

    
});


//now listen to the requests
app.listen(port,function(err){
    if(err){console.log(err);return;}

    console.log(`server is running on ${port}`);
})
