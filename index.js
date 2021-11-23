const express = require('express');
const bodyparser = require ('body-parser')
const query = require('./server/pelit')
const app = express();
app.use(bodyparser.json());

const port = 3000;


app.get("/pelit", query.getAllpelit);




app.listen(port, () => {{}
    console.log(`serveri on päällä ${port}`);
})


module.exports = app;
