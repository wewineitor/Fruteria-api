const {createPool} = require('mysql')

const conexion = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fruteria'
})

module.exports = conexion;