export default () => ({
    port: process.env.PORT,
    mongodb: {
        uri: process.env.MONGO_URI,
        db: process.env.MONGO_DB
    },
    mysql: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME || 'myuser',
        password: process.env.DATABASE_PASSWORD || 'mypassword',
        database: process.env.DATABASE_NAME || 'user_management',
        logging: process.env.DATABASE_DEBUG === 'true',
    }
})