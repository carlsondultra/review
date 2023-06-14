const  { Pool } = require("pg")

//connecting to postgres database
const pool = new Pool()

module.exports = {
    query: (text, params) => pool.query(text, params),
}