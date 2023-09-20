var mysql = require("mysql");
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "student"
}) ;

module.exports = con;

// con.connect(function(error){
//     if(error) throw error;
//     console.log("Connected");
//     con.query("select * from details", function(error, result){
//         if(error) throw error;
//         console.log(result);
//     });
// });
