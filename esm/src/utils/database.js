//Exportar direto

export const getInfoFromData = () => {
    console.log("Banco de dados")
}

async function connectdb(dataName) {
    console.log('Conectado ao ' + dataName)
}

async function disconnect() {
    console.log('Disconnect from database')
}

//Quando for um só:
//export default connectdb

//Para expostar mais de um de uma vez:
export {
    connectdb,
    disconnect
}
