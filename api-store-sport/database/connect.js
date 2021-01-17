const mysql = require('mysql');
const connect_db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api_store_sport"
});
connect_db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
});

module.exports = connect_db