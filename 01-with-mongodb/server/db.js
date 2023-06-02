const mongoose = require("mongoose")
const dbUri = "mongodb://localhost:27001/codeaffection-nodejs-with-mongo-db"


module.exports = () => {
    return mongoose.connect(dbUri)
}


// if you get mongoose deprecated message
// mongoose.set('strictQuery', false)

// module.exports = () => {
//     return mongoose.connect(dbUri,
//         { useNewUrlParser: true, useUnifiedTopology: true })
// }