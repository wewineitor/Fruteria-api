const conexion = require('../data/conexion')

class CarritoController {
    getProductos = async(req, res) => {
        const { usuario } = req.body;
        const query = `SELECT * FROM carrito WHERE usuario = '${usuario}'`
        conexion.query(query, (err, rows) => {
            if(err) throw err 
            res.json(rows)
        })
    }

    addProductos = (req, res) => {
        const { usuario, fruta, precio } = req.body;
        const query = `call agregarCarrito('${usuario}', '${fruta}', ${precio})`
        conexion.query(query, (err, rows) => {
            if(err) throw err 
            res.json({message: 'ok'})
        })
    }

    deleteProducto = (req, res) => {
        const { fruta } = req.body;
        const query = `delete from carrito where nombre_fruta = '${fruta}'`
        conexion.query(query, (err, rows) => {
            if(err) throw err 
            res.json({message: 'ok'})
        })
    }

    comprarProductos = (req, res) => {
        const { usuario } = req.body;
        const query = `delete from carrito where usuario = '${usuario}'`
        conexion.query(query, (err, rows) => {
            if(err) throw err 
            res.json({message: 'ok'})
        })
    }
}

module.exports = CarritoController