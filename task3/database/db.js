var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'prabhat@12345',
  database : 'prabhat'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("database connected");
    }
});

// Create Database;




module.exports=connection
