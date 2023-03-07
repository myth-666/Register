const express=require("express");
const app=express();
app.use (express.json());
const cors=require('cors')
app.use(cors())
var mysql=require("mysql");
var con=mysql.createConnection(
    {
  host: "localhost",
  user: "root",
  password: "password",
  database: "register",
}
);
con.connect((err) => {
  if (err) console.log(err);
  else console.log("connected");
});

app.post("/Test",(req,res)=>{
    res.send("test");
});
app.post("/insert",(req,res)=>{
    let a=req.body.Name;
    let b=req.body.phonenumber
    let sql="insert into user(Name, phonenumber) values ('"+a+"','"+b+"')";
    console.log(sql)
    con.query(sql,(err,result)=>{
        if(err)
        res.send(err)
        else
        res.send(result)
    })
})
app.listen(4000,()=>{
    console.log ("servser is connected")
})