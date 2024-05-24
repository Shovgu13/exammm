const mongoose = require('mongoose')


mongoose
.connect("mongodb+srv://shovgu:12345@exammproduct.lvvbjrl.mongodb.net/")
.then(()=>{
    console.log("server is working")
}).catch(err=>{
    console.log("server is not working"+err)
})