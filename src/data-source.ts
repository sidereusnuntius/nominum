import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env['HOSTNAME'],
    port: 5432,
    username: process.env['USERNAME'],
    password: process.env['PASSWORD'],
    database: process.env['DATABASE'],
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
})
