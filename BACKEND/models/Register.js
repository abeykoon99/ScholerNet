const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({

    leader : {
        type : String,
        required : true  //backend validation
    },
    lmail : {
        type : String,
        required : true  //backend validation
    },
    intake : {
        type : String,
        required : true
    },
    lcont : {
        type : String,
        required : true
    },
    lreg : {
        type : Number,
        required : true
    },
    spec : {
        type : String,
        required : true
    },
    mem2 : {
        type : String,
        required : true
    },
    reg2 : {
        type : String,
        required : true
    },
     mail2 : {
        type : String,
        required : true
    },
     cont2 : {
        type : String,
        required : true
    },
    mem3 : {
        type : String,
        required : true
    },
    reg3 : {
        type : String,
        required : true
    },
     mail3 : {
        type : String,
        required : true
    },
     cont3 : {
        type : String,
        required : true
    },
    mem4 : {
        type : String,
        required : true
    },
    reg4 : {
        type : String,
        required : true
    },
     mail4 : {
        type : String,
        required : true
    },
     cont4 : {
        type : String,
        required : true
    }, 
     ptitle : {
        type : String,
        required : true
    },
     area : {
        type : String,
        required : true
    },
    ptype : {
        type : String,
        required : true
    },
    p2 : {
        type : String,
        required : true
    },
    p3 : {
        type : String,
        required : true
    }

})

const Register = mongoose.model("Register",registerSchema);

module.exports = Register;