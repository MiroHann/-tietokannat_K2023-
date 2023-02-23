const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'XXXX',
  database: 'mydb'
});
module.exports = connection;