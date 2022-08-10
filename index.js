var superagent = require("superagent")
var count= 0
var errr = 0
function respawn(url){
if(count == 20000 || errr==20000){
    console.log("suc" , count)
  console.log("err" , errr)
  }
  superagent
     .get(url)
     .end((err , res)=>{
       if(err){
         errr++
       }else{
         count++
       }
       respawn(url)
       
     })
}
respawn("http://alpidoveon.com/4/3587551")

console.log("started this mf")
require("http").createServer().listen(process.env.PORT)
