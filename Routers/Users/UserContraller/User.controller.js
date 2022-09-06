const fs = require("fs")
const { use } = require("../Random/RandomUser.rounter")
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
let newUpdate = parseData.find(data => data.id == id)
newUpdate.id= id
newUpdate.name = req.body.name
console.log(newUpdate)
res.send(newUpdate)
}
module.exports.bulkUpdateUser =(req , res) =>{
 const {id}=req.params
 const user = req.body
 const {name , gender, photoUrl , Contact} = user
 let newUpdate = parseData.find(data => data.id == id)
 newUpdate.id = id
 newUpdate.name= name
 newUpdate.gender=gender
 newUpdate.photoUrl = photoUrl
 newUpdate.Contact = Contact
 console.log(newUpdate)
res.send(newUpdate)
}
module.exports.deleteUser =(req , res) =>{
const {id} = req.params
const deleteData = parseData.filter(data => data.id != id)
console.log(deleteData)
res.send(deleteData)
}