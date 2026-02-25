//Importar um só:
//import connectdb from "./utils/database.js";

//Importar tudo de um arquivo:
import { connectDatabase } from '../../commonjs/src/services/database.js'
import * as database from './utils/database.js'

//Destucturing
//import { connectdb, disconnect } from './utils/database.js'

import { getInfoFromData } from './utils/database.js'

database.connectdb('rango')
database.disconnect()
getInfoFromData()

