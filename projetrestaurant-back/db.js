const mysql = require('mysql2/promise');
const config = {
    db: {
        host: "127.0.0.1",
        user:"root",
        password:"noel2016",
        database: "restaurant",
        connectTimeout: 60000
    }
};

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);
    connection.end();
    return results;
}

module.exports = {
    query
}