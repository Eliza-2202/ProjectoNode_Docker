/// arranca la aplicacion
import app from './app.js'
import {connectDB} from './db.js'

//ejecuta primero mongodb -> cmd(mongod)
connectDB();
app.listen(4000);
console.log('server on port', 4000);