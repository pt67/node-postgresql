const express = require('express');
const path = require('path');
const { pool } = require('./model');
const app = express();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/*
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

const UNISWAP = require('@uniswap/sdk');
console.log(`The chainId of mainnet is ${UNISWAP.ChainId.MAINNET}.`);

const ejs = require('ejs');
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
pool.query('SELECT * FROM todos',  (err, result) => {
  if (err) throw err;
  //console.log(result.rows)
  res.render('index', {todos: result.rows  });
})
});

app.post('/', urlencodedParser, (req, res) => {
//console.log(req.body);
res.redirect('/');
pool.query("INSERT INTO todos(task, detail) VALUES($1, $2)", [req.body.task, req.body.detail], (err, result) => {
  if (err) {
    console.log(err.stack)
  } 
})
})


//Send delete request

app.get('/:id', urlencodedParser, (req, res) => {
var id = req.params.id;
res.redirect('/');
pool.query("DELETE FROM todos WHERE id=$1", [id], (error, result)=>{
if(error){
console.log(error);
}else{
console.log(result);
}
 
})
})


const port = 3000;
app.listen(port, () => {console.log(`App running on port 3000.`)})
