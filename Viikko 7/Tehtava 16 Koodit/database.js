const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Porkkana123',
  database: 'book'
});
module.exports = connection;