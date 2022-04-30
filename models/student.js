let mongoose = require('mongoose');



// Employee Schema
const Student = mongoose.model('Student', {
    name: {
        type: String,
        required:true
    },
    grade: {
        type:String,
        required:true
    },
    average: {
        type:String,
        required:true
    },
    school: {
        type:String,
        required:true
    }
});



module.exports = {Student}