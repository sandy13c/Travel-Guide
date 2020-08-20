const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Adil@123',
  database: 'vacations'

});

const resortlist = [
  {resort_id:1,resortname:"Turks and Cacos",country:"Cayman Islands",url:"https://turksandcaicostourism.com/"},
  {resort_id:2,resortname:"Baga Beach Resort",country:"India",url:"http://www.thebagabeachresort.com/"},
  {resort_id:3,resortname:"Disneys Carriebean Resort",country:"United States",url:"https://disneyworld.disney.go.com/resorts/caribbean-beach-resort/"}
]
mysqlConnection.connect(err=>{
  if (err) {
    console.log('It was not successful \n Error:' + JSON.stringify(err,undefined,2));
  } else {
    console.log('Its a success');
  }
  });

  app.get('/list',(req,res) => {
      res.send(resortlist);
  });

  app.post('/addlist',(req,res)=> {
    let resorts = {
      resort_id: req.body.resort_id,
      resortname: req.body.resortname,
      country: req.body.country,
      url: req.body.url
    }
    resortlist.push(resorts);

    res.send('Resort is addded');
  });

  app.delete('/deleteresort/:id',(req,res) => {
      let takeout = resortlist.find((item) =>{
        return item.resort_id === parseInt(req.params.id,10);
      });
      if (takeout) {
        let removeit = resortlist.indexOf(takeout);
        resortlist.splice(removeit,1);
      }
      res.status(200).send('Resort is gone');
  });

app.get('/register',(req,res) => {
     mysqlConnection.query("SELECT * FROM register",(err,rows,fields) => {
       if(!err) {
         res.send(rows);
       } else {
         console.log(err);
       }
     });
});

app.post('/register/addUser',(req, res) => {

   mysqlConnection.query("INSERT INTO register(`first_name`,`last_name`,`user_name`,`password`,`confirmpassword`)VALUES('"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.user_name+"','"+req.body.password+"','"+req.body.confirmpassword+"')",
   (err,rows) => {
     if (!err) {
       res.send("User is added");
     } else {
       console.log(err);
     }
  });
});

app.post('/login/add', (req,res) => {
  mysqlConnection.query("INSERT INTO login(`username`,`password`)VALUES('"+req.body.username+"','"+req.body.password+"')",(err,rows) =>{
    if(!err) {
      res.send("Added to login");
    } else {
         console.log(err);
    }
});
});

app.get('/comments',(req,res) => {
     mysqlConnection.query("SELECT * FROM commentsection",(err,rows,fields) => {
       if(!err) {
         res.send(rows);
       } else {
         console.log(err);
       }
     });
});
app.post('/comments/add',(req,res) => {
  mysqlConnection.query("INSERT INTO commentsection SET ?",req.body,(err,rows) => {
     if (!err) {
       res.send('Comment Added');
     } else {
         console.log(err);
     }
  });
});
app.delete('/comments/:id', (req,res) => {
  mysqlConnection.query("DELETE FROM commentsection WHERE com_id = ?",[req.params.id],(err,rows) => {
    if (!err) {
      res.send('Comment Deleted');
    } else {
        console.log(err);
    }
  });
});



app.listen(3100,() => {
   console.log("The app is listening");
});
module.exports = app;
