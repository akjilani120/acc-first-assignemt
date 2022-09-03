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
// const saveData = parseData.find(p => (p.id && p.gender && p.name && p.Contact && p.address && p.photoUrl ) !=(users.id && users.gender && users.name && users.Contact && users.address && users.photoUrl))
// console.log(saveData)
parseData.push(users)
res.send(parseData)
}
module.exports.updateUser =(req , res) =>{
res.send("Random  patch update  user")
}
module.exports.bulkUpdateUser =(req , res) =>{
res.send("Random  patch bulk update  user")
}
module.exports.deleteUser =(req , res) =>{
res.send("Random delete user")
}