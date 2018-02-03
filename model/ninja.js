const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// 7. set up the database (mongoDB) using mongoose
const NinjaSchema = new Schema ({
     name: {
         type: String,
         required: [true, 'Name field is required']
     },
     rank: {
         type: String
     },
     available: {
         type: Boolean,
         default: false
     }
});
// add in geo-location

// 8. Creating a ninja model. 'ninja' is the name of the collection in the database 
const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja