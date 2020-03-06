const express = require("express")
const app = express()
app.listen(3000,(res)=>{
	console.log("成功")
})

app.get("/",(req,res)=>{  // 测试
	res.send("1")
})
app.get("/ko",(req,res)=>{  //访问地址
	res.send("ko----访问成功")
})
app.get("/bo",(req,res)=>{  // 失败
    res.send("0")
})