const express = require('express');
const cors = require('cors');
const app = express();

//setting - configuración del servidor

app.set('port', process.env.PORT || 4000);

//milddlewares - poder definir algunas funciones antes de llegar a las rutas
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require ('./routes/users'))
app.use('/api/notes', require ('./routes/notes'))

module.exports = app;