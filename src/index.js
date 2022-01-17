const express =  require('express')
const cors = require('cors')
const app = express()
const port = 4000;

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use(require('./routes/LoginRoutes'))
app.use(require('./routes/CarritoRoutes'))

app.listen(port, () => {
    console.log(`Server listen in port: ${port}`)
})