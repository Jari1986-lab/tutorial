const mysql = require('mysql');

let db = mysql.createConnection({
  host: "localhost",
  user: "games",
  password: "test123",
  database: "retropelit"
});

db.connect((err) =>{
  if (!err)
 console.log ('tietokanta yhteys')
 else
 console.log('tietokanta yhteys failed \, error:' + JSON.stringify(Err, undefined, 2));
 
});



module.exports = {
  query: (text, params) => db.query(text, params)
}

/*db.connect ((err) => {
  if (err) throw err;

  db.query("SELECT * FROM pelit", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

*/




