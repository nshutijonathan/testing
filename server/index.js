const express=require('express');
const bodyParser=require("body-parser");
const app=express();

const { expect }=require('chai');

const PORT=3000;

//bodyparser middleware
app.use(bodyParser.json());


app.get("/user",( req,res)=>{
res.status(200).send({
  msg: "successfully",
  status: 200
});
});
app.post("/user",(req,res)=>{
	const newUser={
		username:req.body.username,
		email:req.body.email,
		password:req.body.password
	};
	return res.status(200).json(newUser);
})

app.listen(PORT,()=>{
    console.log(`the app started on port ${PORT} `);
});


module.exports=app;
