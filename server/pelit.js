const db = require('./mysql')

const getAllpelit = (_req, res) => {
    db.query('select * from pelit', (err, result) => {
        
        if (err)
        console.error(err);
        else
        res.json(result.rows)
    })

    }

module.exports = {
    getAllpelit: getAllpelit
    }
