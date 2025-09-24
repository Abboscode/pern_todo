const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '2275104',
    host: 'localhost',
    port: 54879,
    database: 'tododb'
});

module.exports = pool;