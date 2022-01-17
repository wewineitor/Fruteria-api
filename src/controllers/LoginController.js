const conexion = require('../data/conexion')
const bcrypt = require('bcryptjs')

class LoginController{
    createUser = (req, res) => {
        const {email, usuario, contra} = req.body
        const contraEcryptada = bcrypt.hashSync(contra, 8)
        let query = `call verificarUsuario('${email}', '${usuario}')`
        try {
            conexion.query(query, (err, rows) => {
                if(err) throw err
                const result = rows[0].map(row => row.total)
                if(result[0] === 1) {
                    res.json({message: 'Usuario o correo ya utilizados'})
                }
                else {
                    query = `call crearUsuario('${email}', '${usuario}', '${contraEcryptada}')`
                    conexion.query(query, () => {
                        res.json({message: 'ok'})
                    })   
                }
            })
        }
        catch(err){
            res.json({message: 'error'})
        }
    }

    loguear = (req, res) => {
        const {email, contra} = req.body
        const query = `select * from usuarios where email = '${email}'`


        conexion.query(query, (err, rows) => {
            if(err) throw err
            if(rows.length > 0 && (bcrypt.compareSync(contra, rows[0].contra) && email === rows[0].email)) {
                res.json({message: rows[0].usuario})
            }
            else {
                res.json({message: 'error'})
            }
        })
    }
}

module.exports = LoginController