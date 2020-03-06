const express = require("express")
const app = express()
app.listen(3000,(res)=>{
	console.log("成功")
})

app.get("/",(req,res)=>{
	res.send("1")
})
app.get("/ko",(req,res)=>{
	res.send("ko----访问成功")
})
app.get("/bo",(req,res)=>{
    res.send("0")
})