const mongooese = require("mongoose");

const StudentSchema = new mongooese.Schema({
    Registernumber: {
        type: Number,
        required: true,
        
    },
    Studentname: {
        type: String,
        required: true,
        unique:true,
    },
    department: {
    type: String,
    required: true,
    },
});

const student = mongooese.model("Studentdetails", StudentSchema);

module.exports = student;