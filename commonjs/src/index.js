const p = require('./services/products')
const c = require('./services/client')

async function main() {
    console.log(p.production)
    console.log(c.device)
}
main()