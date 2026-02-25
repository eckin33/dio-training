const p = require('./services/products')
const c = require('./services/client')
const database = require('./services/database')

async function main() {
    console.log(p.production)
    console.log(c.device)
    database.connectDatabase("mongodb")
    console.log(typeof(c))
}
main()