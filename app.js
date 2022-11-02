const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static("public"));


let ToDoArray = [];


app.get("/", (req,res)=>{
  let today = new Date();
  let currDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  let day = today.toLocaleDateString("en-GB", options);
   
  res.render("list", {
    kindOfDay : day,
    newListItems : ToDoArray
  });
})

app.post("/", (req, res)=>{

    //user input saving in Todo
    let Todo = req.body.todoinput;   

    //adding to array - pushing to To do array
    ToDoArray.push(Todo);
    res.redirect("/");
   

    //empty input will not be added! 
    if(Todo === ""){
        ToDoArray.pop(Todo);
    }
});



//listening port 
app.listen(3000, (req,res)=>{
    console.log("listening at port 3000!"); 
})