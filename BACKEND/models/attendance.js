const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

   
    r1 : {
        type : String,
        required : true  //backend validation
    },
    r2 : {
        type : String,
        required : true  //backend validation
    },
    r3 : {
        type : String,
        required : true
    },
    r4 : {
        type : String,
        required : true
    },
    r5 : {
        type : String,
        required : true
    },
    r6 : {
        type : String,
        required : true
    },
    r7 : {
        type : String,
        required : true
    },
    r8 : {
        type : String,
        required : true
    },
    r9 : {
        type : String,
        required : true
    }
    

})

const Attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = Attendance;