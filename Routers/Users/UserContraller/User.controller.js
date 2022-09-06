const fs = require("fs")
const data = fs.readFileSync("user.json")
const parseData = JSON.parse(data)

module.exports.RandomUser =(req , res) =>{
    const randomNumber = Math.ceil(Math.random() * 8) 
    const showData = parseData.find( d => d.id == randomNumber)      
    res.send(showData)  
     
}
module.exports.AllUser =(req , res) =>{
res.send(parseData)
}
module.exports.saveUser =(req , res) =>{
const users = req.body 
parseData.push(users)
res.send(parseData)
}
module.exports.updateUser =(req , res) =>{
const {id} = req.params
let newUpdate =parseData.find(data => data.id == id)
newUpdate.id= id
newUpdate.name = req.body.name
console.log(newUpdate)
res.send(newUpdate)
}
module.exports.bulkUpdateUser =(req , res) =>{
res.send("Random  patch bulk update  user")
}
module.exports.deleteUser =(req , res) =>{
res.send("Random delete user")
}