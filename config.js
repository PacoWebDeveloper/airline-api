require('dotenv').config()

const config = {
    api: {
        port: process.env.PORT,
        host: process.env.HOST,
        nodeEnv: process.env.NODE_ENV,
        secretOrKey: process.env.JWT_SECRET
    },
    db: {
        development: {
            dialect: 'mysql',
            host: 'localhost',
            username: 'root',
            password: '',
            database: 'airline'
        },
        production: {
            dialect: 'mysql',
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            /* define: {
                timestamps: true,
                underscoredAll: true
            } */
        }
    }    
}

module.exports = config