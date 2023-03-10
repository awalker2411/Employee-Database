const mysql2 = require(`mysql2/promise`)
require(`dotenv`).config()

const connection = async() => {
    const db = await mysql2.createConnection(
        {
            host: `localhost`,
            user: `root`,
            password: process.env.PASSWORD,
            database: `company_db`
        },
        console.log(`Now connected to THE COMPANY database.`)
    )
    return db
}

module.exports = connection