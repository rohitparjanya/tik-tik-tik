

//import the model
const Todolist_db = require('../model/todolistschema');


module.exports.home = function(req,res){
    Todolist_db.find({},function(err,todoList){
        if(err){console.log(err);return;}

        return res.render('home_tik_tik_tik',{
            title:"HOME-TIK-TIK-TIK",
            todo_List:todoList
            
        });

    });
};


// for deleting the post
module.exports.delete = function(req,res){

    //here wll get the id as we are using query 
    console.log(req.query);

    //store it in var
    let idx = req.query.id;

    //find it in db and delete
    Todolist_db.findByIdAndDelete(idx,function(err){
        if(err){console.log(err);return;}
    })

    return res.redirect('back');
};

// for creating the post
module.exports.create = function(req,res){
    //populate the db

    Todolist_db.create(req.body,function(err){
        if(err){console.log(err);return;}
        return res.redirect('back');
    });

    
};

