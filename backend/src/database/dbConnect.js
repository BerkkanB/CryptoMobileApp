const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/cryptoNews", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("Database Connection Error"))