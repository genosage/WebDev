var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0427',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * from user', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});
 
connection.end();