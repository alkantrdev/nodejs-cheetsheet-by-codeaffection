const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password: 'P@ssword1',
    database: 'codaffection_employee_db'
})

// mysqlPool.query("SELECT 1")
// .then(() => console.log('db connection succeeded.'))
// .catch(err => console.log('db connection failed. \n' + err))

module.exports = mysqlPool